import React, { useState } from "react";
import { NavbarTitle } from "../components/Elements/Brand/NavbarTitle";
import { Button } from "../components/Elements/Button/Button";
import { HamburgerIcon } from "../assets/Icons/HamburgerIcon";
import { ProfileIcon } from "../assets/Icons/ProfileIcon";
import { CartIcon } from "../assets/Icons/CartIcon";
import { LogoutIcon } from "../assets/Icons/LogoutIcon";
import Carousel from "../components/Fragments/Carousel";
import { CloseIcon } from "../assets/Icons/CloseIcon";
import { CardCategory } from "../components/Fragments/CardCategory";

const images = [
  "/images/carousel-1.jpg",
  "/images/carousel-2.jpg",
  "/images/carousel-3.jpg",
];

const Testpage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-auto min-w-screen">
      <div className="w-full min-h-screen bg-slate-200">
        <nav className="relative flex flex-wrap items-center justify-between p-2 bg-orange-300 lg:p-5 border-slate-300">
          <div className="flex flex-wrap items-center justify-between w-full">
            <div className="relative flex justify-between w-full lg:block lg:justify-start lg:static lg:w-auto">
              <NavbarTitle classname="w-full" />
              <Button
                classname="flex w-auto mb-0 leading-none bg-transparent hover:bg-transparent lg:hidden"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <HamburgerIcon />
              </Button>
            </div>
            <div className="items-center hidden lg:flex">
              <ul className="flex flex-col list-none lg:flex-row">
                <li>
                  <a
                    className="flex items-center px-2 text-xs font-bold leading-snug uppercase hover:opacity-75"
                    href=""
                  >
                    <i className="">
                      <ProfileIcon />
                    </i>
                    <span className="ml-2">Profile</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center px-2 text-xs font-bold leading-snug uppercase hover:opacity-75"
                    href=""
                  >
                    <i className="">
                      <CartIcon />
                    </i>
                    <span className="ml-2">Cart</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center px-2 text-xs font-bold leading-snug uppercase hover:opacity-75"
                    href=""
                  >
                    <i className="">
                      <LogoutIcon />
                    </i>
                    <span className="ml-2">Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`fixed inset-0 z-50 transform ${
              sidebarOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out lg:hidden`}
          >
            <div
              className="fixed inset-0 bg-black opacity-50"
              onClick={() => setSidebarOpen(false)}
            ></div>
            <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-xl">
              <div className="flex items-center justify-between p-3 border-b">
                <NavbarTitle />
                <Button
                  classname="flex w-auto mb-0 leading-none bg-transparent hover:bg-transparent"
                  onClick={() => setSidebarOpen(false)}
                >
                  <CloseIcon />
                </Button>
              </div>
              <ul className="flex flex-col p-4 list-none">
                <li>
                  <a
                    className="flex items-center px-2 py-2 text-sm font-bold leading-snug uppercase hover:bg-gray-200"
                    href=""
                  >
                    <i className="">
                      <ProfileIcon />
                    </i>
                    <span className="ml-2">Profile</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center px-2 py-2 text-sm font-bold leading-snug uppercase hover:bg-gray-200"
                    href=""
                  >
                    <i className="">
                      <CartIcon />
                    </i>
                    <span className="ml-2">Cart</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center px-2 py-2 text-sm font-bold leading-snug uppercase hover:bg-gray-200"
                    href=""
                  >
                    <i className="">
                      <LogoutIcon />
                    </i>
                    <span className="ml-2">Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="my-2 lg:my-4">
          <Carousel images={images} />
        </div>
        <div className="w-11/12 h-auto mx-auto bg-white border border-black lg:w-3/5">
          <div className="flex justify-around py-2 border-b border-gray-400">
            <h2 className="text-sm font-semibold lg:text-xl">
              Kategori Pilihan
            </h2>
            <h2 className="hidden text-sm font-semibold lg:block lg:text-xl">
              Top up
            </h2>
          </div>
          <div className="flex w-full">
            <div className="flex flex-wrap justify-between w-full p-2 lg:w-1/2">
              <CardCategory />
              <CardCategory />
              <CardCategory />
              <CardCategory />
              <CardCategory />
              <CardCategory />
              <CardCategory />
              <CardCategory />
            </div>
            <div className="flex flex-wrap justify-between w-full p-2 lg:w-1/2">
              <div>helo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testpage;
