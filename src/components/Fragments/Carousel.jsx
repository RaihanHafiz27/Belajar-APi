import React, { useState, useEffect } from "react";

const images = [
  "/images/carousel-1.jpg",
  "/images/carousel-2.jpg",
  "/images/carousel-3.jpg",
];

const Carousel = ({ interval = 3000 }) => {
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
    <div className="relative w-full h-40 mx-auto overflow-hidden lg:w-11/12 2xl:w-3/5 md:h-72 lg:rounded-xl">
      <div
        className="flex w-full h-full transition-transform duration-500 transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="object-cover w-full h-full"
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
