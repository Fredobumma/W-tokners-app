/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("autoprefixer"),
  ],
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
        aside:
          "linear-gradient(135deg, rgba(226,6,19,0.4) 0%, rgba(255,255,255,1) 16%, rgba(255,255,255,1) 44%, rgba(37,99,235,0.2) 62%, rgba(255,255,255,1) 67%)",
        darkAside:
          "linear-gradient(135deg, rgba(226,6,19,0.7) 0%, rgba(15,19,32,1) 16%, rgba(15,19,32,1) 44%, rgba(37,99,235,0.2) 62%, rgba(15,19,32,1) 67%)",
        darkHero:
          "linear-gradient(0deg, rgba(43,48,135,1) 0%, rgba(0,180,236,1) 30%)",
        darkNav:
          "linear-gradient(135deg, rgba(226,6,19,0.7) 20%, rgba(15,19,32,1) 16%, rgba(15,19,32,1) 44%, rgba(37,99,235,0.2) 62%, rgba(15,19,32,1) 67%)",
        "darkNav-xl":
          "linear-gradient(135deg, rgba(226,6,19,0.7) 5%, rgba(15,19,32,1) 16%, rgba(15,19,32,1) 44%, rgba(37,99,235,0.2) 62%, rgba(15,19,32,1) 67%)",
        darkShowcase:
          "linear-gradient(0deg, rgba(15,19,32,0.7) 0%, rgba(255,255,255,0) 30%)",
        form: "linear-gradient(90deg, #FFD100, #22A75D, #2278D4, #E20613)",
        hero: "linear-gradient(0deg, rgba(43,48,135,1) 0%, rgba(0,180,236,1) 90%)",
        nav: "linear-gradient(135deg, rgba(226,6,19,0.4) 20%, rgba(255,255,255,1) 16%, rgba(255,255,255,1) 44%, rgba(37,99,235,0.05) 62%, rgba(255,255,255,1) 67%)",
        "nav-xl":
          "linear-gradient(135deg, rgba(226,6,19,0.4) 5%, rgba(255,255,255,1) 16%, rgba(255,255,255,1) 44%, rgba(37,99,235,0.2) 62%, rgba(255,255,255,1) 67%)",
        ouwee:
          "linear-gradient(90deg, rgba(22,65,148,1) 0%, rgba(255,209,0,1) 20%, rgba(63,174,108,1) 40%, rgba(22,65,148,1) 60%, rgba(226,6,19,1) 80%)",
        showcase:
          "linear-gradient(0deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 30%)",
        sprite: "url('/src/common/images/sprite.webp')",
      },
      backgroundSize: {
        "400%": "400% 400%",
      },
      borderRadius: { all: "25px" },
      dropShadow: {
        button: [
          "0 20px 13px rgba(34, 167, 93, 0.1)",
          "0 10px 8px rgba(34, 167, 93, 0.2)",
        ],
      },
      colors: {
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
        1600: "1600px",
      },
      minWidth: {
        250: "250px",
      },
      rotate: {
        360: "360deg",
      },
      scale: {
        115: "1.15",
      },
      spacing: {
        "30px": "30px",
        "38px": "38px",
        "45px": "45px",
        "50px": "50px",
        "55px": "55px",
        "60px": "60px",
        "70px": "70px",
        "88px": "88px",
        "100px": "100px",
        "120px": "120px",
        "130px": "130px",
        "150px": "150px",
        "170px": "170px",
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
