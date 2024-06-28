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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false); // State untuk mengontrol modal
  const [countdown, setCountdown] = useState(300); // Waktu dalam detik, misalnya 5 menit (300 detik)
  const [showBlur, setShowBlur] = useState(false); // State untuk mengontrol blur background
  const [products, setproducts] = useState([]);

  const { total, setTotal } = useContext(TotalTopUp);

  const [error, setError] = useState("");
  const [isErrorPopUpOpen, setIsErrorPopUpOpen] = useState(false);

  useEffect(() => {
    // Mengurangi countdown setiap detik
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(timer);
          closeModal();
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    // Membersihkan timer saat komponen unmount
    return () => clearInterval(timer);
  }, []);

  const handlePurchase = () => {
    if (!total.notelp || !total.purchase) {
      setError("Mohon isi nomor telepon & nominal pembelian!!!");
      setIsErrorPopUpOpen(true);
      return;
    }
    setModalIsOpen(true); // Munculkan modal ketika tombol Beli diklik
    setShowBlur(true); // Tampilkan blur background
  };

  const closeModal = () => {
    setIsErrorPopUpOpen(false);
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
        <Navbar />
        <div className="pt-16 my-2 2xl:pt-20 lg:my-4">
          <Carousel />
          {/* images={images} */}
        </div>
        <div className="w-full h-auto p-2 bg-white md:mx-auto md:rounded-xl lg:w-11/12 2xl:w-3/5">
          <div className="flex justify-around py-2 border-b border-gray-400 font-Roboto">
            <h2 className="text-sm font-semibold lg:text-xl">
              Kategori Pilihan
            </h2>
            <h2 className="hidden text-sm font-semibold lg:block lg:text-xl">
              Top up
            </h2>
          </div>
          <div className="flex w-full">
            <div className="flex w-full lg:w-1/2">
              <CardCategory />
            </div>
            <TableTopUp handlePurchase={handlePurchase} />{" "}
            {/* Mengirim prop handlePurchase */}
          </div>
        </div>
        <div className="w-full h-auto my-2 bg-white md:mx-auto md:p-2 md:rounded-xl lg:w-11/12 2xl:w-3/5">
          <h2 className="p-2 font-semibold font-Roboto lg:text-xl">
            Trending Minggu ini.
          </h2>
          <div className="grid grid-cols-2 gap-2 px-2 md:px-0 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
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
        <div className="w-full h-auto bg-gray-800 md:mx-auto md:p-2 md:rounded-t-xl lg:w-11/12 2xl:w-3/5">
          <Footer />
        </div>
      </div>

      {/* Modal Pop-up */}
      {modalIsOpen && (
        <PopUp
          isOpen={modalIsOpen}
          closeModal={closeModal}
          countdown={countdown}
        />
      )}
      {/* End Modal Pop-up */}
      {/* Start Error PopUp */}
      {isErrorPopUpOpen && (
        <ErrorPopUp isOpen={isErrorPopUpOpen} closeModal={closeModal}>
          {error}
        </ErrorPopUp>
      )}
      {/* End Error PopUp */}
    </div>
  );
};

export default Testpage;
