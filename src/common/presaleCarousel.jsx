import { useSnapCarousel } from "react-snap-carousel";
import { SVG } from "./svg";

const PresaleCarousel = ({ cards }) => {
  let {
    pages,
    activePageIndex,
    // snapPointIndexes,
    scrollRef,
    goTo,
  } = useSnapCarousel();
  pages = pages[0];

  return (
    <>
      <div className="-ml-5 overflow-x-auto pb-5 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded-all snap-mandatory w-screen bigTab:ml-0 bigTab:pb-8 bigTab:w-full laptop:pb-102">
        <ul
          className="gap-x-2.5 grid grid-cols-3 max-w-[1220px] mb-4 mx-auto pb-5 pl-5 pr-10 text-center w-[250vw] tab:pl-8 tab:pr-50px bigTab:px-0 widerScreen:gap-x-5 widerScreen:max-w-1600"
          ref={scrollRef}
        >
          {cards.map(
            ({ color, number, date, token, softCap, hardCap }, index) => (
              <li
                key={index}
                className={`bg-dark text-white flex flex-col h-max items-center max-w-400 pb-55px pt-70px px-30px snap-start rounded-all widerScreen:max-w-512 widerScreen:pb-88px widerScreen:pt-28 dark:bg-white dark:text-dark ${
                  index == 1 && "desktop:mt-60px"
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
      </div>

      <ol className="flex flex-wrap gap-x-2.5 gap-y-5 items-center justify-center mt-30px laptop:hidden">
        {pages.map((_, i) => (
          <li
            key={i}
            className={`bg-light border-light cursor-pointer inline-block rounded-all
             ${
               i === activePageIndex
                 ? "p-1"
                 : "bg-transparent border-[1px] h-fit p-[1px]"
             }`}
            onClick={() => goTo(i)}
          ></li>
        ))}
      </ol>
    </>
  );
};

export default PresaleCarousel;
