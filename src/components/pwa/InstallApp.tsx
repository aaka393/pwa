// import React, { useEffect, useState } from 'react';
// import useStore from './store';
// import packageJson from '../../../package.json';
// const InstallApp: React.FC = () => {
//   const { showPrompt, setShowPrompt } = useStore();
//   const [installPrompt, setInstallPrompt] = useState<Event | null>(null);
//   const [isInstalled, setIsInstalled] = useState(false);

//   useEffect(() => {
//     const handleBeforeInstallPrompt = (e: Event) => {
//       e.preventDefault();
//       setInstallPrompt(e);
//     };

//     const checkIfInstalled = () => {
//       if (window.matchMedia('(display-mode: standalone)').matches) {
//         setIsInstalled(true);
//       }
//     };
//     window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
//     checkIfInstalled();

//     return () => {  
//       window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
//     };
//   },);

//   const handleInstall = () => {
//     if (installPrompt) {
//       (installPrompt as any).prompt();
//       (installPrompt as any).userChoice.then((choiceResult: { outcome: string }) => {
//         if (choiceResult.outcome === 'accepted') {
//           console.log('User accepted the install prompt');
//         } else {
//           console.log('User dismissed the install prompt');
//         }
//         setInstallPrompt(null);
//       });
//     }
//   };

//   const handleClose = () => {
//     setInstallPrompt(null);
//   };

//   const handleDontShowAgain = () => {
//     setShowPrompt(false); // Persist the "Don't Show Again" choice
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 space-y-6 relative">
//       {installPrompt && showPrompt && !isInstalled && (
//         <div className="p-6 bg-gray-800 rounded-lg shadow-lg max-w-md w-full text-center relative">
//           <button
//             onClick={handleClose}
//             className="absolute top-2 right-2 text-gray-400 hover:text-white"
//           >
//             ✕
//           </button>
//           <h3 className="text-xl font-semibold mb-2">Install PWA: {packageJson.version}</h3>
//           <p className="text-gray-400 mb-4">Would you like to install this app?</p>
//           <div className="space-x-4 flex justify-center flex-wrap">
//             <button
//               onClick={handleInstall}
//               className="px-4 py-2 sm:px-6 sm:py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm sm:text-base"
//             >
//               Install
//             </button>
//             <button
//               onClick={handleDontShowAgain}
//               className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm sm:text-base"
//             >
//               Don&apos;t Show Again
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default InstallApp;

// import React, { useEffect, useState } from 'react';
// import { XMarkIcon } from '@heroicons/react/24/outline';
// const InstallApp: React.FC = () => {
//   const [installPrompt, setInstallPrompt] = useState<Event | null>(null);
//   const [isInstalled, setIsInstalled] = useState(false);

//   useEffect(() => {
//     const handleBeforeInstallPrompt = (e: Event) => {
//       e.preventDefault();
//       setInstallPrompt(e);
//     };

//     const checkIfInstalled = () => {
//       if (window.matchMedia('(display-mode: standalone)').matches) {
//         setIsInstalled(true);
//       }
//     };
//     window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
//     checkIfInstalled();

//     return () => {
//       window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
//     };
//   },);

//   const handleInstall = () => {
//     if (installPrompt) {
//       (installPrompt as any).prompt();
//       (installPrompt as any).userChoice.then((choiceResult: { outcome: string }) => {
//         if (choiceResult.outcome === 'accepted') {
//           console.log('User accepted the install prompt');
//         } else {
//           console.log('User dismissed the install prompt');
//         }
//         setInstallPrompt(null);
//       });
//     }
//   };

//   const handleClose = () => {
//     setInstallPrompt(null);
//   };


