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
      title: "Tickets",
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
    <div className="grid w-full grid-cols-4 gap-2">
      {categorylist.category.map((item, index) => (
        <Link
          key={index}
          className="flex flex-col items-center justify-center p-2"
        >
          <div className="p-2 transition-all duration-300 bg-gray-200 rounded-full hover:bg-gray-400 ">
            <img
              src={item.image}
              alt=""
              className="w-8 h-8 transition-all duration-300 scale-110 rounded-lg md:w-10 md:h-10 2xl:w-12 2xl:h-12 hover:scale-125"
            />
          </div>
          <span className="text-sm">{item.title}</span>
        </Link>
      ))}
    </div>
  );
};
