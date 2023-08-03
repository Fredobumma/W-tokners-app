import { lazy } from "react";
import Carousel from "../carousel";
import PresaleCarousel from "../presaleCarousel";

const SVG = lazy(() => import("../assets/svgs/guestPageSvg"));

const Presale = () => {
  const cards = [
    {
      number: "One",
      color: "green",
      date: "23/01/2023 - 16/04/2023",
      token: "100000",
      softCap: "5000",
      hardCap: "10000",
    },
    {
      number: "Two",
      color: "blue",
      date: "23/04/2023 - 17/07/2023",
      token: "135000",
      softCap: "10000",
      hardCap: "15000",
    },
    {
      number: "Three",
      color: "yellow",
      date: "26/07/2023 - 18/10/2023",
      token: "200000",
      softCap: "20000",
      hardCap: "30000",
    },
  ];

  return (
    <section className="py-130px relative bigTab:py-150px laptop:pt-[250px] laptop:pb-120px widerScreen:pt-[300px]">
      <span className="absolute h-full inset-0 -ml-5 w-screen -z-20 bigTab:-ml-8 laptop:hidden">
        <SVG id="presale-bg-2" height="100%" width="100%" aspectRatio="none" />
      </span>
      <span className="hidden inset-0 text-white w-screen -z-20 laptop:absolute laptop:block laptop:-ml-16 laptop:h-[85%] widerScreen:max-w-1600 dark:text-dark">
        <SVG id="presale-bg" height="100%" width="100%" aspectRatio="none" />
      </span>
      <h2 className="font-bold leading-10 mb-30px text-32 text-center text-white tab:text-40 desktop:mb-10 desktop:text-5xl desktop:leading-54">
        Presale Details
      </h2>
      <Carousel>
        <PresaleCarousel cards={cards} />
      </Carousel>
    </section>
  );
};

export default Presale;
