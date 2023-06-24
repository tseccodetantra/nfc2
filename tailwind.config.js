/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        yellow: "#d4b201",
        bgBlack: "#000000e6",
      },
      fontFamily: {
        Roboto: ["Raleway", "sans-serif"],
        RobotoCondensed: ["Roboto Condensed", " sans-serif"],
      },
      margin: {
        "100px": "100px",
        "10rem": "10rem",
        "15rem": "15rem",
        "8rem": "8rem",
        "25px": "25px",
      },
    },
  },
  plugins: [],
};
