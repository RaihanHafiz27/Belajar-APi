import { useState } from "react";
import { ProfileIcon } from "../assets/Icons/ProfileIcon";
import { NavbarTitle } from "../components/Elements/Brand/NavbarTitle";
import { CartIcon } from "../assets/Icons/CartIcon";
import { LogoutIcon } from "../assets/Icons/LogoutIcon";
import { Button } from "../components/Elements/Button/Button";
import { HamburgerIcon } from "../assets/Icons/HamburgerIcon";
import Carousel from "../components/Fragments/Carousel";

const images = [
  "/images/carousel-1.jpg",
  "/images/carousel-2.jpg",
  "/images/carousel-3.jpg",
];

export const ProductsPage = () => {
  const username = localStorage.getItem("username");
  const [navbarOpen, setNavbarOpen] = useState(false);

  // lanjutkan dengan melihat pada page test.jsx
  // link sumber : https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars

  return (
    <div className="h-auto min-w-screen">
      <div className="w-full min-h-screen bg-slate-200">
        <nav className="relative flex flex-wrap items-center justify-between p-2 bg-orange-200 border-b-2 lg:p-5 border-slate-300">
          <div className="flex flex-wrap items-center justify-between w-full ">
            <div className="relative flex justify-between w-full lg:block lg:justify-start lg:static lg:w-auto">
              <NavbarTitle classname="w-full" />
              <Button
                classname="flex w-auto mb-0 leading-none bg-transparent hover:bg-transparent lg:hidden"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <HamburgerIcon />
              </Button>
            </div>
            <div
              className={`transition-all duration-700 ease-in-out transform lg:flex items-center ${
                navbarOpen
                  ? "max-h-screen opacity-100 flex justify-end w-full"
                  : "max-h-0 opacity-0"
              } w-full flex justify-end overflow-hidden lg:overflow-visible lg:max-h-full lg:opacity-100`}
              // className={`lg:flex items-center  ${
              //   navbarOpen
              //     ? "flex border-2 border-black w-full justify-end "
              //     : "hidden"
              // }`}
            >
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
        </nav>
        <div className="my-4">
          <Carousel images={images} />
        </div>
      </div>
    </div>
  );
};
