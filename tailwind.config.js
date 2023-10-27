/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      colors: {
        "logo-main": "#9b0404",
      },
      fontFamily: {
        main: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
