/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poopins: ["Poopins", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "50%": { transform: "translateX(25px)", opacity: "1" },
          "51%": { opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "0" },
        },
      },
      animation: {
        slide: "slide 1.5s infinite",
      },
    },
  },
  plugins: [],
};
