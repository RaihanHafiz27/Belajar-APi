import { useContext, useEffect } from "react";
import { TotalTopUp } from "../../../context/TotalTopUp";

export const PopUp = (props) => {
  const { isOpen, closeModal, countdown } = props;
  if (!isOpen) return null;

  const { total, setTotal } = useContext(TotalTopUp);

  useEffect(() => {
    console.log(total); // Memastikan nilai total hanya di-log saat total berubah
  }, [total]);

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
            <h2 className="mb-4 text-lg font-semibold text-gray-800">
              Detail Pembelian
            </h2>
            <div className="flex flex-col items-center justify-center ">
              {/* Content dalam modal, seperti kode virtual account atau informasi pembayaran */}
              {/* <Payment /> */}
              <img
                src="/images/payment.gif"
                alt=""
                className="w-40 h-40 border"
              />
              <p>No Telpon : {total.notelp}</p>
              <p>Harga Pembelian {total.purchase}</p>
              <p className="">Kode Pembayaran : {virtualAccount}</p>
              <p className="">
                Waktu tersisa :{" "}
                <span className="ml-1 text-red-600">
                  {Math.floor(countdown / 60)} menit {countdown % 60} detik
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function generateVirtualAccount() {
  const length = 12;
  let accountNumber = "";

  for (let i = 0; i < length; i++) {
    accountNumber += Math.floor(Math.random() * 10);
  }

  return accountNumber;
}

const virtualAccount = generateVirtualAccount();
console.log(virtualAccount);
