import React, { createContext, useState } from "react";

const TotalTopUpContext = createContext();

const TotalTopUpContextProvider = ({ children }) => {
  const [total, setTotal] = useState({
    notelp: "",
    purchase: "",
  });

  return (
    <TotalTopUpContext.Provider value={{ total, setTotal }}>
      {children}
    </TotalTopUpContext.Provider>
  );
};

export const TotalTopUp = TotalTopUpContext;
export default TotalTopUpContextProvider;
