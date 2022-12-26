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
      fontSize: {
        28: "28px",
        32: "32px",
        40: ["40px", "48px"],
      },
      lineHeight: {
        54: "54px",
      },
    },
  },
  plugins: [],
};
