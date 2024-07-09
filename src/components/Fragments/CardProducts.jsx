import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CardProducts = (props) => {
  const { children } = props;

  return (
    <div
      className="flex flex-col justify-between p-2 transition-transform duration-500 transform md:rounded-lg hover:scale-110"
      style={{
        boxShadow: "1px 1px 4px rgba(0,0,0,0.2)",
      }}
    >
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, id } = props;

  return (
    <Link to={`/product/${id}`} className="w-full h-32 xl:h-40">
      <img
        src={image}
        alt="product"
        className="w-full h-full md:rounded-t-xl"
      />
    </Link>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <div className="">
      <p className="text-sm font-semibold font-Roboto">
        {title.substring(0, 20)}...
      </p>
      <p className="text-xs xl:text-sm">{children.substring(0, 35)}...</p>
    </div>
  );
};

const Footer = (props) => {
  const { price, discount } = props;
  const totalDiscount = discount ? price * (1 - discount / 100) : null;
  return (
    <div className="">
      {/* text-xs font-semibold xl:text-sm font-Roboto */}
      {discount ? (
        <div className="">
          <div className="flex justify-between">
            <p className="text-xs font-semibold xl:text-sm font-Roboto">
              ${totalDiscount.toFixed(2)}
            </p>
            <div className="flex text-xs xl:text-sm font-Roboto">
              <p className="pr-1 text-gray-400 line-through">${price}</p>
              <p className="font-semibold text-teal-600">{discount}%</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-xs font-semibold xl:text-sm font-Roboto">
          $ {price}
        </p>
      )}
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;
