import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailsProducts } from "../services/product.service";
import { Navbar } from "../components/Fragments/Navbar/Navbar";
import { Button } from "../components/Elements/Button/Button";
import Gelombang from "../assets/Gelombang";
import { CartContext } from "../context/CartContext";
import { PopupAddCart } from "../components/Fragments/Popups/PopupAddCart";
import { ErrorPopUp } from "../components/Fragments/Popups/ErrorPopUp";

export const DetailsProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [qty, setQty] = useState(0);
  const { addToCart } = useContext(CartContext);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isErrorPopUpOpen, setIsErrorPopUpOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleQty = (type) => {
    if (type === "Increment" && qty < 10) {
      setQty(qty + 1);
    } else if (type === "Decrement" && qty > 0) {
      setQty(qty - 1);
    }
  };

  useEffect(() => {
    const fetchProduct = () => {
      getDetailsProducts(id, (result) => {
        if (result instanceof Error) {
          setError(result.message);
        } else {
          setProduct(result);
        }
      });
    };
    fetchProduct();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  const totalDiscount = product.discount
    ? product.price * (1 - product.discount / 100)
    : null;

  const sumBuy = totalDiscount ? totalDiscount * qty : product.price * qty;

  const handleAddToCart = () => {
    if (qty === 0) {
      setErrorMessage("Quantity cannot be 0 !!!");
      setIsErrorPopUpOpen(true);
      return;
    }
    const cartItem = {
      productId: id,
      image: product.image,
      title: product.title,
      price: product.price,
      discount: product.discount,
      qty: qty,
      total: sumBuy,
    };
    addToCart(cartItem);
    setPopupVisible(true);
    setTimeout(() => setPopupVisible(false), 5000);
  };

  const handleBuyNow = () => {
    if (qty === 0) {
      setErrorMessage("Quantity cannot be 0 !!!");
      setIsErrorPopUpOpen(true);
      return;
    }
    handleAddToCart();
    navigate("/cart");
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-200 ">
      <Navbar />
      <div className="flex items-center justify-center flex-grow mt-16 lg:mt-0 ">
        <div
          className="z-20 flex flex-col w-full bg-white lg:transition-transform lg:duration-500 lg:transform lg:hover:scale-110 lg:rounded-md lg:w-4/5 2xl:w-3/5 lg:flex-row"
          style={{
            boxShadow: "2px 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          <div className="flex items-center justify-center w-full lg:w-1/4">
            <img src={product.image} alt={product.title} className="" />
          </div>
          <div className="w-full p-2 lg:w-1/2">
            <div className="pb-2 border-b border-gray-400">
              <h4 className="text-lg font-semibold text-orange-600 uppercase">
                {product.category}
              </h4>
              <h1 className="mb-2 text-lg font-medium 2xl:text-xl">
                {product.title}
              </h1>
              {product.discount ? (
                <div className="">
                  <div className="flex justify-between">
                    <p className="text-base font-semibold lg:text-sm 2xl:text-xl font-Roboto">
                      $ {totalDiscount.toFixed(2)}
                    </p>
                    <div className="flex items-center text-xs lg:text-sm 2xl:text-xl font-Roboto">
                      <p className="flex items-center justify-center mr-2 font-semibold text-red-600 rounded-md lg:text-sm">
                        {product.discount}%
                      </p>
                      <p className="text-gray-400 line-through ">
                        $ {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-xs font-semibold xl:text-xl font-Roboto">
                  $ {product.price}
                </p>
              )}
            </div>
            <div className="pt-2 text-sm 2xl:text-base">
              <p>
                Brand : <span className="uppercase">{product.brand}</span>
              </p>
              <p>Model : {product.model}</p>
              <p>Color : {product.color}</p>
              <p className="text-sm text-justify">{product.description}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full p-2 lg:w-1/4">
            <div className="p-2 mb-4 bg-orange-300 rounded-md">
              <p className="text-sm font-semibold">Spesial Untuk Anda.</p>
            </div>
            <div className="px-2 py-2 border border-gray-400 rounded-md 2xl:py-6 ">
              <h4 className="text-lg font-semibold ">Atur jumlah pembelian</h4>
              <p>Stok Barang : 10838</p>
              <div className="flex items-center justify-between my-6">
                <div className="flex px-2 py-1 font-semibold border rounded-lg">
                  <button onClick={() => handleQty("Decrement")}>-</button>
                  <p className="mx-8">{qty}</p>
                  <button
                    onClick={() => handleQty("Increment")}
                    className="text-orange-600"
                  >
                    +
                  </button>
                </div>
                <p>Max 10 pcs</p>
              </div>
              <div className="flex justify-between my-4">
                <p>Subtotal</p>
                {product.discount ? (
                  <p className="text-sm font-semibold xl:text-base font-Roboto">
                    $ {totalDiscount.toFixed(2)}
                  </p>
                ) : (
                  <p className="text-sm font-semibold xl:text-base font-Roboto">
                    $ {product.price}
                  </p>
                )}
              </div>
              <div className="flex justify-around lg:flex-col">
                <Button
                  classname="w-2/5 rounded-lg lg:w-full text-slate-200 lg:py-2"
                  onClick={handleAddToCart}
                >
                  + Keranjang
                </Button>
                <Button
                  classname="w-2/5 bg-transparent border border-orange-400 rounded-lg lg:my-0 lg:w-full lg:py-2 hover:bg-transparent"
                  onClick={handleBuyNow}
                >
                  Beli
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Gelombang />
      </div>
      {/* Error PopUp */}
      {isErrorPopUpOpen && (
        <ErrorPopUp
          isOpen={isErrorPopUpOpen}
          closeModal={() => setIsErrorPopUpOpen(false)}
        >
          {errorMessage}
        </ErrorPopUp>
      )}
      {/* Popup Add to Cart */}
      {isPopupVisible && (
        <PopupAddCart
          isOpen={isPopupVisible}
          onClose={() => setPopupVisible(false)}
        />
      )}
    </div>
  );
};
