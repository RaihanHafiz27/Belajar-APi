const dataFooter = [
  {
    title: "Luxura Office",
    content: "Jalan Kenangan 1 no 27 Bekasi Timur",
  },
  {
    title: "Contact us",
    images: [
      {
        src: "/images/contact-us/instagram.svg",
        link: "https://www.instagram.com/",
      },
      {
        src: "/images/contact-us/facebook.svg",
        link: "https://www.facebook.com/",
      },
      { src: "/images/contact-us/wa.svg", link: "https://web.whatsapp.com/" },
      {
        src: "/images/contact-us/linkedin.svg",
        link: "https://id.linkedin.com/",
      },
      { src: "/images/contact-us/x.svg", link: "https://twitter.com/" },
    ],
  },
  {
    title: "Email",
    content: "muhammadraihan86185@gmail.com",
  },
];

export const Footer = () => {
  return (
    <div className="w-full p-2 text-slate-200 font-Roboto">
      <div className="flex flex-col pb-5 text-center border-b md:flex-row">
        {dataFooter.map((item, index) => (
          <div key={index} className="w-full my-2 md:my-0 md:w-1/3">
            <h1 className="mb-2 text-sm font-semibold md:text-base">
              {item.title}
            </h1>
            {item.content ? (
              <p className="text-sm lg:text-base">{item.content}</p>
            ) : (
              <div className="flex justify-center ">
                {item.images &&
                  item.images.map((imgItem, idx) => (
                    <a
                      key={idx}
                      href={imgItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-6 h-6 mx-2 md:w-8 md:h-8 rounded-xl bg-slate-200 "
                    >
                      <img
                        src={imgItem.src}
                        alt=""
                        className="z-0 w-full transition-all duration-300 scale-110 rounded-lg hover:scale-125"
                      />
                    </a>
                  ))}
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
