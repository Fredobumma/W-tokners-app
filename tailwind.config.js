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
      widerScreen: "1440px",
    },
    extend: {
      animation: {
        "switch-gradient": "switch 2.5s ease-in-out infinite",
      },
      backgroundImage: {
        form: "linear-gradient(90deg, #FFD100, #22A75D, #2278D4, #E20613)",
      },
      backgroundSize: {
        "400%": "400% 400%",
      },
      borderRadius: { all: "25px" },
      colors: {
        altButton: "#035d2b",
        creatorsLink: "#22A75D",
        dark: "#0F1320",
        holdersLink: "#2278D4",
        light: "#fff",
        secondary: "#22A75D",
        red: "#E20613",
        yellow: "#FFD100",
        teamCard: "#0D0B16",
        lightTeamCard: "#AFAFAF",
        guideCard: "#171B29",
        lightGuideCard: "#E2E2E2",
      },
      fontFamily: {
        target: ["Azo Sans", "sans-serif"],
      },
      fontSize: {
        15: ["15px", "34px"],
        26: ["26px", "36px"],
        28: "28px",
        32: "32px",
        40: ["40px", "48px"],
        minmax9vw: "min(9vw, 48px)",
        minmax48: "min(12vw, 48px)",
      },
      height: {
        22: "22.4px",
        50: "50px",
        60: "60px",
        82: "82px",
        86: "86px",
        385: "385px",
        420: "420px",
        logo: "min(12%, 48px)",
      },
      inset: {
        minmax1: "min(45%, 195px)",
        minmax2: "min(10%, 65px)",
      },
      keyframes: {
        switch: {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
      },
      lineHeight: {
        34: "34px",
        54: "54px",
      },
      maxHeight: {
        400: "400px",
      },
      maxWidth: {
        270: "270px",
        400: "400px",
        512: "512px",
        640: "640px",
        700: "700px",
        800: "800px",
        1024: "1024px",
      },
      rotate: {
        360: "360deg",
      },
      scale: {
        115: "1.15",
      },
      spacing: {
        30: "30px",
        38: "38px",
        45: "45px",
        50: "50px",
        55: "55px",
        60: "60px",
        70: "70px",
        88: "88px",
        100: "100px",
        120: "120px",
        170: "170px",
        minmax: "min(4%, 40px)",
        purchase: "min(10%, 30px)",
      },
      textUnderlineOffset: {
        3: "3px",
      },
      width: {
        22: "22.4px",
        50: "50px",
        60: "60px",
        82: "82px",
        86: "86px",
        236: "236px",
        257: "257px",
        logo: "min(12%, 48px)",
      },
    },
  },
};
