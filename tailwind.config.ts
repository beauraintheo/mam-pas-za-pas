/** @type {import('tailwindcss').Config} */
export default {
  darkMode: [ "class" ],
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}" ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(135deg, rgba(254,246,236,1) 0%, rgba(237,254,252,1) 100%)",
      },
      colors: {
        "primary": "#19C1B6",
        "primary-200": "rgba(25, 193, 182, .2)",
        "primaryHover": "#3AD1C9",
        "secondary": "#FEA439",
        "secondary-200": "rgba(254, 164, 57, .2)",
        "secondaryHover": "#FEBD6A",
        "highlight": "#FE6788",
        "highlight-200": "rgba(254, 103, 136, .2)",
        "light": "#FEF8EC",
        "lightHover": "#F3E3C4",
        "lightIcon": "#FEF8EC",
        "gray": "#666666",
      },
      fontFamily: {
        fredoka: [ "Fredoka", "sans-serif" ],
        gloria: [ "Gloria Hallelujah", "cursive" ],
      },
      fontSize: {
        16: [ "16px", "1.2" ],
        18: [ "18px", "1.255" ],
        20: [ "20px", "1.2" ],
        22: [ "22px", "1.75" ],
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
