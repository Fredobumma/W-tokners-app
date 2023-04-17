import React, { useContext } from "react";
import ThemeContext from "../context/themeContext";
import { SVG } from "../common/svg";

const NotFound = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="py-10 relative tab:py-60px laptop:pb-0 laptop:pt-20">
      <div
        className={`absolute blur-[100px] h-full rotate-[15deg] w-full -z-20 tab:left-1/3 laptop:left-[60%] ${
          theme ? "bg-aside" : "bg-darkAside"
        }`}
      ></div>
      <div className="border-t h-[50vh] max-w-1024 mt-5 mx-auto pb-5 pt-5 rounded-all shadow-xl text-center">
        <div className="flex flex-col justify-center h-full">
          <div className="mx-auto relative w-fit">
            <h1 className="font-bold text-8xl text-yellow w-full tab:text-9xl">
              404
            </h1>
            <div className="absolute bg-green-600 bottom-1/4 inset-x-0 mx-auto px-2.5 rounded-all w-fit">
              <p className="bg-clip-text bg-ouwee font-bold rounded-all text-transparent text-xs tab:text-sm">
                Ouwee...
              </p>
            </div>
            <span className="absolute right-0 -top-1/2 max-w-[50px] tab:-top-1/4">
              <SVG id="404" />
            </span>
          </div>
          <p className="font-bold text-red tab:text-lg">Page Not Found</p>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
