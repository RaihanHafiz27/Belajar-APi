import { useEffect, useState } from "react";

export const CardProducts = () => {
  const [displayText, setDisplayText] = useState("");
  const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.";

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // console.log("Window width:", width); mengecek lebar window

      if (width < 640) {
        setDisplayText(text.substring(0, 11)); // Substring for small screens
      } else if (width > 1024) {
        setDisplayText(text.substring(0, 40)); // Substring for medium screens
      } else {
        setDisplayText(text); // Full text for large screens
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [text]);
  return (
    <div
      className="w-5/12 mx-1 my-1 lg:w-1/5 2xl:w-2/12 xl:mx-4 lg:my-2 rounded-xl"
      style={{
        boxShadow: "1px 1px 4px rgba(0,0,0,0.2)",
      }}
    >
      <div className="w-full h-32 xl:h-40">
        <img
          src="/images/baju.jpg"
          alt=""
          className="object-cover w-full h-full rounded-t-xl"
        />
      </div>
      <div className="p-2">
        <p className="text-sm">Baju Baru</p>
        <p className="text-xs text-justify xl:text-sm">{displayText}...</p>
        <p className="text-xs xl:text-sm">{`(4,5/5)`} 1rb+</p>
        <p className="text-xs xl:text-sm">Rp. 100.000</p>
      </div>
    </div>
  );
};
