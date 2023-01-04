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
        altButton: "#035d2b",
        creatorsLink: "#22A75D",
        dark: "#0F1320",
        holdersLink: "#2278D4",
        light: "#fff",
        secondary: "#22A75D",
        red: "#E20613",
        yellow: "#FFD100",
      },
      fontSize: {
        26: ["26px", "36px"],
        28: "28px",
        32: "32px",
        40: ["40px", "48px"],
      },
      height: {
        22: "22.4px",
        82: "82px",
        385: "385px",
        420: "420px",
      },
      lineHeight: {
        34: "34px",
        54: "54px",
      },
      spacing: {
        7.5: "30px",
      },
      width: {
        22: "22.4px",
        82: "82px",
        236: "236px",
        257: "257px",
      },
    },
  },
};
