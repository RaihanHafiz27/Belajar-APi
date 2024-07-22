import React from "react";

const CODPopup = ({ data }) => {
  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold text-center">
        Cash on Delivery (COD)
      </h2>
      <p>
        <strong>Transaction Code:</strong> {data.transactionCode}
      </p>
      <p>
        <strong>Amount:</strong> ${data.totalAmount}
      </p>
      <p>Your order will be delivered and please prepare the above amount.</p>
    </div>
  );
};

export default CODPopup;
