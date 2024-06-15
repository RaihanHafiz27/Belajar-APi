import { useState } from "react";

export const ProductsPage = () => {
  const username = localStorage.getItem("username");

  // lanjutkan dengan melihat pada page test.jsx
  // link sumber : https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars

  return (
    <div className="h-auto min-w-screen">
      <div className="w-full min-h-screen ">
        <nav className="p-5 bg-teal-700">Hello World</nav>
      </div>
    </div>
  );
};
