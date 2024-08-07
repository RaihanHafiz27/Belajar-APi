import { useState } from "react";
import { NavbarTitle } from "../../Elements/Brand/NavbarTitle";
import { Button } from "../../Elements/Button/Button";
import { HamburgerIcon } from "../../../assets/Icons/HamburgerIcon";
import { ProfileIcon } from "../../../assets/Icons/ProfileIcon";
import { CartIcon } from "../../../assets/Icons/CartIcon";
import { LogoutIcon } from "../../../assets/Icons/LogoutIcon";
import { CloseIcon } from "../../../assets/Icons/CloseIcon";
import { Link, useLocation } from "react-router-dom";
import { ProductsIcon } from "../../../assets/Icons/ProductsIcon";

const navbarItems = [
  {
    icon: <ProductsIcon />,
    text: "Products",
    to: "/products",
  },
  {
    icon: <CartIcon />,
    text: "Cart",
    to: "/cart",
  },
  {
    icon: <ProfileIcon />,
    text: "Profile",
    to: "/profile",
  },
];

const mobileNavbarItems = [
  {
    icon: <ProductsIcon />,
    text: "Products",
    to: "/products",
  },
  {
    icon: <CartIcon />,
    text: "Cart",
    to: "/cart",
  },
  {
    icon: <ProfileIcon />,
    text: "Profile",
    to: "/profile",
  },
];

export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    window.location.href = "/";
    localStorage.removeItem("token");
  };

  const isHome = location.pathname === "/home";
  const textColor = isHome ? "text-white" : "text-black";
  const titleColor = isHome ? "text-amber-500" : "text-amber-800";

  return (
    // fixed top-0 z-50 flex flex-wrap items-center justify-between w-full p-2 bg-orange-300 lg:p-3 2xl:p-5
    <nav
      className={`fixed top-0 z-50 flex flex-wrap items-center justify-between w-full p-2 lg:p-3 2xl:p-5 ${
        isHome ? "bg-transparent " : "bg-orange-300"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between w-full">
        <div className="relative flex items-center justify-between w-full lg:block lg:justify-start lg:static lg:w-auto">
          <NavbarTitle classname={`w-auto ${titleColor}`} />
          <Button
            classname="flex justify-end w-auto leading-none bg-transparent hover:bg-transparent lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <HamburgerIcon />
          </Button>
        </div>
        <div className="items-center hidden lg:flex ">
          <ul className="flex flex-col items-center list-none lg:flex-row">
            {navbarItems.map((item, index) => (
              <li key={index} className="mx-2">
                <Link
                  className={`flex items-center text-sm font-semibold leading-snug tracking-widest uppercase  2xl:text-base font-Roboto ${textColor}`}
                  to={item.to}
                >
                  <i className="">{item.icon}</i>
                  <span className="ml-2">{item.text}</span>
                </Link>
              </li>
            ))}
            <li className="mx-2">
              <Button
                classname={`flex items-center text-sm font-semibold leading-snug tracking-widest uppercase bg-transparent hover:bg-transparent lg:py-0 font-Roboto ${textColor}`}
                onClick={handleLogout}
              >
                <i className="">{<LogoutIcon />}</i>
                <span className="ml-2">Logout</span>
              </Button>
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
              classname="flex justify-end w-auto mb-0 leading-none bg-transparent hover:bg-transparent"
              onClick={() => setSidebarOpen(false)}
            >
              <CloseIcon />
            </Button>
          </div>
          <ul className="flex flex-col p-4 list-none">
            {mobileNavbarItems.map((item, index) => (
              <li key={index} className="my-1 ">
                <Link
                  className="flex items-center px-2 py-2 text-xs font-semibold leading-snug uppercase bg-orange-400 rounded-lg font-Roboto hover:bg-amber-600"
                  to={item.to}
                >
                  <i className="">{item.icon}</i>
                  <span className="ml-2">{item.text}</span>
                </Link>
              </li>
            ))}
            <li className="">
              <Button
                classname="flex items-center w-full px-2 py-2 text-xs font-semibold leading-snug uppercase bg-orange-400 rounded-lg font-Roboto hover:bg-amber-600"
                onClick={handleLogout}
              >
                <i className="">{<LogoutIcon />}</i>
                <span className="ml-2 ">Logout</span>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
