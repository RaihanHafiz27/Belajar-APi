import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Navbar } from "../components/Fragments/Navbar/Navbar";
import { NavbarTitle } from "../components/Elements/Brand/NavbarTitle";
import { DeleteIcon } from "../assets/Icons/DeleteIcon";

export const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  // Menghitung total harga
  const totalHarga = cart.reduce((total, item) => total + item.total, 0);

  console.log(cart);

  return (
    <div className="flex flex-col w-full min-h-screen ">
      <Navbar />
      <div className="flex items-center justify-center flex-grow mt-16 bg-gray-200 border-2 border-black 2xl:mt-20">
        <div className="w-4/5 border-2 border-pink-600">
          <div className="flex justify-between w-full ">
            <h2 className="w-3/4 font-semibold border border-black 2xl:text-2xl font-Roboto 2xl:my-2">
              Order
            </h2>
            <h2 className="w-1/5 font-semibold border border-black 2xl:text-2xl font-Roboto 2xl:my-2">
              Payment Summary
            </h2>
          </div>
          <div className="flex justify-between w-full border border-gray-700">
            <div className="w-3/4 overflow-y-auto bg-white border-2 border-black 2xl:h-96">
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
                <div className="flex flex-col items-center justify-center text-center border 2xl:my-2 lg:h-80 2xl:h-80">
                  <img
                    src="/images/empty-cart.png"
                    alt="Empty Cart"
                    className="w-1/2 h-1/2 md:w-1/4 md:h-1/4 lg:w-1/5 lg:h-1/2"
                  />
                  <p className="mt-4 text-xl font-semibold text-gray-700 md:text-2xl">
                    Keranjang Anda kosong
                  </p>
                  <p className="mt-2 text-gray-600">
                    Ayo lanjutkan belanja dan temukan produk menarik lainnya!
                  </p>
                  <button
                    className="px-4 py-2 mt-4 text-orange-400 border border-orange-400 rounded-md hover:text-slate-300 hover:bg-orange-400"
                    onClick={() => {
                      window.location.href = "/products"; // Ganti dengan URL halaman produk Anda
                    }}
                  >
                    Shopping
                  </button>
                </div>
              )}
            </div>
            {/* payment summary start */}
            <div className="flex flex-col items-center justify-center w-1/5 py-2 bg-white border border-orange-500 font-Roboto 2xl:h-96">
              <div className="w-11/12 py-1 bg-gray-200 rounded-lg">
                <h2 className="font-semibold text-center">
                  Transaction Details
                </h2>
              </div>
              <div className="flex-grow w-11/12 border">
                <div className="py-4 border-b border-gray-600 border-dashed">
                  <div className="flex justify-between">
                    <p className="">Transaction Code</p>
                    <p className="">JQ4B75F</p>
                  </div>
                  <div className="flex justify-between my-2">
                    <input
                      type="text"
                      placeholder="COUPON CODE"
                      className="w-3/5 py-1 pl-2 border rounded-md"
                    />
                    <button className="w-1/3 text-orange-500 bg-orange-200 rounded-md">
                      Apply
                    </button>
                  </div>
                </div>
                <div className="pt-4 pb-2 border-b border-gray-600 border-dashed">
                  <div className="flex justify-between mb-2">
                    <p className="">Order Summary</p>
                    <p className="">$ {totalHarga}</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="">Delivery</p>
                    <p className="">$ 12</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="">Cost Damage</p>
                    <p className="">$ 1</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="">Voucher Discount</p>
                    <p className="">$ ...</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="">Total Amount</p>
                    <p className="">$ 123</p>
                  </div>
                </div>
                <div className="w-full py-1 mt-3 bg-orange-100 rounded-lg ">
                  <p className="text-sm font-semibold text-center text-gray-400 uppercase">
                    Sale Expiring in :{" "}
                    <span className="text-orange-500">23 H, 13 Min</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-2 border border-black 2xl:h-80">
            hello world
          </div>
        </div>
      </div>
    </div>
  );
};

// {
//   <div className="flex flex-col items-center justify-center flex-grow w-full border-2 border-pink-600">
//     {/* table total item */}
//     <div
//       className="flex flex-col w-full md:p-2 font-Roboto 2xl:w-3/5 lg:w-4/5 h-60 lg:h-80 2xl:h-96"
//       style={{
//         boxShadow: "4px 4px 8px rgba(128,128,128,0.5)",
//       }}
//     >
//       <div className="flex justify-center font-semibold border-b border-gray-800">
//         <div className="flex justify-between w-4/5 py-1 ml-6 text-sm border md:py-0 md:text-base md:ml-10 md:justify-around">
//           <h4 className="w-1/5 text-center border">Product</h4>
//           <h4 className="w-1/5 text-center border">Quantity</h4>
//           <h4 className="w-1/5 text-center border">Price</h4>
//           <h4 className="w-1/5 text-center border">Discount</h4>
//           <h4 className="w-1/5 text-center border">Total</h4>
//         </div>
//       </div>
//       <div className="overflow-y-auto lg:max-h-60 2xl:max-h-96">
//         {cart.length > 0 ? (
//           <ul className="">
//             {cart.map((item, index) => (
//               <li
//                 key={index}
//                 className="flex items-center justify-around py-2 border-b border-gray-300 md:py-0"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-8 h-8 md:w-16 md:h-16 "
//                 />
//                 <div className="flex justify-between w-4/5 text-xs border md:text-base">
//                   <p className="flex items-center justify-center w-1/5 border">
//                     {item.title.substring(0, 15)}...
//                   </p>
//                   <p className="flex items-center justify-center w-1/5 border">
//                     {item.qty}
//                   </p>
//                   <p className="flex items-center justify-center w-1/5 border">
//                     $ {item.price}
//                   </p>
//                   <p className="flex items-center justify-center w-1/5 border">
//                     {item.discount ? `${item.discount}%` : "0%"}
//                   </p>
//                   <p className="flex items-center justify-center w-1/5 border">
//                     $ {item.total.toFixed(2)}
//                   </p>
//                 </div>
//                 <button
//                   className="hover:text-red-500"
//                   onClick={() => removeFromCart(index)}
//                 >
//                   <DeleteIcon />
//                 </button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <div className="flex flex-col items-center justify-center text-center border 2xl:my-2 lg:h-80 2xl:h-80">
//             <img
//               src="/images/empty-cart.png"
//               alt="Empty Cart"
//               className="w-1/2 h-1/2 md:w-1/4 md:h-1/4 lg:w-1/5 lg:h-1/2"
//             />
//             <p className="mt-4 text-xl font-semibold text-gray-700 md:text-2xl">
//               Keranjang Anda kosong
//             </p>
//             <p className="mt-2 text-gray-600">
//               Ayo lanjutkan belanja dan temukan produk menarik lainnya!
//             </p>
//             <button
//               className="px-4 py-2 mt-4 text-orange-400 border border-orange-400 rounded-md hover:text-slate-300 hover:bg-orange-400"
//               onClick={() => {
//                 window.location.href = "/products"; // Ganti dengan URL halaman produk Anda
//               }}
//             >
//               Shopping
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//     <div className="flex justify-center w-full md:justify-end lg:w-3/5">
//       <div
//         className="flex items-center justify-center py-4 bg-orange-300 rounded-b-lg md:w-1/5"
//         style={{
//           boxShadow: "4px 4px 8px rgba(128,128,128,0.5)",
//         }}
//       >
//         <p className="text-sm font-semibold text-gray-800 md:text-base font-Roboto">
//           Total Price : $ {totalHarga.toFixed(2)}
//         </p>
//       </div>
//     </div>
//   </div>;
// }
