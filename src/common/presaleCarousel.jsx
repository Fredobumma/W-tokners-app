import { lazy, useContext } from "react";
import CarouselContext from "../context/carouselContext";
import ScrollIndicator from "./scrollIndicator";

const SVG = lazy(async () => ({ default: (await import("./svg")).SVG }));

const PresaleCarousel = ({ cards }) => {
  const { pages, activePageIndex, scrollRef, goTo } =
    useContext(CarouselContext);

  return (
    <>
      <ul
        className="flex gap-x-2.5 max-w-[1280px] mb-4 -ml-5 mx-auto overflow-x-auto pb-30px pr-8 px-5 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded-all snap-mandatory text-center w-screen tab:px-8 bigTab:ml-0 bigTab:pb-8 bigTab:px-5 bigTab:w-full laptop:gap-x-5 laptop:pb-16 desktop:justify-center widerScreen:max-w-1600"
        ref={scrollRef}
      >
        {cards.map(
          ({ color, number, date, token, softCap, hardCap }, index) => (
            <li
              key={index}
              className={`bg-dark text-white flex flex-col h-max items-center max-w-400 min-w-max pb-55px pt-70px px-50px snap-start rounded-all laptop:px-70px widerScreen:max-w-512 widerScreen:pb-88px widerScreen:pt-28 widerScreen:px-100px dark:bg-white dark:text-dark ${
                index === 1 && "desktop:mt-60px"
              }`}
            >
              <span className="flex h-82 items-center justify-center relative w-82">
                <span className="absolute font-bold text-26 text-dark z-10">
                  0{++index}
                </span>
                <span className="absolute top-[-11%]">
                  <SVG id={`goals-${color}`} />
                </span>
              </span>
              <h4 className="font-bold text-32 leading-54 mb-1 mt-30px widerScreen:mb-2.5 widerScreen:mt-16">
                Phase {number}
              </h4>
              <p className="font-bold opacity-80 leading-5">{date}</p>
              <p className="opacity-80 font-bold text-xl leading-5 mb-5 mt-10 widerScreen:mt-70px">
                1 BNB = {token} WNTR
              </p>
              <p className="opacity-80 leading-5">
                Soft cap: <span className="font-bold">{softCap} BNB</span>
              </p>
              <p className="opacity-80 leading-5 mt-2.5">
                Hard cap: <span className="font-bold">{hardCap} BNB</span>
              </p>
            </li>
          )
        )}
      </ul>

      <ScrollIndicator
        pages={pages}
        active={activePageIndex}
        classes="bg-light border-light"
        goTo={goTo}
      />
    </>
  );
};

export default PresaleCarousel;
