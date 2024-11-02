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
      },
      fontFamily: {
        fredoka: [ "Fredoka", "sans-serif" ],
        gloria: [ "Gloria Hallelujah", "cursive" ],
      },
      fontSize: {
        32: [ "32px", "1.255" ],
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
