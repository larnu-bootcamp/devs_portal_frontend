/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fibraBold: ["fibra-one-bold", "sans-serif"],
        fibraRegular: ["fibra-one-regular", "sans-serif"],
      },
      colors: {
        fondoMorado: "#F0F5FD",
        colorTitulo: "#3E416D",
        colorSubTitulo: "#9798A9",
      },
    },
  },
  plugins: [],
};
