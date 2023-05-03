import { useSnapCarousel } from "react-snap-carousel";

const PresaleCarousel = ({ children }) => {
  const {
    pages,
    activePageIndex,
    // snapPointIndexes,
    scrollRef,
    goTo,
  } = useSnapCarousel();

  return (
    <>
      <div className="-ml-5 overflow-x-auto pb-5 px-5 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded-all snap-mandatory w-screen tab:px-8 bigTab:ml-0 bigTab:pb-8 bigTab:px-0 bigTab:w-full laptop:pb-102">
        <ul
          className="gap-x-2.5 grid grid-cols-3 max-w-[1220px] mb-4 mx-auto pb-5 text-center w-[250vw] widerScreen:gap-x-5 widerScreen:max-w-1600"
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
            onClick={() => goTo(pages)}
          ></li>
        ))}
      </ol>
    </>
  );
};

export default PresaleCarousel;
