import axios from "axios";

export const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
