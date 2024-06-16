import { useState } from "react";
import { ProfileIcon } from "../assets/Icons/ProfileIcon";
import { NavbarTitle } from "../components/Elements/Brand/NavbarTitle";
import { CartIcon } from "../assets/Icons/CartIcon";
import { LogoutIcon } from "../assets/Icons/LogoutIcon";

export const ProductsPage = () => {
  const username = localStorage.getItem("username");

  // lanjutkan dengan melihat pada page test.jsx
  // link sumber : https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars

  return (
    <div className="h-auto min-w-screen">
      <div className="w-full min-h-screen ">
        <nav className="flex items-center justify-between p-5 border-b-2">
          <div>
            <NavbarTitle />
          </div>
          <div className="">
            <ul className="flex flex-col lg:flex-row lg:ml-auto">
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
        </nav>
      </div>
    </div>
  );
};
