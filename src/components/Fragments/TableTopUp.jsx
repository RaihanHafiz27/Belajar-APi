import React, { useContext, useState } from "react";
import TotalTopUpContextProvider from "../../context/TotalTopUp";
import { TotalTopUp } from "../../context/TotalTopUp";
import { ErrorPopUp } from "./Popups/ErrorPopUp";

export const TableTopUp = ({ handlePurchase }) => {
  const [activeColumn, setActiveColumn] = useState("Credit");
  const { total, setTotal } = useContext(TotalTopUp);

  const handleColumnClick = (column) => {
    setActiveColumn(column);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTotal({
      ...total,
      [name]: value,
    });
  };

  const handlePurchaseClick = (event) => {
    event.preventDefault();

    handlePurchase(); // Memanggil handlePurchase dari props
  };

  const getPlaceholder = (column, field) => {
    const placeholders = {
      Credit: { number: "Input Number Phone" },
      "Data Package": { number: "Input Number Phone" },
      Donation: { number: "Input VA" },
      "Top Up Games": { number: "Input ID" },
    };
    return placeholders[column][field];
  };

  return (
    <div className="hidden w-full mx-auto lg:flex-col lg:flex lg:w-1/2">
      <p className="my-4 text-sm tracking-wide text-center text-gray-600 font-Roboto">
        Please top up here which is safe, easy, and reliable.
      </p>
      <div className="hidden w-full border lg:flex rounded-xl">
        <table className="w-full m-2">
          <thead>
            <tr className="border-b">
              {["Credit", "Data Package", "Donation", "Top Up Games"].map(
                (column) => (
                  <th
                    key={column}
                    onClick={() => handleColumnClick(column)}
                    className={`cursor-pointer font-Roboto text-sm ${
                      activeColumn === column ? "active" : ""
                    }`}
                  >
                    {column}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4}>
                <div className="flex items-center p-2 space-x-2">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="number"
                      className="my-1 text-sm font-semibold text-gray-500"
                    >
                      {activeColumn === "Credit" && "Number"}
                      {activeColumn === "Data Package" && "Number"}
                      {activeColumn === "Donation" && "Virtual Account"}
                      {activeColumn === "Top Up Games" && "Games ID"}
                    </label>
                    <input
                      type="text"
                      id="number"
                      name="notelp"
                      value={total.notelp}
                      onChange={handleInputChange}
                      placeholder={getPlaceholder(activeColumn, "number")}
                      className="w-full p-2 text-sm border border-gray-200 rounded outline-none"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="amount"
                      className="my-1 text-sm font-semibold text-gray-500"
                    >
                      Select Nominal
                    </label>
                    <select
                      id="amount"
                      name="purchase"
                      value={total.purchase}
                      onChange={handleInputChange}
                      className="w-full p-2 text-sm border border-gray-200 rounded outline-none"
                    >
                      <option value="" disabled hidden>
                        Select Nominal
                      </option>
                      <option value="Rp.10000">Rp. 10,000</option>
                      <option value="Rp.20000">Rp. 20,000</option>
                      <option value="Rp.30000">Rp. 30,000</option>
                      <option value="Rp.40000">Rp. 40,000</option>
                      <option value="Rp.50000">Rp. 50,000</option>
                      <option value="Rp.60000">Rp. 60,000</option>
                      <option value="Rp.70000">Rp. 70,000</option>
                      <option value="Rp.80000">Rp. 80,000</option>
                      <option value="Rp.90000">Rp. 90,000</option>
                      <option value="Rp.100000">Rp. 100,000</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center justify-center w-full">
                  <button
                    onClick={handlePurchaseClick} // Menggunakan handlePurchaseClick untuk memanggil handlePurchase
                    className="w-1/2 p-2 text-white bg-orange-400 rounded hover:bg-orange-500"
                  >
                    Buy Now
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
