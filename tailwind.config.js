/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#19C1B6",
        secondary: "#FEA439",
        highlight: "#FE6788",
      },
      fontFamily: {
        fredoka: [ "Fredoka", "sans-serif" ],
        gloria: [ "Gloria Hallelujah", "cursive" ],
      },
      fontSize: {
        sm: [ "18px", "1.255" ],
        base: [ "24px", "1.655" ],
      },
    },
  },
  plugins: [],
};
