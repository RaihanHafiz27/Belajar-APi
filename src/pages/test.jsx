import React, { useContext, useState } from "react";
import { Navbar } from "../components/Fragments/Navbar/Navbar";
import { RightDoubleArrow } from "../assets/Icons/RighDoubleArrow";

export const TestPage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen border-2 border-pink-500 bg-[#2f4478]">
      <Navbar />
      <div className="flex items-center justify-center flex-grow mt-16 border-2 border-green-500 2xl:mt-20 ">
        <div className="flex h-auto border 2xl:w-4/5">
          <div className="flex items-center justify-center border border-pink-600 2xl:w-2/5">
            <img
              src="/images/headphone.png"
              alt=""
              className="w-full h-auto border"
            />
          </div>
          <div className="flex justify-end border border-pink-600 2xl:w-3/5">
            <div className="w-11/12 border-2 border-yellow-300">
              <h3 className="text-3xl text-amber-500 font-Roboto">
                Exclusive offers 30% Off
              </h3>
              <h1 className="py-4 font-bold text-8xl font-Montserrat text-slate-200">
                Modern <span className="block mt-2">Gamming Gears</span>
              </h1>
              <p className="w-4/5 my-5 text-xl tracking-widest text-slate-200 font-Roboto">
                There's nothing more satisfying than experiencing every detail
                of the sound in your favorite game. Shop here and you'll be
                transported into a world of amazing sound quality and incredible
                detail.
              </p>
              <button
                onClick={"/"}
                className="flex justify-center w-1/5 py-2 mt-8 text-white bg-orange-500 rounded font-Roboto"
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
