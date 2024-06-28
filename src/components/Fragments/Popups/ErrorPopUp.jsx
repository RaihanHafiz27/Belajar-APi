import React from "react";

export const ErrorPopUp = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-1/4 max-w-lg mx-auto">
          {/* Content Modal */}
          <div className="relative p-6 bg-white shadow-xl rounded-xl">
            <button
              className="absolute top-0 right-0 m-4 text-lg font-semibold text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              Close
            </button>
            <div className="flex flex-col items-center justify-center py-5">
              <img src="/images/erroricon.png" alt="" className="w-20 h-20" />
              <p className="pt-5 font-semibold text-center font-Roboto">
                {children}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
    // <>
    //   <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
    //   <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
    //     <div className="relative w-1/4 max-w-lg mx-auto">
    //       <div className="relative p-6 bg-white shadow-xl rounded-xl">
    //         <div className="flex flex-col border">
    //           <button
    //             className="absolute top-0 right-0 m-4 text-lg font-semibold text-gray-500 hover:text-gray-700"
    //             onClick={closeModal}
    //           >
    //             Close
    //           </button>
    //           <div className="flex flex-col items-center justify-center">
    //             {children}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};
