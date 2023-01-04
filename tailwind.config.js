/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  plugins: [],
  theme: {
    screens: {
      tab: "640px",
      bigTab: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      colors: {
        dark: "#0F1320",
        altButton: "#035d2b",
        light: "#fff",
        secondary: "#22A75D",
      },
      fontSize: {
        28: "28px",
        32: "32px",
        40: ["40px", "48px"],
      },
      height: {
        385: "385px",
        420: "420px",
      },
      lineHeight: {
        54: "54px",
      },
      spacing: {
        7.5: "30px",
      },
      width: {
        236: "236px",
        257: "257px",
      },
    },
  },
};
