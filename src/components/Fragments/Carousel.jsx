import React, { useState, useEffect } from "react";

const Carousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, interval);

    return () => {
      clearInterval(autoSlide);
    };
  }, [currentIndex, interval]);

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div
      className="relative w-11/12 h-40 mx-auto overflow-hidden lg:w-3/5 md:h-52 2xl:h-80 rounded-xl"
      style={{
        boxShadow: "2px 2px 8px rgba(0,0,0,0.6)",
      }}
    >
      <div
        className="flex w-full h-full transition-transform duration-500 transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="object-cover w-full h-full bg-center"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 flex p-2 space-x-2 transform -translate-x-1/2 left-1/2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
