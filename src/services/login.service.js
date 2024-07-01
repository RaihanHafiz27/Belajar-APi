import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      callback(true, res.data.token);
    })
    .catch((error) => {
      callback(false, error);
    });
};

// export const dataUser = () => {
//   const token = localStorage.getItem("token");
//   const decoded = jwtDecode(token);
//   const userId = decoded.sub;
//   console.log(decoded);

//   axios
//     .get("https://fakestoreapi.com/users")
//     .then((res) => {
//       const users = res.data;
//       const user = users.find((user) => user.id === userId);

//       if (user) {
//         console.log("User ditemukan:", user);
//       } else {
//         console.log("User tidak ditemukan");
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

export const dataUser = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Token tidak ditemukan");
  }

  const decoded = jwtDecode(token);
  const userId = decoded.sub; // Mengambil sub dari token yang sudah didecode

  try {
    const res = await axios.get("https://fakestoreapi.com/users");
    const users = res.data;
    const user = users.find((user) => user.id === userId);

    if (!user) {
      throw new Error("User tidak ditemukan");
    }

    return user;
  } catch (error) {
    throw error;
  }
};
