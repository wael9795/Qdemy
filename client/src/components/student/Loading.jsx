import React from 'react';

const Loading = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
