import React, { useState, useEffect } from "react";
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

const images = [
  "/images/carousel-1.jpg",
  "/images/carousel-2.jpg",
  "/images/carousel-3.jpg",
];

export const ProductsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false); // State untuk mengontrol modal
  const [countdown, setCountdown] = useState(300); // Waktu dalam detik, misalnya 5 menit (300 detik)
  const [showBlur, setShowBlur] = useState(false); // State untuk mengontrol blur background
  const [products, setproducts] = useState([]);
  const [inputValues, setInputValues] = useState({
    number: "",
    amount: "",
  });

  useEffect(() => {
    // Mengurangi countdown setiap detik
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Membersihkan timer saat komponen unmount
    return () => clearInterval(timer);
  }, []);

  const handlePurchase = () => {
    setModalIsOpen(true); // Munculkan modal ketika tombol Beli diklik
    setShowBlur(true); // Tampilkan blur background
  };

  const closeModal = () => {
    setModalIsOpen(false); // Tutup modal
    setShowBlur(false); // Hilangkan blur background
  };

  useEffect(() => {
    getProducts((data) => {
      setproducts(data);
      console.log(data);
    });
  }, []);

  return (
    <div className={`h-auto min-w-screen relative`}>
      <div
        className={`w-full min-h-screen bg-slate-200 ${
          showBlur ? "blur-overlay" : ""
        }`}
      >
        <nav className="fixed top-0 z-50 flex flex-wrap items-center justify-between w-full p-2 bg-orange-300 lg:p-5 border-slate-300">
          <div className="flex flex-wrap items-center justify-between w-full">
            <div className="relative flex items-center justify-between w-full lg:block lg:justify-start lg:static lg:w-auto">
              <NavbarTitle classname="w-auto border " />
              <Button
                classname="flex justify-end w-auto leading-none bg-transparent border hover:bg-transparent lg:hidden"
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
                  classname="flex justify-end w-auto mb-0 leading-none bg-transparent hover:bg-transparent"
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
        <div className="pt-20 my-2 lg:my-4">
          <Carousel images={images} />
        </div>
        <div className="w-full h-auto p-2 bg-white md:mx-auto md:rounded-xl lg:w-3/5">
          <div className="flex justify-around py-2 border-b border-gray-400">
            <h2 className="text-sm font-semibold lg:text-xl">
              Kategori Pilihan
            </h2>
            <h2 className="hidden text-sm font-semibold lg:block lg:text-xl">
              Top up
            </h2>
          </div>
          <div className="flex w-full">
            <div className="flex flex-wrap justify-between w-full lg:w-1/2">
              <CardCategory />
            </div>
            <TableTopUp handlePurchase={handlePurchase} />{" "}
            {/* Mengirim prop handlePurchase */}
          </div>
        </div>
        <div className="w-full h-auto my-2 bg-white md:mx-auto md:p-2 md:rounded-xl lg:w-3/5">
          <h2 className="p-2 font-semibold font-Roboto lg:text-xl">
            Trending Minggu ini.
          </h2>
          <div className="grid grid-cols-2 gap-2 px-2 md:px-0 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-6">
            {/* card product start */}
            {products.length > 0 &&
              products.map((product) => (
                <CardProducts key={product.id}>
                  <CardProducts.Header image={product.image} />
                  <CardProducts.Body title={product.title}>
                    {product.description}
                  </CardProducts.Body>
                  <CardProducts.Footer
                    price={product.price}
                    discount={product.discount}
                  />
                </CardProducts>
              ))}
            {/*  card product end*/}
          </div>
        </div>
        <div className="w-full h-auto bg-gray-800 md:mx-auto md:p-2 md:rounded-t-xl lg:w-3/5">
          <Footer />
        </div>
      </div>

      {/* Modal Pop-up */}
      {modalIsOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-2/3 max-w-lg mx-auto my-6">
              {/* Content Modal */}
              <div className="relative p-6 bg-white shadow-xl rounded-xl">
                <button
                  className="absolute top-0 right-0 m-4 text-lg font-semibold text-gray-500 hover:text-gray-700"
                  onClick={closeModal}
                >
                  Close
                </button>
                <h2 className="mb-4 text-lg font-semibold text-gray-800">
                  Detail Pembelian
                </h2>
                <div className="flex items-center justify-center mb-4">
                  {/* Content dalam modal, seperti kode virtual account atau informasi pembayaran */}
                  {/* <Payment /> */}
                  <img
                    src="/img/money.gif"
                    alt=""
                    className="w-40 h-40 ml-40"
                  />
                  <p className="flex justify-center my-4 font-semibold text-gray-800">
                    Kode Virtual Account: 74267474512
                  </p>
                  <p className="flex justify-center my-2">
                    Waktu tersisa :{" "}
                    <span className="ml-1 text-red-600">
                      {Math.floor(countdown / 60)} menit {countdown % 60} detik
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* End Modal Pop-up */}
    </div>
  );
};
