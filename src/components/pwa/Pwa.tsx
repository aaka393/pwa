import React, { useEffect, useState } from 'react';
import useStore from './store';
import packageJson from '../../../package.json';
import { RiAlertLine } from "react-icons/ri";
const Pwa: React.FC = () => {
  const {isOnline, setIsOnline, showPrompt, setShowPrompt } = useStore();
  const [installPrompt, setInstallPrompt] = useState<Event | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
    };

    const checkIfInstalled = () => {
      if (window.matchMedia('(display-mode: standalone)').matches) {
        setIsInstalled(true);
      }
    };

    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    // Event listeners for online/offline changes
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    // Initial check for online status
    updateOnlineStatus();

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    checkIfInstalled();

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, [setIsOnline]);

  const handleInstall = () => {
    if (installPrompt) {
      (installPrompt as any).prompt();
      (installPrompt as any).userChoice.then((choiceResult: { outcome: string }) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setInstallPrompt(null);
      });
    }
  };

  const handleClose = () => {
    setInstallPrompt(null);
  };

  const handleDontShowAgain = () => {
    setShowPrompt(false); // Persist the "Don't Show Again" choice
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 space-y-6 relative">
      {/* Main Content */}


      {!isOnline && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50 text-center p-6 bg-orange-500 rounded-lg shadow-lg w-full flex items-center justify-center">
          <p className="flex text-lg mb-1 items-center text-white">
            <RiAlertLine className='text-3xl mr-2' />
            Not connected to the internet
          </p>
        </div>
      )}

      {installPrompt && showPrompt && !isInstalled && (
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg max-w-md w-full text-center relative">
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
          >
            ✕
          </button>
          <h3 className="text-xl font-semibold mb-2">Install PWA: {packageJson.version}</h3>
          <p className="text-gray-400 mb-4">Would you like to install this app?</p>
          <div className="space-x-4 flex justify-center flex-wrap">
            <button
              onClick={handleInstall}
              className="px-4 py-2 sm:px-6 sm:py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm sm:text-base"
            >
              Install
            </button>
            <button
              onClick={handleDontShowAgain}
              className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm sm:text-base"
            >
              Don&apos;t Show Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pwa;
