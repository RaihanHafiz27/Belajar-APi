// TotalTopUp.js

import React, { createContext, useContext, useState } from "react";

const TotalTopUpContext = createContext();

export const TotalTopUpProvider = ({ children }) => {
  const [total, setTotal] = useState(0); // Initial total value

  // Function to update total
  const updateTotal = (newTotal) => {
    setTotal(newTotal);
  };

  return (
    <TotalTopUpContext.Provider value={{ total, updateTotal }}>
      {children}
    </TotalTopUpContext.Provider>
  );
};

export const useTotalTopUp = () => useContext(TotalTopUpContext);
