import { useLocation } from "react-router-dom";
import { GoogleIcon } from "../assets/Icons/GoogleIcon";
import { FacebookIcon } from "../assets/Icons/Facebook";

export const LoginPage = () => {
  const location = useLocation();
  return (
    <div
      className="w-full min-h-screen bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/bg-login.jpg')" }}
    >
      <div className="absolute w-full h-full lg:flex">
        <div className="flex flex-col border-2 border-pink-600 h-5/6 lg:h-full lg:w-1/2">
          <div className="flex items-center p-5 border-2 border-red-700">
            <h1
              className="text-2xl font-semibold lg:text-4xl text-amber-800 font-Poopins"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
            >
              LUXURA
            </h1>
            <img src="/images/leaf.svg" alt="" className="w-8 h-8" />
          </div>
          <div className="flex items-center justify-center flex-grow w-full border-2 border-black">
            <div className="flex flex-col items-center justify-center w-11/12 bg-white rounded-xl lg:w-1/2">
              <div className="my-10">
                <a
                  href=""
                  className={`mx-1 text-xl font-semibold tracking-wide font-Poopins ${
                    location.pathname === "/"
                      ? "underline underline-offset-8 text-amber-600"
                      : "text-gray-400"
                  }`}
                >
                  Sign in
                </a>
                <a
                  href=""
                  className={`mx-1 text-xl font-semibold tracking-wide font-Poopins ${
                    location.pathname === "/signup"
                      ? "underline underline-offset-8 text-black"
                      : "text-gray-400 hover:text-amber-600 hover:underline hover:underline-offset-8 delay-200"
                  }`}
                >
                  Sign up
                </a>
              </div>
              <div className="flex flex-col w-4/5 lg:w-4/5">
                <label htmlFor="" className="text-sm lg:text-base">
                  Usename
                </label>
                <input
                  type="text"
                  className="pb-1 mb-5 text-sm border-b border-gray-800 outline-none lg:text-base"
                  placeholder="Kanna"
                />
                <label htmlFor="" className="text-sm lg:text-base">
                  Password
                </label>
                <input
                  type="text"
                  className="pb-1 mb-5 text-sm border-b border-gray-800 outline-none lg:text-base"
                  placeholder="********"
                />
                <button className="py-1 my-2 mb-10 lg:py-2 bg-amber-600 text-slate-200">
                  Login
                </button>
              </div>
              <div className="flex items-center mb-10">
                <a href="" className="mx-2">
                  <GoogleIcon />
                </a>
                <a href="" className="mx-2">
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center border-2 border-green-400 lg:items-end lg:justify-end h-1/6 lg:h-full lg:w-1/2">
          <img
            src="/images/banner.png"
            alt=""
            className="w-40 h-auto lg:w-96"
          />
        </div>
      </div>
    </div>
  );
};
