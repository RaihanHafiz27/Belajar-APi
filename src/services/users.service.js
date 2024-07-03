import axios from "axios";

export const getDataUser = () => {
  axios
    .get("https://fakestoreapi.com/users")
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
