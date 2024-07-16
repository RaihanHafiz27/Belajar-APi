import React, { useState } from "react";
import { BCAIcon } from "../../Elements/PaymentIcon/BCA";
import { BRiIcon } from "../../Elements/PaymentIcon/BRI";
import { MandiriIcon } from "../../Elements/PaymentIcon/Mandiri";
import { CIMBIcon } from "../../Elements/PaymentIcon/CIMB";
import { QRIcon } from "../../Elements/PaymentIcon/QRCode";
import { CODIcon } from "../../Elements/PaymentIcon/COD";

export const RadioCardPayment = ({ onPaymentMethodChange }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const paymentMethods = [
    { id: 1, name: "BANK CENTRAL ASIA", icon: <BCAIcon /> },
    { id: 2, name: "BANK RAKYAT INDONESIA", icon: <BRiIcon /> },
    { id: 3, name: "BANK MANDIRI", icon: <MandiriIcon /> },
    { id: 4, name: "CIMB", icon: <CIMBIcon /> },
    { id: 5, name: "QR CODE", icon: <QRIcon /> },
    { id: 6, name: "CASH ON DELIVERY (COD)", icon: <CODIcon /> },
  ];

  const handleRadioChange = (method) => {
    setSelectedPaymentMethod(method);
    onPaymentMethodChange(method);
  };

  return (
    <div className="flex items-center justify-center w-1/5 font-semibold border-2 border-yellow-400 ">
      <div className="flex-grow border border-green-500">
        <ul className="grid grid-cols-1 gap-y-3">
          {paymentMethods.map((item) => (
            <li key={item.id} className="max-w-xs border-2 border-black">
              <label htmlFor={item.name} className="relative block">
                <input
                  id={item.name}
                  type="radio"
                  name="paymentMethod"
                  className="sr-only peer"
                  onClick={() => handleRadioChange(item.name)}
                />
                <div className="flex items-center w-full h-10 p-2 duration-200 bg-white border rounded-lg shadow-sm cursor-pointer gap-x-3 ring-indigo-600 peer-checked:ring-2">
                  <div className="flex-none">{item.icon}</div>
                  <div>
                    <h3 className="text-sm font-medium leading-none text-gray-800">
                      {item.name}
                    </h3>
                  </div>
                </div>
                <div className="absolute flex items-center justify-center flex-none w-4 h-4 text-white duration-200 border rounded-full top-3 right-4 peer-checked:bg-indigo-600 peer-checked:text-white">
                  <svg className="w-2.5 h-2.5" viewBox="0 0 12 10">
                    <polyline
                      fill="none"
                      strokeWidth="2px"
                      stroke="currentColor"
                      strokeDasharray="16px"
                      points="1.5 6 4.5 9 10.5 1"
                    ></polyline>
                  </svg>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>
      {selectedPaymentMethod && (
        <div className="mt-4">
          <p>Selected Payment Method: {selectedPaymentMethod}</p>
        </div>
      )}
    </div>
  );
};
