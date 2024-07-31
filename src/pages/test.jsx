import React, { useContext, useState } from "react";
import { Navbar } from "../components/Fragments/Navbar/Navbar";
import { RightDoubleArrow } from "../assets/Icons/RighDoubleArrow";
import TypewriterComponent from "typewriter-effect";

export const TestPage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen border-2 border-pink-500 bg-[#2f4478]">
      <Navbar />
      <div className="flex items-center justify-center flex-grow mt-16 border-2 border-green-500 2xl:mt-20 ">
        <div className="flex flex-col w-full h-auto border-2 border-black lg:flex-row lg:w-11/12 2xl:w-4/5">
          <div className="flex items-center justify-center border border-pink-600 2xl:w-2/5">
            <img
              src="/images/headphone.png"
              alt=""
              className="w-full h-auto border"
            />
          </div>
          <div className="flex justify-end border border-green-600 2xl:w-3/5">
            <div className="flex flex-col w-full border-2 border-yellow-300 lg:w-11/12 justify-evenly">
              <h3 className="text-center lg:text-xl lg:text-start 2xl:text-3xl text-amber-500 font-Roboto">
                Exclusive offers 30% Off
              </h3>
              <h1 className="text-2xl font-bold text-center lg:text-start lg:text-6xl 2xl:text-7xl font-Montserrat text-slate-200">
                8~Dimension<span className="block lg:mt-2">Premium Sound</span>
              </h1>
              <p className="w-full text-sm tracking-widest text-center lg:text-start lg:w-4/5 2xl:my-5 lg:text-base 2xl:text-xl text-slate-200 font-Roboto">
                There's nothing more satisfying than experiencing every detail
                of the sound in your favorite game. Shop here and you'll be
                transported into a world of amazing sound quality and incredible
                detail.
              </p>
              <button
                onClick={"/products"}
                className="flex justify-center w-2/5 py-2 mx-auto mt-2 text-white bg-orange-500 rounded lg:mx-0 lg:mt-0 lg:w-1/4 2xl:w-1/5 font-Roboto"
              >
                Shop Now <RightDoubleArrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
