import { useState } from "react";
import { Link } from "react-router-dom";

const categorylist = {
  category: [
    {
      title: "Promo ",
      image: "/images/promo.png",
    },
    {
      title: "Fashion",
      image: "/images/t-shirt.png",
    },
    {
      title: "Shoes",
      image: "/images/shoes.png",
    },
    {
      title: "Send Gift",
      image: "/images/gift.png",
    },
    {
      title: "PlayStation",
      image: "/images/joystick.png",
    },
    {
      title: "Mall",
      image: "/images/online-shopping.png",
    },
    {
      title: "Tiket Kereta",
      image: "/images/train.png",
    },
    {
      title: "Furniture",
      image: "/images/sofa.png",
    },
  ],
};

export const CardCategory = () => {
  return (
    <div className="flex flex-wrap justify-center w-full ">
      {categorylist.category.map((item, index) => (
        <Link key={index} className="flex flex-col items-center justify-center">
          <div className="p-2 mx-4 my-1 transition-all duration-300 bg-gray-200 rounded-full hover:bg-gray-400 lg:my-0 lg:mx-8 ">
            <img
              src={item.image}
              alt=""
              className="w-8 h-8 2xl:w-12 2xl:h-12"
            />
          </div>
          <span className="text-sm">{item.title}</span>
        </Link>
      ))}
    </div>
  );
};
