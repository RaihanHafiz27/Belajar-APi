import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmptyCartPopup } from "../components/Fragments/Popups/EmptyCart";
import QRCodePopup from "../components/Fragments/Popups/QRCodePopup";
import CODPopup from "../components/Fragments/Popups/CODPopup";
import VirtualAccountPopup from "../components/Fragments/Popups/VirtualAccountPopup";

const PaymentMethods = {
  QR_CODE: "QR CODE",
  COD: "CASH ON DELIVERY (COD)",
  VIRTUAL_ACCOUNT: "VIRTUAL ACCOUNT",
};

export const usePayment = (cart, costDamage) => {
  const [selectedDelivery, setSelectedDelivery] = useState(0);
  const [voucherDiscount, setVoucherDiscount] = useState(0);
  const [paymentMetode, setPaymentMetode] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [transactionDetails, setTransactionDetails] = useState(null);

  const totalHarga = cart.reduce((total, item) => total + item.total, 0);
  const totalAmount =
    totalHarga + costDamage + selectedDelivery - voucherDiscount;

  const handleApplyVoucher = (event) => {
    event.preventDefault();
    const voucher = event.target.voucher.value;
    setVoucherDiscount(voucher === "K4NN4" ? 15 : 0);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMetode(method);
  };

  const handleDelivery = (price) => {
    setSelectedDelivery(price);
  };

  const handleCheckout = () => {
    if (!paymentMetode) {
      alert("Please select a payment method");
      return;
    }
    if (cart.length === 0) {
      setPopupContent(<EmptyCartPopup />);
      setShowPopup(true);
      return;
    }

    const transactionData = {
      cart,
      selectedDelivery,
      costDamage,
      voucherDiscount,
      totalAmount,
      paymentMetode,
      transactionCode: "JQ4B75F",
      barcode: "123456789",
      virtualAccount: "987654321",
    };

    if (paymentMetode === PaymentMethods.QR_CODE) {
      setPopupContent(<QRCodePopup data={transactionData} />);
    } else if (paymentMetode === PaymentMethods.COD) {
      setPopupContent(<CODPopup data={transactionData} />);
    } else {
      setPopupContent(<VirtualAccountPopup data={transactionData} />);
    }
    setTransactionDetails(transactionData);
    setShowPopup(true);
  };
  return {
    selectedDelivery,
    voucherDiscount,
    paymentMetode,
    showPopup,
    popupContent,
    transactionDetails,
    totalHarga,
    totalAmount,
    handleApplyVoucher,
    handlePaymentMethodChange,
    handleDelivery,
    handleCheckout,
    setShowPopup,
  };
};
