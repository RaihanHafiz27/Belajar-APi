import { DeleteIcon } from "../../../assets/Icons/DeleteIcon";

export const CartList = (props) => {
  const { cart, removeFromCart } = props;
  return (
    <div className="flex flex-col border-2 border-blue-500 h-80 lg:w-4/6 2xl:w-3/4 2xl:h-96">
      <h2 className="font-semibold text-center border border-black lg:text-start 2xl:text-2xl font-Roboto ">
        List Order
      </h2>
      <div className="flex-grow overflow-y-auto bg-white border-2 border-black">
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
                className="w-2/5 h-2/5 md:w-1/4 md:h-1/4 lg:w-1/5 lg:h-1/2"
              />
              <p className="text-lg font-semibold text-gray-700 2xl:text-2xl">
                Keranjang Anda kosong
              </p>
              <p className="my-2 text-center text-gray-600 lg:text-left 2xl:text-base lg:text-sm">
                Ayo lanjutkan belanja dan temukan produk menarik lainnya!
              </p>
              <button
                className="px-4 py-2 text-orange-400 border border-orange-400 rounded-md hover:text-slate-100 hover:bg-orange-400"
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
    </div>
    // <div className="overflow-y-auto bg-white border-2 border-black lg:w-4/6 lg:h-72 2xl:w-3/4 2xl:h-96">
    //   {cart.length > 0 ? (
    //     <ul className="">
    //       {cart.map((item, index) => (
    //         <li
    //           key={index}
    //           className="flex items-center justify-around py-2 border-b border-gray-300 2xl:my-2 md:py-0"
    //         >
    //           <img
    //             src={item.image}
    //             alt={item.title}
    //             className="w-8 h-8 md:w-16 md:h-16 "
    //           />
    //           <div className="flex justify-between w-4/5 text-xs border font-Roboto md:text-base">
    //             <p className="w-1/5 font-semibold border">
    //               {item.title.substring(0, 20)}...
    //             </p>
    //             <p className="flex items-center justify-center w-1/5 border">
    //               Quantity : {item.qty}
    //             </p>
    //             <p className="flex items-center justify-center w-1/5 border">
    //               {item.discount ? (
    //                 <span className="line-through text-slate-400">
    //                   $ {item.price}
    //                 </span>
    //               ) : (
    //                 <span>$ {item.price}</span>
    //               )}
    //             </p>
    //             <p className="flex items-center justify-center w-1/5 border">
    //               {item.discount ? `${item.discount}%` : "0%"}
    //             </p>
    //             <p className="flex items-center justify-center w-1/5 font-semibold text-teal-600 border">
    //               ${" "}
    //               {item.discount ? `${item.total.toFixed(2)}` : `${item.total}`}
    //             </p>
    //           </div>
    //           <button
    //             className="hover:text-red-500"
    //             onClick={() => removeFromCart(index)}
    //           >
    //             <DeleteIcon />
    //           </button>
    //         </li>
    //       ))}
    //     </ul>
    //   ) : (
    //     //  <div className="flex flex-col items-center justify-center text-center border 2xl:my-2 lg:h-80 2xl:h-80">
    //     <div className="flex border">
    //       <div className="flex flex-col items-center justify-center flex-grow">
    //         <img
    //           src="/images/empty-cart.png"
    //           alt="Empty Cart"
    //           className="w-1/2 h-1/2 md:w-1/4 md:h-1/4 lg:w-1/5 lg:h-1/2"
    //         />
    //         <p className="text-lg font-semibold text-gray-700 lg:mt-2 2xl:mt-4 2xl:text-2xl">
    //           Keranjang Anda kosong
    //         </p>
    //         <p className="mt-2 text-center text-gray-600 lg:text-left 2xl:text-base lg:text-sm">
    //           Ayo lanjutkan belanja dan temukan produk menarik lainnya!
    //         </p>
    //         <button
    //           className="px-4 py-2 mt-4 text-orange-400 border border-orange-400 rounded-md hover:text-slate-100 hover:bg-orange-400"
    //           onClick={() => {
    //             window.location.href = "/products"; // Ganti dengan URL halaman produk Anda
    //           }}
    //         >
    //           Shopping
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
};
