// import React, { useEffect, useState } from 'react';
// import { RiAlertLine } from "react-icons/ri";

// const ConnectivityLabel: React.FC = () => {
//   const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

//   useEffect(() => {
//     const updateOnlineStatus = () => {
//       setIsOnline(navigator.onLine);
//     };

//     window.addEventListener('online', updateOnlineStatus);
//     window.addEventListener('offline', updateOnlineStatus);

//     // Set the initial status
//     updateOnlineStatus();

//     // Cleanup event listeners on component unmount
//     return () => {
//       window.removeEventListener('online', updateOnlineStatus);
//       window.removeEventListener('offline', updateOnlineStatus);
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 space-y-6 relative">
//       {!isOnline && (
//         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50 text-center p-6 bg-orange-500 rounded-lg shadow-lg w-full flex items-center justify-center">
//           <p className="flex text-lg mb-1 items-center text-white">
//             <RiAlertLine className='text-3xl mr-2' />
//             Not connected to the internet
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ConnectivityLabel;

import React, { useEffect, useState } from "react";
import { CiCloudOff } from "react-icons/ci";

const ConnectivityLabel: React.FC = () => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [hasInternet, setHasInternet] = useState<boolean>(true);

  const checkInternetConnectivity = () => {
    const ws = new WebSocket("wss://echo.websocket.org"); // Public echo WebSocket server

    ws.onopen = () => {
      setHasInternet(true); // WebSocket connected, internet is available
      ws.close(); // Close the WebSocket after success
    };

    ws.onerror = () => {
      setHasInternet(false); // WebSocket failed, no internet
    };
  };

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
      if (navigator.onLine) {
        checkInternetConnectivity();
      } else {
        setHasInternet(false);
      }
    };

    // Event listeners for network status
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // Initial connectivity check
    updateOnlineStatus();

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-6 relative">
      {(!isOnline || !hasInternet) && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50 text-center bg-orange-500 rounded-lg shadow-lg w-full flex items-center justify-center">
          <p className="flex text-lg mb-1 items-center text-white">
            <CiCloudOff className="text-3xl mr-2" />
            No internet connection
          </p>
        </div>
      )}
    </div>
  );
};

export default ConnectivityLabel;




