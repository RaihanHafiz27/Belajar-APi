import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Navbar } from "../components/Fragments/Navbar/Navbar";
import { RadioCardDelivery } from "../components/Fragments/Radio/RadioCardDelivery";
import { RadioCardPayment } from "../components/Fragments/Radio/RadioCardPayment";
import { CartList } from "../components/Fragments/Cart/CartList";
import { TransactionDetails } from "../components/Fragments/Cart/TransactionDetails";
import { usePayment } from "../context/UsePayment";

export const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const costDamage = 5;
  const {
    selectedDelivery,
    voucherDiscount,
    paymentMetode,
    showPopup,
    popupContent,
    totalHarga,
    totalAmount,
    handleApplyVoucher,
    handlePaymentMethodChange,
    handleDelivery,
    handleCheckout,
    setShowPopup,
  } = usePayment(cart, costDamage);

  return (
    <div className="flex flex-col w-full min-h-screen ">
      <Navbar />
      <div className="flex items-center justify-center flex-grow mt-16 bg-gray-200 2xl:mt-20">
        <div className="w-full my-2 2xl:my-0 lg:w-11/12 2xl:w-4/5">
          <div className="flex flex-col justify-between w-full lg:flex-row">
            <CartList cart={cart} removeFromCart={removeFromCart} />
            <RadioCardPayment
              onPaymentMethodChange={handlePaymentMethodChange}
            />
          </div>
          <div className="flex w-full mt-2 ">
            <div className="flex flex-col justify-between flex-grow lg:flex-row">
              {/* Start Selected Delivery */}
              <RadioCardDelivery onPriceChange={handleDelivery} />
              {/* End Selected Delivery */}
              {/* payment summary start */}
              <TransactionDetails
                handleApplyVoucher={handleApplyVoucher}
                totalHarga={totalHarga}
                selectedDelivery={selectedDelivery}
                costDamage={costDamage}
                voucherDiscount={voucherDiscount}
                totalAmount={totalAmount}
                handleCheckout={handleCheckout}
              />
            </div>
          </div>
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
              <div className="flex flex-col justify-center max-w-xs p-6 bg-white rounded-lg shadow-lg">
                {popupContent}
                <button
                  onClick={() => setShowPopup(false)}
                  className="px-4 py-2 mt-4 text-white bg-orange-400 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
