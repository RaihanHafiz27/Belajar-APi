import { Link } from "react-router-dom";
import { SignInWith } from "../Fragments/SignInWith";
import { useState } from "react";

export const AuthLayouts = (props) => {
  const { children } = props;
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="w-full min-h-screen bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/bg-login.jpg')" }}
    >
      <div className="absolute w-full h-full lg:flex">
        <div className="flex flex-col h-5/6 lg:h-full lg:w-1/2">
          <div className="flex items-center p-5">
            <h1
              className="text-2xl font-semibold lg:text-4xl text-amber-800 font-Poopins"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
            >
              LUXURA
            </h1>
            <img src="/images/leaf.svg" alt="" className="w-8 h-8" />
          </div>
          <div className="flex items-center justify-center flex-grow w-full ">
            <div
              className="flex flex-col items-center justify-center w-11/12 bg-white rounded-xl lg:w-3/5 2xl:w-1/2 "
              style={{
                boxShadow: isHover ? "2px 2px 8px rgba(0,0,0,0.6)" : "none",
                transition: "box-shadow 0.3s ease-in-out",
              }}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <Navigation />
              <div className="flex flex-col w-4/5 lg:w-4/5">{children}</div>
              <div className="inline-flex items-center justify-center w-full mb-5">
                <hr className="w-1/5 lg:w-1/4 h-0.5 bg-gray-200 border-0 rounded dark:bg-gray-400"></hr>
                <p className="mx-2 text-sm text-gray-600 md:text-base">
                  or continue with
                </p>
                <hr className="w-1/5 lg:w-1/4 h-0.5 bg-gray-200 border-0 rounded dark:bg-gray-400"></hr>
              </div>
              <SignInWith />
            </div>
          </div>
        </div>
        <PromoBanner />
      </div>
    </div>
  );
};

const Navigation = () => {
  return (
    <div className="my-4 text-center 2xl:my-6">
      <p className="my-2 text-lg font-semibold 2xl:my-5 lg:text-xl 2xl:text-2xl font-Poopins text-amber-600">
        WELCOME TO LUXURA
      </p>
      <Link
        to={"/"}
        className={`mx-1 lg:text-lg 2xl:text-xl font-semibold tracking-wide font-Poopins ${
          location.pathname === "/"
            ? " text-amber-600  underline underline-offset-8"
            : "text-gray-400 relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-amber-600 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:-bottom-1.5 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-amber-600 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:-bottom-1.5 after:right-[50%]"
        }`}
      >
        Sign in
      </Link>
      <Link
        to={"/register"}
        className={`mx-1 lg:text-lg 2xl:text-xl font-semibold tracking-wide font-Poopins ${
          location.pathname === "/register"
            ? "underline underline-offset-8 text-amber-600"
            : "text-gray-400 relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-amber-600 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:-bottom-1.5 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-amber-600 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:-bottom-1.5 after:right-[50%]"
        }`}
      >
        Sign up
      </Link>
    </div>
  );
};

const PromoBanner = () => {
  return (
    <div className="flex items-center lg:items-end lg:justify-end h-1/6 lg:h-full lg:w-1/2">
      <img
        src="/images/banner.png"
        alt=""
        className="w-40 ml-2 lg:h-auto h-4/5 lg:w-72 2xl:w-96 lg:ml-0"
      />
    </div>
  );
};
