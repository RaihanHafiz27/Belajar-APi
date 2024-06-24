import axios from "axios";

export const getProducts = (callback) => {
  axios
    .get("https://fakestoreapi.in/api/products")
    .then((res) => {
      callback(res.data.products);
      console.log(res);
    })
    .catch((err) => {
      callback(err);
      console.log(err);
    });
};
