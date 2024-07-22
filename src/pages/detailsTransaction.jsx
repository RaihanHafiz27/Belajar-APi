import React from "react";
import { useLocation } from "react-router-dom";

export const DetailsTransactionPage = () => {
  const location = useLocation();
  const transactionDetails = location.state?.transactionDetails;

  if (!transactionDetails) {
    return <p>No transaction details found.</p>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
      <h1 className="mb-4 text-2xl font-semibold">Transaction Details</h1>
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-2 text-xl font-semibold">Order Summary</h2>
        <p>
          <strong>Transaction Code:</strong>{" "}
          {transactionDetails.transactionCode}
        </p>
        <p>
          <strong>Order Summary:</strong> $
          {transactionDetails.cart.reduce(
            (total, item) => total + item.total,
            0
          )}
        </p>
        <p>
          <strong>Delivery Cost:</strong> ${transactionDetails.selectedDelivery}
        </p>
        <p>
          <strong>Cost Damage:</strong> ${transactionDetails.costDamage}
        </p>
        <p>
          <strong>Voucher Discount:</strong> $
          {transactionDetails.voucherDiscount}
        </p>
        <p>
          <strong>Total Amount:</strong> ${transactionDetails.totalAmount}
        </p>
        <p>
          <strong>Payment Method:</strong> {transactionDetails.paymentMethod}
        </p>
        <p>
          <strong>Barcode:</strong> {transactionDetails.barcode}
        </p>
        <p>
          <strong>Virtual Account:</strong> {transactionDetails.virtualAccount}
        </p>
      </div>
    </div>
  );
};
