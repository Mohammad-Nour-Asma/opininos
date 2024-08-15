import React from "react";

const PopupLayoutServer = ({ title, children }) => {
  return (
    <div className="fixed inset-0 w-full h-full bg-black bg-opacity-80 z-[1000] shadow-[inset_0px_0px_20px_9px_#333] flex items-center justify-center">
      <div className="relative bg-white p-4 max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl min-h-[200px] max-h-[80%] overflow-y-auto rounded-md shadow-lg">
        <h2 className="capitalize text-lg md:text-xl lg:text-2xl mb-4 text-gray-800 font-bold">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
};

export default PopupLayoutServer;
