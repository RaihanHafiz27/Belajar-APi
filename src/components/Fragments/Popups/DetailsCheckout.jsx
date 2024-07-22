import React from "react";

export const DetailsPopup = ({
  totalAmount,
  totalHarga,
  selectedDelivery,
  costDamage,
  voucherDiscount,
  paymentMetode,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-11/12 p-4 bg-white rounded-lg lg:w-1/3">
        <h2 className="text-lg font-bold text-center">Detail Transaksi</h2>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <p>Kode Transaksi</p>
            <p>JQ4B75F</p>
          </div>
          <div className="flex justify-between">
            <p>Ringkasan Order</p>
            <p>$ {totalHarga}</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery</p>
            <p>$ {selectedDelivery}</p>
          </div>
          <div className="flex justify-between">
            <p>Payment Metode</p>
            <p>{paymentMetode}</p>
          </div>
          <div className="flex justify-between">
            <p>Cost Damage</p>
            <p>$ {costDamage}</p>
          </div>
          <div className="flex justify-between">
            <p>Voucher Discount</p>
            <p>$ {voucherDiscount}</p>
          </div>
          <div className="flex justify-between font-bold">
            <p>Total Amount</p>
            <p>$ {totalAmount}</p>
          </div>
          <div className="flex justify-center mt-4">
            <img src="path_to_barcode_image" alt="Barcode" className="w-1/2" />
          </div>
          <div className="flex justify-center mt-2">
            <img
              src="path_to_virtual_account_image"
              alt="Virtual Account"
              className="w-1/2"
            />
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-full py-2 mt-4 text-white bg-red-500 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};
