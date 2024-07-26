import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Navbar } from "../components/Fragments/Navbar/Navbar";
import { NavbarTitle } from "../components/Elements/Brand/NavbarTitle";
import { DeleteIcon } from "../assets/Icons/DeleteIcon";
import { RadioCardDelivery } from "../components/Fragments/Radio/RadioCardDelivery";
import { RadioCardPayment } from "../components/Fragments/Radio/RadioCardPayment";
import { DetailsPopup } from "../components/Fragments/Popups/DetailsCheckout";
import { useNavigate } from "react-router-dom";
import QRCodePopup from "../components/Fragments/Popups/QRCodePopup";
import VirtualAccountPopup from "../components/Fragments/Popups/VirtualAccountPopup";
import CODPopup from "../components/Fragments/Popups/CODPopup";
import { EmptyCartPopup } from "../components/Fragments/Popups/EmptyCart";
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
      <div className="flex items-center justify-center flex-grow mt-16 bg-gray-200 border-2 border-black 2xl:mt-20">
        <div className="w-full border-2 border-pink-600 lg:w-11/12 2xl:w-4/5">
          <div className="flex justify-between w-full ">
            <h2 className="font-semibold border border-black lg:w-4/6 2xl:w-3/4 2xl:text-2xl font-Roboto ">
              List Order
            </h2>
            <h2 className="font-semibold border border-black lg:w-1/4 2xl:w-1/5 2xl:text-2xl font-Roboto ">
              Payment Method
            </h2>
          </div>
          <div className="flex justify-between w-full border border-gray-700">
            <CartList cart={cart} removeFromCart={removeFromCart} />
            <RadioCardPayment
              onPaymentMethodChange={handlePaymentMethodChange}
            />
          </div>
          <div className="flex flex-col w-full mt-2 border border-black ">
            <div className="flex justify-between border border-gray-700">
              <h2 className="w-1/2 font-semibold border border-pink-500 font-Roboto 2xl:text-2xl">
                Delivery
              </h2>
              <h2 className="w-1/5 font-semibold border border-pink-500 font-Roboto 2xl:text-2xl">
                Payment Summary
              </h2>
            </div>
            <div className="flex justify-between flex-grow border border-gray-900">
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
              <div className="flex flex-col justify-center max-w-md p-6 bg-white rounded-lg shadow-lg">
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
      {/* {showPopup && (
        <DetailsPopup
          totalAmount={totalAmount}
          totalHarga={totalHarga}
          selectedDelivery={selectedDelivery}
          costDamage={costDamage}
          voucherDiscount={voucherDiscount}
          paymentMetode={paymentMetode}
          onClose={() => setShowPopup(false)}
        />
      )} */}
    </div>
  );
};