//   return (
//     <>
//      <div className='w-full min-h-full'>
//         <div className='text-white bg-gray-800'>
//         Welcome to my Page
//         </div>
//         {installPrompt && !isInstalled && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div onClick={handleClose} className="absolute inset-0 bg-black bg-opacity-50" />
//           <div className="relative p-2 bg-gray-800 rounded-lg shadow-lg max-w-md w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-center animate-slideDownFast transform transition-all duration-300 ease-in-out top-[-40%]">
//             <button
//               onClick={handleClose}
//               className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
//             >
//               <XMarkIcon className="w-6 h-6" />
//             </button>
//             <div className="flex items-center justify-center space-x-4">
//               <p className="text-lg text-gray-200">
//                 This app is available to install
//               </p>
//               <button
//                 onClick={handleInstall}
//                 className="bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
//               >
//                 Install
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//      </div>
//     </>
//   );

// };

// export default InstallApp;



// import React, { useEffect, useState } from 'react';
// import { XMarkIcon } from '@heroicons/react/24/outline';

// const InstallApp: React.FC = () => {
//   const [installPrompt, setInstallPrompt] = useState<Event | null>(null);
//   const [isInstalled, setIsInstalled] = useState(false);

//   // Function to detect if the app is installed
//   const checkIfInstalled = () => {
//     const isIOSInstalled = (window.navigator as any).standalone; // iOS Safari
//     const isStandalone = window.matchMedia('(display-mode: standalone)').matches; // Other platforms

//     console.log('isIOSInstalled:', isIOSInstalled); // Debugging iOS detection
//     console.log('isStandalone:', isStandalone); // Debugging Android/desktop detection

//     setIsInstalled(Boolean(isIOSInstalled || isStandalone));
//   };

//   useEffect(() => {
//     // Listen for the 'beforeinstallprompt' event
//     const handleBeforeInstallPrompt = (e: Event) => {
//       e.preventDefault();
//       setInstallPrompt(e);
//     };

//     // Check installation status on component load
//     checkIfInstalled();

//     // Add event listener for install prompt
//     window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

//     return () => {
//       window.removeEventListener(
//         'beforeinstallprompt',
//         handleBeforeInstallPrompt
//       );
//     };
//   }, []);

//   // Trigger the install prompt
//   const handleInstall = () => {
//     if (installPrompt) {
//       (installPrompt as any).prompt();
//       (installPrompt as any).userChoice.then((choiceResult: { outcome: string }) => {
//         if (choiceResult.outcome === 'accepted') {
//           console.log('User accepted the install prompt');
//         } else {
//           console.log('User dismissed the install prompt');
//         }
//         setInstallPrompt(null);
//       });
//     }
//   };

//   const handleClose = () => {
//     setInstallPrompt(null);
//   };

//   return (
//     <div className="w-full min-h-full">
//       <div className="text-white bg-gray-800 p-4">
//         <h1 className="text-center">Welcome to My App</h1>
//       </div>

//       {/* Show installation status */}
//       <div className="text-center mt-4">
//         <h2 className="text-lg">
//           {isInstalled
//             ? 'The app is installed'
//             : 'The app is not installed'}
//         </h2>
//       </div>

//       {/* Install prompt UI */}
//       {installPrompt && !isInstalled && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div
//             onClick={handleClose}
//             className="absolute inset-0 bg-black bg-opacity-50"
//           />
//           <div className="relative p-4 bg-gray-800 rounded-lg shadow-lg max-w-md w-full text-center">
//             <button
//               onClick={handleClose}
//               className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
//             >
//               <XMarkIcon className="w-6 h-6" />
//             </button>
//             <div className="flex flex-col items-center space-y-4">
//               <p className="text-lg text-gray-200">
//                 This app is available to install
//               </p>
//               <button
//                 onClick={handleInstall}
//                 className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all duration-300 ease-in-out"
//               >
//                 Install
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default InstallApp;


