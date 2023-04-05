import React from "react";
import { useSnapCarousel } from "react-snap-carousel";
import { SVG } from "./svg";

const Carousel = ({ theme, children }) => {
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
      <div className="flex justify-between mb-10">
        <h1 className="font-bold text-32 leading-10 tab:text-40 desktop:text-5xl desktop:leading-54">
          Our Team
        </h1>
        <div className="flex justify-center mr-12 space-x-2" aria-hidden>
          <button
            className={`hidden outline-0 py-2 px-4 active:rotate-360 focus:rotate-360 hover:rotate-360 transform-gpu transform transition-all duration-300 laptop:block ${
              activePageIndex <= 0 &&
              "opacity-30 active:rotate-360 focus:rotate-360 hover:rotate-0"
            }`}
            onClick={() => prev()}
          >
            <SVG id="left-arrow" />
          </button>
          <button
            className={`hidden outline-0 py-2 px-4 active:rotate-360 focus:rotate-360 hover:rotate-360 transform-gpu transform transition-all duration-300 laptop:block ${
              activePageIndex === pages.length - 1 &&
              "opacity-30 active:rotate-360 focus:rotate-360 hover:rotate-0"
            }`}
            onClick={() => next()}
          >
            <SVG id="right-arrow" />
          </button>
        </div>
      </div>

      <ul
        className="flex gap-2.5 overflow-x-auto pb-5 pr-5 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded-all bigTab:pr-8 laptop:pr-16 snap-mandatory laptop:gap-5"
        ref={scrollRef}
      >
        {/*  LIST OF ITEMS TO BE RENDERED
        {Array.from({ length: 5 }).map((_, i) => (
          <li
            key={i}
            className={`flex-shrink-0 ${snapPointIndexes.has(i) && snap-start}`}
          >
            <img src="" alt={`Item ${i}`} />
          </li>
        ))} */}
        {children}
      </ul>

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
    </>
  );
};

export default Carousel;
