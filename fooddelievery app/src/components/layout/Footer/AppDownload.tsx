import React from 'react';

const AppDownload = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-100">Get the App</h3>
      <div className="flex flex-col space-y-3">
        <a
          href="#"
          className="transition-transform hover:scale-105"
          aria-label="Download on the App Store"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
            alt="App Store"
            className="h-10"
          />
        </a>
        <a
          href="#"
          className="transition-transform hover:scale-105"
          aria-label="Get it on Google Play"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="h-10"
          />
        </a>
      </div>
    </div>
  );
};

export default AppDownload;