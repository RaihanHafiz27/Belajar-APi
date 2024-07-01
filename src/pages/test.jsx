import React, { useState, useEffect, useContext } from "react";
import { NavbarTitle } from "../components/Elements/Brand/NavbarTitle";
import { Button } from "../components/Elements/Button/Button";
import { HamburgerIcon } from "../assets/Icons/HamburgerIcon";
import { ProfileIcon } from "../assets/Icons/ProfileIcon";
import { CartIcon } from "../assets/Icons/CartIcon";
import { LogoutIcon } from "../assets/Icons/LogoutIcon";
import Carousel from "../components/Fragments/Carousel";
import { CloseIcon } from "../assets/Icons/CloseIcon";
import { CardCategory } from "../components/Fragments/CardCategory";
import { TableTopUp } from "../components/Fragments/TableTopUp";
import "../../src/styles.css"; // Impor file CSS
import { CardProducts } from "../components/Fragments/CardProducts";
import { getProducts } from "../services/product.service";
import { Footer } from "../components/Fragments/Footer";
import { PopUp } from "../components/Fragments/Popups/PopUp";
import { TotalTopUp } from "../context/TotalTopUp";
import { ErrorPopUp } from "../components/Fragments/Popups/ErrorPopUp";
import { Navbar } from "../components/Fragments/Navbar/Navbar";

// const images = [
//   "/images/carousel-1.jpg",
//   "/images/carousel-2.jpg",
//   "/images/carousel-3.jpg",
// ];

const Testpage = () => {
  return (
    <div
      className="flex flex-col w-full min-h-screen bg-bottom bg-no-repeat bg-cover border-2 border-pink-500"
      style={{ backgroundImage: "url('/images/bg-profile.jpg')" }}
    >
      <Navbar />
      <div className="flex items-center justify-center flex-grow mt-16 border-2 border-black 2xl:mt-20 ">
        <div
          className="w-full bg-white lg:rounded-lg lg:p-6 lg:w-3/5"
          style={{
            boxShadow: "2px 2px 8px rgba(0,0,0,0.6)",
          }}
        >
          <div className="border-2 border-red-400 ">
            <div className="mb-6 border-b border-gray-900">
              <h1 className="text-xl font-semibold font-Roboto">My Profile</h1>
              <p className="pb-4">
                Perbarui informasi akun Anda untuk mengelola, melindungi, dan
                mengamankan data Anda.
              </p>
            </div>
            <div className="flex">
              <div className="flex flex-col w-1/4 border-r border-black">
                <div className="flex flex-col items-center justify-center w-full">
                  <img
                    src="/images/profile.png"
                    alt=""
                    className="w-20 h-20 pt-2 bg-gray-300 rounded-full hover:bg-gray-400"
                  />
                  <p className=" font-Roboto">Kanna Anissa</p>
                </div>
                <div className="text-sm text-center">
                  <p>Ukuran gambar : maks 1mb</p>
                  <p>Format gambar : .JPEG, .PNG</p>
                </div>
              </div>
              <div className="w-3/4 px-4 text-sm font-Roboto">
                <div className="items-center border-2 border-black lg:flex">
                  <div className="flex items-center justify-between w-full py-2 border-2 border-red-600 ">
                    <p className="w-1/4 text-end">First Name</p>
                    <p className="w-3/4 ml-4 border-b border-gray-700">Kanna</p>
                  </div>
                  <div className="flex items-center justify-between w-full py-2 border-2 border-red-600 ">
                    <p className="w-1/4 text-end">Last Name</p>
                    <p className="w-3/4 ml-4 border-b border-gray-700">
                      Annisa Syifa
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-1/2 py-2 my-2 border-2 border-red-600 ">
                  <p className="w-1/4 text-end">Username</p>
                  <p className="w-3/4 ml-4 border-b border-gray-700">
                    Kanna Anissa
                  </p>
                </div>
                <div className="flex items-center justify-between w-1/2 py-2 my-2 border-2 border-red-600 ">
                  <p className="w-1/4 text-end">Email</p>
                  <p className="w-3/4 ml-4 border-b border-gray-700">
                    KannaAnissa@gmail.com
                  </p>
                </div>
                <div className="flex items-center justify-between w-1/2 py-2 my-2 border-2 border-red-600 ">
                  <p className="w-1/4 text-end">Kode Pos</p>
                  <p className="w-3/4 ml-4 border-b border-gray-700">1234</p>
                </div>
                <div className="flex items-center justify-between w-1/2 py-2 my-2 border-2 border-red-600 ">
                  <p className="w-1/4 text-end">Alamat</p>
                  <p className="w-3/4 ml-4 truncate border-b border-gray-700">
                    Kota Bekasi Kec Jatiasih Kel Jatiluhur no 27
                  </p>
                </div>
                <div className="flex w-1/2">
                  <Button></Button>
                  <Button></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testpage;