import React, { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { BsPlusSquare } from "react-icons/bs";
import { CiSaveUp2 } from "react-icons/ci";

const InstallApp: React.FC = () => {
  const [isInstalled, setIsInstalled] = useState(false);
  const [, setIsIos] = useState(false);
  const [showIosBanner, setShowIosBanner] = useState(false);
  const [showAndroidBanner, setShowAndroidBanner] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<Event | null>(null);
  const [showSecondBanner, setShowSecondBanner] = useState(false);

  // Function to close the second banner
  const handleCloseSecondBanner = () => {
    setShowSecondBanner(false);
  };

  // Detect platform (iOS, Android, or Desktop)
  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice =
      /iphone|ipad|ipod/.test(userAgent) && !window.matchMedia('(display-mode: standalone)').matches;
    const isAndroidDevice = /android/.test(userAgent);

    setIsIos(isIosDevice);
    setShowIosBanner(isIosDevice); // Show iOS banner if on iOS
    setShowAndroidBanner(isAndroidDevice); // Show Android banner if on Android

  }, []);

  // Check if app is installed
  useEffect(() => {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isIOSStandalone = (window.navigator as any).standalone;

    setIsInstalled(Boolean(isStandalone || isIOSStandalone));
  }, []);

  // Handle Android install prompt
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  // Trigger install prompt on Android
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

  // Close iOS banner
  const handleCloseIosBanner = () => {
    setShowIosBanner(false);
  };

  // Close Android banner
  const handleCloseAndroidBanner = () => {
    setShowAndroidBanner(false);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="text-white bg-gray-800 p-4">
        <h1 className="text-center">Welcome to My App!</h1>
      </div>

      {/* Show platform-specific banners */}
      {showIosBanner && !isInstalled && (
        <div>
        {/* First Banner */}
        <div className="fixed inset-x-0 top-16 bg-gray-800 text-white p-2 flex flex-col items-center justify-between shadow-lg z-50 animate-slideInFromRight">
          {/* First Row - App Install Text */}
          <div className="flex items-center justify-center w-full mb-4">
            <div className="text-lg font-semibold text-center">
              App is available to install
            </div>
          </div>
          {/* Second Row - Show Instructions Button */}
          <div className="flex items-center justify-center w-full mb-2">
            {/* Button to show instructions */}
            <button
              onClick={() => setShowSecondBanner(true)}
              className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded font-semibold transition-all duration-300 ease-in-out"
            >
              Show Instructions
            </button>
          </div>
          {/* Close Button */}
          <button
            onClick={handleCloseIosBanner}
            className="absolute top-2 right-2 text-white hover:text-gray-200"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
  
        {/* Conditional Rendering of the Second Banner */}
        {showSecondBanner && (
          <div className="fixed inset-x-0 top-16 bg-gray-800 text-white p-2 flex flex-col items-center justify-between shadow-lg z-50 animate-slideInFromRight">
            {/* First Row */}
            <div className="flex items-center justify-center w-full mb-2">
              <div className="text-sm flex items-center">
                <CiSaveUp2 className="inline w-8 h-8 text-white mb-3 mr-2" />
                Click On Share
              </div>
            </div>
            {/* Second Row */}
            <div className="flex items-center justify-center w-full mb-2">
              <div className="flex items-center">
                Add To Home Screen
                <BsPlusSquare className="inline w-6 h-6 text-white ml-2 mt-1" />
              </div>
            </div>
            {/* Close Button for the Second Banner */}
            <button
              onClick={handleCloseSecondBanner}
              className="absolute top-2 right-2 text-white hover:text-gray-200"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
      )}

      {showAndroidBanner && !isInstalled && installPrompt && (
        <div className="fixed inset-x-0 bottom-0 bg-gray-800 text-white p-4 flex items-center justify-between animate-slideInFromBottom">
          <p className="text-sm">Install this app for a better experience.</p>
          <button
            onClick={handleInstall}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all duration-300 ease-in-out"
          >
            Install
          </button>
          <button
            onClick={handleCloseAndroidBanner}
            className="text-gray-400 hover:text-gray-200 ml-4"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Show welcome message after installation */}
      {isInstalled && (
        <div className="text-center mt-4">
          <h2 className="text-lg">Welcome to the App</h2>
        </div>
      )}
    </div>
  );
};

export default InstallApp;
