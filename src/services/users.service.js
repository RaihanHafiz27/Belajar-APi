import axios from "axios";

export const getDataUser = () => {
  axios
    .get("https://fakestoreapi.com/users")
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
