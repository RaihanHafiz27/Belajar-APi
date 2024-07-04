import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailsProducts } from "../services/product.service";
import { Navbar } from "../components/Fragments/Navbar/Navbar";

export const DetailsProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

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

  return (
    <div
      className="flex flex-col w-full min-h-screen bg-center bg-no-repeat bg-cover border-2 border-pink-600"
      style={{ backgroundImage: "url('/images/bg-details.jpg')" }}
    >
      <Navbar />
      <div className="flex items-center justify-center flex-grow mt-16 border-2 border-black 2xl:mt-20 ">
        <div className="flex w-full bg-white border-2 border-black font-Roboto 2xl:w-3/5">
          <div className="w-1/2 border-2 border-pink-700">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="w-1/2 p-6 bg-gray-800 border-2 border-green-500">
            <h4 className="text-lg font-semibold text-orange-400 uppercase">
              {product.category}
            </h4>
            <p className="text-xl font-medium text-slate-200">
              {product.title}
            </p>
            <p className="text-gray-400">{product.model}</p>
            {product.discount ? (
              <div className="">
                <div className="flex justify-between">
                  <p className="text-xs font-semibold xl:text-2xl font-Roboto">
                    $ {totalDiscount.toFixed(2)}
                  </p>
                  <div className="flex text-xs xl:text-sm font-Roboto">
                    <p className="pr-1 text-gray-400 line-through">
                      $ {product.price}
                    </p>
                    <p className="font-semibold text-teal-600">
                      {product.discount}%
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-xs font-semibold xl:text-sm font-Roboto">
                $ {product.price}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p> */
}
