/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
        hovButton: "#035d2b",
        light: "#fff",
        secondary: "#22A75D",
      },
      fontSize: {
        28: "28px",
        32: "32px",
        40: ["40px", "48px"],
      },
      lineHeight: {
        54: "54px",
      },
      spacing: {
        7.5: "30px",
      },
    },
  },
  plugins: [],
};
