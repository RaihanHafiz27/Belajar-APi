import axios from "axios";

export const getProducts = (callback) => {
  axios
    .get("https://fakestoreapi.in/api/products")
    .then((res) => {
      callback(res.data.products);
    })
    .catch((err) => {
      callback(err);
    });
};

export const getDetailsProducts = (id, callback) => {
  console.log(`Fetching product with ID: ${id}`); // Debugging
  axios
    .get(`https://fakestoreapi.in/api/products/${id}`)
    .then((res) => {
      console.log(res.data.product);
      callback(res.data.product);
    })
    .catch((error) => {
      console.log(error);
      callback(error);
    });
};
