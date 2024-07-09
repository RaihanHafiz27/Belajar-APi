import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Navbar } from "../components/Fragments/Navbar/Navbar";

export const CartPage = () => {
  const { cart } = useContext(CartContext);

  console.log(cart);

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-200">
      <Navbar />
      <div className="flex justify-center flex-grow mt-16 border-2 border-black lg:mt-20">
        <div className="flex flex-col w-4/5 p-2 border-2 border-pink-600">
          <h1 className="text-2xl font-semibold">Keranjang Belanja</h1>
          <div className="flex p-2 my-2 text-center bg-white border-2 border-black">
            <p className="w-1/2 border-2 border-red-400">Produk</p>
            <div className="flex w-full">
              <p className="flex-grow border-2 border-yellow-400">Kuantitas</p>
              <p className="flex-grow border-2 border-green-400">Diskon</p>
              <p className="flex-grow border-2 border-teal-400">Harga Satuan</p>
              <p className="flex-grow border-2 border-gray-400">Total</p>
            </div>
          </div>
          {/* lanjutkan ini !!! */}
          <div className="flex-grow border-2 border-black">
            {cart.length > 0 ? (
              <ul className="">
                {cart.map((item, index) => (
                  <li
                    key={index}
                    className="flex w-full bg-white border-2 border-red-500 "
                  >
                    <div className="flex w-2/6 border-2 border-green-500">
                      <img
                        src={item.image}
                        alt=""
                        className="w-32 h-20 border-r-2 border-gray-700"
                      />
                      <p className="flex items-center justify-center ">
                        {item.title}
                      </p>
                    </div>
                    <div className="flex-grow border-2 border-yellow-300">
                      hello world
                    </div>
                    <div className="flex-grow border-2 border-yellow-300">
                      hello world
                    </div>
                    <div className="flex-grow border-2 border-yellow-300">
                      hello world
                    </div>
                    <div className="flex-grow border-2 border-yellow-300">
                      hello world
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>hello world</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// {
//   <div className="z-20 flex flex-col w-full bg-white lg:w-4/5 2xl:w-3/5 lg:flex-row">
//           <div className="w-full p-2 lg:w-1/2">
//             <h1 className="text-2xl font-semibold">Keranjang Belanja</h1>
//             {cart.length > 0 ? (
//               <ul>
//                 {cart.map((item, index) => (
//                   <li key={index} className="flex my-2 border-b">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-1/2 h-1/2"
//                     />
//                     <div className="">
//                       <p>{item.title}</p>
//                       <p>Quantity: {item.qty}</p>
//                       <p>Price: $ {item.price}</p>
//                       <p>
//                         Discount: {item.discount ? `${item.discount}%` : "None"}
//                       </p>
//                       <p>Total: $ {item.total.toFixed(2)}</p>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>Keranjang Anda kosong</p>
//             )}
//           </div>
//         </div>
// }
