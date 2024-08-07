import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/login.jsx";
import { RegisterPage } from "./pages/register.jsx";
import { ProductsPage } from "./pages/products.jsx";
import TotalTopUpContextProvider from "./context/TotalTopUp.jsx";
import { CartPage } from "./pages/cart.jsx";
import { ProfilePage } from "./pages/Profile.jsx";
import { DetailsProductPage } from "./pages/detailsProduct.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { HomePage } from "./pages/home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/product/:id",
    element: <DetailsProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <TotalTopUpContextProvider>
        <RouterProvider router={router} />
      </TotalTopUpContextProvider>
    </CartProvider>
  </React.StrictMode>
);
