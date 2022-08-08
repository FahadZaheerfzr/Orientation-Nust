/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {

    extend: {
      colors: {
        "pale-pink": "#F9D8D7",
        "ultra-red": "#F26E83",
        "tyrian-purple": "#720240",
        "prussian-blue": "#112E49",
        "lapis-lazuli": "#12629E",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        vogue: ["Vogue"],
        brittany: ["Brittany-Signature"],

      },
    },
  },
  plugins: [],
};