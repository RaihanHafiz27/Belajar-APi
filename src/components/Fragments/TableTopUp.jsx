import React, { useState } from "react";

export const TableTopUp = ({ handlePurchase }) => {
  const [activeColumn, setActiveColumn] = useState("Pulsa");
  const [inputValues, setInputValues] = useState({
    number: "",
    amount: "",
  });

  const handleColumnClick = (column) => {
    setActiveColumn(column);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handlePurchaseClick = (event) => {
    event.preventDefault();
    handlePurchase(); // Memanggil handlePurchase dari props
  };

  const getPlaceholder = (column, field) => {
    const placeholders = {
      Pulsa: { number: "Masukan Nomor" },
      "Paket Data": { number: "Masukan Nomor" },
      Donasi: { number: "Masukan Virtual Account" },
      "Top Up Game": { number: "Masukan ID" },
    };
    return placeholders[column][field];
  };

  return (
    <div className="hidden w-full mx-auto lg:flex-col lg:flex lg:w-1/2">
      <p className="my-4 text-sm font-medium text-center text-gray-600">
        Silahkan top up disini yang aman, mudah, dan terpercaya.
      </p>
      <div className="hidden w-full border lg:flex rounded-xl">
        <table className="w-full m-2">
          <thead>
            <tr className="border-b">
              {["Pulsa", "Paket Data", "Donasi", "Top Up Game"].map(
                (column) => (
                  <th
                    key={column}
                    onClick={() => handleColumnClick(column)}
                    className={`cursor-pointer ${
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
                      {activeColumn === "Pulsa" && "Nomor Telepon"}
                      {activeColumn === "Paket Data" && "Nomor Telepon"}
                      {activeColumn === "Donasi" && "Nomor Virtual Account"}
                      {activeColumn === "Top Up Game" && "Game ID"}
                    </label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      value={inputValues.number}
                      onChange={handleInputChange}
                      placeholder={getPlaceholder(activeColumn, "number")}
                      className="w-full p-2 text-sm border border-gray-200 rounded"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="amount"
                      className="my-1 text-sm font-semibold text-gray-500"
                    >
                      Pilih Nominal
                    </label>
                    <select
                      id="amount"
                      name="amount"
                      value={inputValues.amount}
                      onChange={handleInputChange}
                      className="w-full p-2 text-sm border border-gray-200 rounded"
                    >
                      <option value="" disabled hidden>
                        Pilih Nominal
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
                    className="w-1/2 p-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                  >
                    Beli
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
