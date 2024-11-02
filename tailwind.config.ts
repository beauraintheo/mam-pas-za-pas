/** @type {import('tailwindcss').Config} */
export default {
  darkMode: [ "class" ],
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}" ],
  theme: {
    extend: {
      colors: {
        primary: "#19C1B6",
        secondary: "#FEA439",
        hightlight: "#FE6788",
        light: "#FEF8EC",
      },
      fontFamily: {
        fredoka: [ "Fredoka", "sans-serif" ],
        gloria: [ "Gloria Hallelujah", "cursive" ],
      },
      fontSize: {
        16: [ "16px", "1.2" ],
        18: [ "18px", "1.255" ],
        20: [ "20px", "1.2" ],
        26: [ "26px", "1.255" ],
        28: [ "28px", "1.2" ],
        32: [ "32px", "1.255" ],
        36: [ "36px", "1.2" ],
        42: [ "42px", "1.255" ],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
};
