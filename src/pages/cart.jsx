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

export const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [selectedDelivery, setSelectedDelivery] = useState(0);
  const [voucherDiscount, setVoucherDiscount] = useState(0);
  const [paymentMetode, setPaymentMetode] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [transactionDetails, setTransactionDetails] = useState(null);
  const navigate = useNavigate();

  const handleApplyVoucher = (event) => {
    event.preventDefault();

    const voucher = event.target.voucher.value;

    if (voucher === "K4NNA") {
      setVoucherDiscount(15);
    } else {
      setVoucherDiscount(0);
    }

    console.log(voucher);
  };

  const costDamage = 5;

  // Menghitung total harga
  const totalHarga = cart.reduce((total, item) => total + item.total, 0);

  const totalAmount =
    totalHarga + costDamage + selectedDelivery - voucherDiscount;

  console.log(cart);

  const handlePaymentMethodChange = (method) => {
    setPaymentMetode(method);
  };

  const handleDelivery = (price) => {
    setSelectedDelivery(price);
  };

  const handleCheckout = () => {
    const transactionData = {
      cart,
      selectedDelivery,
      costDamage,
      voucherDiscount,
      totalAmount,
      paymentMetode,
      transactionCode: "JQ4B75F", // This should be generated dynamically
      barcode: "123456789", // Example barcode
      virtualAccount: "987654321", // Example VA
    };
    if (paymentMetode === "QR CODE") {
      setPopupContent(<QRCodePopup data={transactionData} />);
    } else if (paymentMetode === "CASH ON DELIVERY (COD)") {
      setPopupContent(<CODPopup data={transactionData} />);
    } else {
      setPopupContent(<VirtualAccountPopup data={transactionData} />);
    }
    setTransactionDetails(transactionData);

    // navigate("/detailsTransaction", {
    //   state: { transactionDetails: transactionData },
    // });
    setShowPopup(true);
  };

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
              Payment Metode
            </h2>
          </div>
          <div className="flex justify-between w-full border border-gray-700">
            <div className="overflow-y-auto bg-white border-2 border-black lg:w-4/6 lg:h-72 2xl:w-3/4 2xl:h-96">
              {cart.length > 0 ? (
                <ul className="">
                  {cart.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-around py-2 border-b border-gray-300 2xl:my-2 md:py-0"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-8 h-8 md:w-16 md:h-16 "
                      />
                      <div className="flex justify-between w-4/5 text-xs border font-Roboto md:text-base">
                        <p className="w-1/5 font-semibold border">
                          {item.title.substring(0, 20)}...
                        </p>
                        <p className="flex items-center justify-center w-1/5 border">
                          Quantity : {item.qty}
                        </p>
                        <p className="flex items-center justify-center w-1/5 border">
                          {item.discount ? (
                            <span className="line-through text-slate-400">
                              $ {item.price}
                            </span>
                          ) : (
                            <span>$ {item.price}</span>
                          )}
                        </p>
                        <p className="flex items-center justify-center w-1/5 border">
                          {item.discount ? `${item.discount}%` : "0%"}
                        </p>
                        <p className="flex items-center justify-center w-1/5 font-semibold text-teal-600 border">
                          ${" "}
                          {item.discount
                            ? `${item.total.toFixed(2)}`
                            : `${item.total}`}
                        </p>
                      </div>
                      <button
                        className="hover:text-red-500"
                        onClick={() => removeFromCart(index)}
                      >
                        <DeleteIcon />
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                //  <div className="flex flex-col items-center justify-center text-center border 2xl:my-2 lg:h-80 2xl:h-80">
                <div className="flex border">
                  <div className="flex flex-col items-center justify-center flex-grow">
                    <img
                      src="/images/empty-cart.png"
                      alt="Empty Cart"
                      className="w-1/2 h-1/2 md:w-1/4 md:h-1/4 lg:w-1/5 lg:h-1/2"
                    />
                    <p className="text-lg font-semibold text-gray-700 lg:mt-2 2xl:mt-4 2xl:text-2xl">
                      Keranjang Anda kosong
                    </p>
                    <p className="mt-2 text-gray-600 2xl:text-base lg:text-sm">
                      Ayo lanjutkan belanja dan temukan produk menarik lainnya!
                    </p>
                    <button
                      className="px-4 py-2 mt-4 text-orange-400 border border-orange-400 rounded-md hover:text-slate-100 hover:bg-orange-400"
                      onClick={() => {
                        window.location.href = "/products"; // Ganti dengan URL halaman produk Anda
                      }}
                    >
                      Shopping
                    </button>
                  </div>
                </div>
              )}
            </div>
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
              <div className="flex flex-col items-center justify-center py-2 my-2 bg-white border border-orange-500 lg:w-1/4 2xl:w-1/5 font-Roboto">
                <div className="w-11/12 py-1 bg-gray-200 rounded-lg">
                  <h2 className="font-semibold text-center">
                    Transaction Details
                  </h2>
                </div>
                <div className="flex-grow w-11/12 border">
                  <div className="border-b border-gray-600 border-dashed lg:py-2">
                    <div className="flex justify-between lg:text-sm">
                      <p className="">Transaction Code</p>
                      <p className="">JQ4B75F</p>
                    </div>
                    <form
                      onSubmit={handleApplyVoucher}
                      className="flex justify-between my-1 lg:text-sm"
                    >
                      <input
                        type="text"
                        name="voucher"
                        placeholder="COUPON CODE"
                        className="w-3/5 py-1 pl-2 border rounded-md"
                      />
                      <button
                        type="submit"
                        className="w-1/3 text-orange-500 bg-orange-200 rounded-md"
                      >
                        Apply
                      </button>
                    </form>
                  </div>
                  <div className="pb-2 border-b border-gray-600 border-dashed lg:pt-2 lg:text-sm">
                    <div className="flex justify-between lg:mb-1 2xl:mb-2">
                      <p className="">Order Summary</p>
                      <p className="">$ {totalHarga}</p>
                    </div>
                    <div className="flex justify-between 2xl:mb-2">
                      <p className="">Delivery</p>
                      <p className="">$ {selectedDelivery}</p>
                    </div>
                    <div className="flex justify-between 2xl:mb-2">
                      <p className="">Cost Damage</p>
                      <p className="">$ {costDamage}</p>
                    </div>
                    <div className="flex justify-between 2xl:mb-2">
                      <p className="">Voucher Discount</p>
                      <p className="">$ {voucherDiscount}</p>
                    </div>
                    <div className="flex justify-between 2xl:mb-2">
                      <p className="">Total Amount</p>
                      <p className="">$ {totalAmount}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-full pt-2">
                    <button
                      className="w-1/2 py-1 bg-orange-300 rounded-md hover:bg-orange-400"
                      onClick={handleCheckout}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
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
