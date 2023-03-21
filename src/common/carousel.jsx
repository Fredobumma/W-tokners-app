import React from "react";
import { useSnapCarousel } from "react-snap-carousel";
import { SVG } from "./svg";

const Carousel = ({ theme }) => {
  const {
    pages,
    activePageIndex,
    // snapPointIndexes,
    scrollRef,
    next,
    prev,
    goTo,
  } = useSnapCarousel();

  return (
    <>
      <ul className="flex overflow-x-auto snap-mandatory" ref={scrollRef}>
        {/*  LIST OF ITEMS TO BE RENDERED
        {Array.from({ length: 5 }).map((_, i) => (
          <li
            key={i}
            className={`flex-shrink-0 ${snapPointIndexes.has(i) && snap-start}`}
          >
            <img src="" alt={`Item ${i}`} />
          </li>
        ))} */}
      </ul>
      <div className="flex justify-center space-x mt-2" aria-hidden>
        <button
          className={`hidden py-2 px-4 mx-2 active:rotate-360 focus:rotate-360 hover:rotate-360 transform-gpu transform transition-all duration-300 laptop:block ${
            activePageIndex <= 0 &&
            "opacity-30 active:rotate-360 focus:rotate-360 hover:rotate-0"
          }`}
          onClick={() => prev()}
        >
          <SVG id={`${theme ? "dark-left-arrow" : "left-arrow"}`} />
        </button>
        <ol className="flex flex-wrap gap-x-2.5 gap-y-5 items-center justify-center mt-30 laptop:hidden">
          {pages.map((_, i) => (
            <li
              key={i}
              className={`cursor-pointer inline-block rounded-all ${
                theme ? "bg-dark border-dark" : "bg-light border-light"
              } ${
                i === activePageIndex
                  ? "p-1"
                  : "bg-transparent border-[1px] h-fit p-[1px]"
              }`}
              onClick={() => goTo(i)}
            ></li>
          ))}
        </ol>
        <button
          className={`hidden py-2 px-4 active:rotate-360 focus:rotate-360 hover:rotate-360 transform-gpu transform transition-all duration-300 laptop:block ${
            activePageIndex === pages.length - 1 &&
            "opacity-30 active:rotate-360 focus:rotate-360 hover:rotate-0"
          }`}
          onClick={() => next()}
        >
          <SVG id={theme ? "dark-right-arrow" : "right-arrow"} />
        </button>
      </div>
    </>
  );
};

export default Carousel;
