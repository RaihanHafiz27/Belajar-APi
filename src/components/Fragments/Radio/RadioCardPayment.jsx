import React, { useState } from "react";
import { BCAIcon } from "../../Elements/PaymentIcon/BCA";
import { BRiIcon } from "../../Elements/PaymentIcon/BRI";
import { MandiriIcon } from "../../Elements/PaymentIcon/Mandiri";
import { CIMBIcon } from "../../Elements/PaymentIcon/CIMB";
import { QRIcon } from "../../Elements/PaymentIcon/QRCode";
import { CODIcon } from "../../Elements/PaymentIcon/COD";
import { PaypalIcon } from "../../Elements/PaymentIcon/Paypal";

export const RadioCardPayment = ({ onPaymentMethodChange }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const paymentMethods = [
    { id: 1, name: "BANK CENTRAL ASIA", icon: <BCAIcon /> },
    { id: 2, name: "BANK RAKYAT INDONESIA", icon: <BRiIcon /> },
    { id: 3, name: "BANK MANDIRI", icon: <MandiriIcon /> },
    { id: 4, name: "PAYPAL", icon: <PaypalIcon /> },
    { id: 5, name: "CIMB", icon: <CIMBIcon /> },
    { id: 6, name: "QR CODE", icon: <QRIcon /> },
    { id: 7, name: "CASH ON DELIVERY (COD)", icon: <CODIcon /> },
  ];

  const handleRadioChange = (method) => {
    setSelectedPaymentMethod(method);
    onPaymentMethodChange(method);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-2 font-semibold lg:mt-0 lg:w-1/4 2xl:w-1/5 ">
      <h2 className="w-full font-semibold text-center lg:text-start 2xl:text-2xl font-Roboto ">
        Payment Method
      </h2>
      <div className="w-full">
        <ul className="grid grid-cols-1 gap-y-3">
          {paymentMethods.map((item) => (
            <li key={item.id} className="w-full 2xl:max-w-xs">
              <label htmlFor={item.name} className="relative block">
                <input
                  id={item.name}
                  type="radio"
                  name="paymentMethod"
                  className="sr-only peer"
                  onClick={() => handleRadioChange(item.name)}
                />
                <div className="flex items-center w-full h-10 p-2 duration-200 bg-white border rounded-lg shadow-sm cursor-pointer lg:h-8 2xl:h-10 gap-x-3 ring-indigo-600 peer-checked:ring-2">
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
      {/* {selectedPaymentMethod && (
        <div className="mt-4">
          <p>Selected Payment Method: {selectedPaymentMethod}</p>
        </div>
      )} */}
    </div>
  );
};
