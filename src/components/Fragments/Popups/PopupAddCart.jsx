import React from "react";

export const PopupAddCart = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center justify-center max-w-xs p-4 text-center bg-white rounded-lg shadow-lg lg:p-6 ">
        <h2 className="text-lg font-semibold">Item added to cart!</h2>
        <img
          src="/images/add-cart.png"
          alt=""
          className="w-1/2 h-auto my-4 lg:w-4/5"
        />
        <button
          className="px-4 py-2 text-white bg-orange-500 rounded-md lg:w-1/2"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
