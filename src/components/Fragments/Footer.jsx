import { Link } from "react-router-dom";

const dataFooter = [
  {
    title: "Luxura Office",
    content: "Jalan Kenangan 1 no 27 Bekasi Timur",
  },
  {
    title: "Contact us",
    img1: "/images/contact-us/instagram.svg",
    img2: "/images/contact-us/facebook.svg",
    img3: "/images/contact-us/wa.svg",
    img4: "/images/contact-us/linkedin.svg",
    img5: "/images/contact-us/x.svg",
  },
  {
    title: "Email",
    content: "muhammadraihan86185@gmail.com",
  },
];

export const Footer = () => {
  return (
    <div className="w-full p-2 text-slate-200 font-Roboto">
      <div className="flex flex-col pb-5 text-center border-b lg:flex-row">
        {dataFooter.map((item, index) => (
          <div key={index} className="w-full lg:w-1/3">
            <h1 className="mb-2 font-semibold ">{item.title}</h1>
            {item.content ? (
              <p className="text-sm lg:text-base">{item.content}</p>
            ) : (
              <div className="flex justify-center ">
                {Object.keys(item).map((key, idx) => {
                  if (key.startsWith("img")) {
                    return (
                      <Link
                        key={idx}
                        to=""
                        className="p-1 mx-2 bg-white rounded-full"
                      >
                        <img src={item[key]} alt="" className="w-6 h-6" />
                      </Link>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="w-full pt-4 text-center">
        <p className="text-sm lg:text-base">
          © 2024 <span className="underline underline-offset-2">LUXURA</span>.
          All rights reserved. Unauthorized duplication or publication of any
          materials from this site is expressly prohibited.
        </p>
      </div>
    </div>
  );
};
