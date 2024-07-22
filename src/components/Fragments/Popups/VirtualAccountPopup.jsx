import React from "react";

const VirtualAccountPopup = ({ data }) => {
  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold">Virtual Account Payment</h2>
      <p>
        <strong>Transaction Code:</strong> {data.transactionCode}
      </p>
      <p>
        <strong>Amount:</strong> ${data.totalAmount}
      </p>
      <p>
        <strong>Virtual Account Number:</strong> {data.virtualAccount}
      </p>
    </div>
  );
};

export default VirtualAccountPopup;
