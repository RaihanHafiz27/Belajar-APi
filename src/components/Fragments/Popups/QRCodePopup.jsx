import React from "react";

const QRCodePopup = ({ data }) => {
  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold text-center">
        QR Code Payment
      </h2>
      {/* Replace this with actual QR code component */}
      <img src="/images/qr.jpeg" alt="QR Code" className="w-96 h-96" />
    </div>
  );
};

export default QRCodePopup;
