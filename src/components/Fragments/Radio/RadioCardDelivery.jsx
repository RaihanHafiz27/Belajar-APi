import { useState } from "react";

export const RadioCardDelivery = (props) => {
  const { onPriceChange } = props;
  const [selectedPrice, setSelectedPrice] = useState(null);

  const radios = [
    {
      price: 15,
      description: "Kirim Cepat dan Aman, Tanpa Batasan Waktu",
      icon: "/images/delivery/J&T_Express.png",
    },
    {
      price: 5,
      description: "Pengiriman Tepat Waktu, Pasti Sampai Tujuan",
      icon: "/images/delivery/Lion_Parcel.png",
    },
    {
      price: 12,
      description: "Solusi Cepat dan Handal untuk Pengiriman",
      icon: "/images/delivery/Ninja_Xpress.png",
    },
    {
      price: 2,
      description: "Kirim Mudah, Cepat, dan Aman, Kepuasan Anda",
      icon: "/images/delivery/AnterAja.png",
    },
    {
      price: 20,
      description: "Kirim Mudah, Cepat, dan Aman, Kepuasan Anda",
      icon: "/images/delivery/SiCepat.png",
    },
    {
      price: 14,
      description: "Kirim Mudah, Cepat, dan Aman, Kepuasan Anda",
      icon: "/images/delivery/JNE_Express.png",
    },
    {
      price: 6,
      description: "Kirim Mudah, Cepat, dan Aman, Kepuasan Anda",
      icon: "/images/delivery/TiKi.png",
    },
    {
      price: 17,
      description: "Kirim Mudah, Cepat, dan Aman, Kepuasan Anda",
      icon: "/images/delivery/GoSend.png",
    },
    {
      price: 8,
      description: "Kirim Mudah, Cepat, dan Aman, Kepuasan Anda",
      icon: "/images/delivery/Sentral_Cargo.png",
    },
  ];

  const handleRadioChange = (price) => {
    setSelectedPrice(price);
    onPriceChange(price);
  };

  console.log(selectedPrice);

  return (
    <div className="flex items-center font-semibold border-2 border-yellow-400 lg:w-4/6 2xl:w-3/4 ">
      <div className="flex-grow border border-green-500">
        <ul className="grid grid-cols-3 gap-3 2xl:gap-2">
          {radios.map((item, idx) => (
            <li
              key={idx}
              className="max-w-sm transition-transform duration-500 transform md:rounded-lg hover:scale-110 hover:z-10 hover:outline hover:outline-1 hover:outline-teal-500"
            >
              <label htmlFor={item.price} className="relative block">
                <input
                  id={item.price}
                  type="radio"
                  defaultChecked={idx == 0 ? true : false}
                  name="payment"
                  className="sr-only peer"
                  onClick={() => handleRadioChange(item.price)}
                />
                <div className="flex items-start w-full p-4 duration-200 bg-white border rounded-lg shadow-sm cursor-pointer gap-x-3 ring-teal-600 peer-checked:ring-2">
                  <div className="flex-none">
                    <img
                      src={item.icon}
                      alt=""
                      className="h-8 border 2xl:h-12 lg:w-16 2xl:w-24"
                    />
                  </div>
                  <div>
                    <h3 className="pr-3 text-sm font-medium leading-none text-teal-600 2xl:text-base">
                      $ {item.price}
                    </h3>
                    <p className="mt-1 text-xs text-gray-600 2xl:text-sm">
                      {item.description.substring(0, 50)}
                    </p>
                  </div>
                </div>
                <div className="absolute flex items-center justify-center flex-none w-4 h-4 text-white duration-200 border rounded-full top-4 right-4 peer-checked:bg-indigo-600 peer-checked:text-white">
                  <svg className="w-2.5 h-2.5" viewBox="0 0 12 10">
                    <polyline
                      fill="none"
                      strokeWidth="2px"
                      stroke="currentColor"
                      strokeDasharray="16px"
                      points="1.5 6 4.5 9 10.5 1"
                    ></polyline>
                  </svg>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
