import React from "react";
import { SVG } from "../svg";

const Presale = ({ theme }) => {
  return (
    <section className="py-10 laptop:py-20">
      <h2 className="font-bold text-32 text-center leading-10 mb-4 tab:text-40 bigTab:mb-5 desktop:mb-10 desktop:text-5xl desktop:leading-54">
        Presale Details
      </h2>
      <div className="overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded-all">
        <div className="gap-x-2.5 grid grid-cols-3 max-w-[1220px] mb-4 mx-auto w-[250vw] text-center widerScreen:gap-x-5 widerScreen:max-w-[1580px]">
          <div
            className={`${
              theme ? "bg-dark text-white" : "bg-white text-dark"
            } flex flex-col h-max items-center max-w-400 pb-55 pt-70 px-30 rounded-all widerScreen:max-w-512 widerScreen:pb-88 widerScreen:pt-28`}
          >
            <span className="flex h-82 items-center justify-center relative w-82">
              <span className="absolute font-bold text-26 text-dark z-10">
                01
              </span>
              <span className="absolute top-[-11%]">
                <SVG id="goals-green" />
              </span>
            </span>
            <h4 className="font-bold text-32 leading-54 mb-1 mt-30 widerScreen:mb-2.5 widerScreen:mt-16">
              Phase One
            </h4>
            <p className="font-bold opacity-80 leading-5">
              23/01/2021 - 16/04/2021
            </p>
            <p className="opacity-80 font-bold text-xl leading-5 mb-5 mt-10 widerScreen:mt-70">
              1 BNB = 100000 WNTR
            </p>
            <p className="opacity-80 leading-5">
              Soft cap: <span className="font-bold">5000 BNB</span>
            </p>
            <p className="opacity-80 leading-5 mt-2.5">
              Hard cap: <span className="font-bold">10000 BNB</span>
            </p>
          </div>
          <div
            className={`${
              theme ? "bg-dark text-white" : "bg-white text-dark"
            } flex flex-col h-max items-center max-w-400 pb-55 pt-70 px-30 rounded-all desktop:mt-60 widerScreen:max-w-512 widerScreen:pb-88 widerScreen:pt-28`}
          >
            <span className="flex h-82 items-center justify-center relative w-82">
              <span className="absolute font-bold text-26 text-dark z-10">
                01
              </span>
              <span className="absolute top-[-11%]">
                <SVG id="goals-blue" />
              </span>
            </span>
            <h4 className="font-bold text-32 leading-54 mb-1 mt-30 widerScreen:mb-2.5 widerScreen:mt-16">
              Phase Two
            </h4>
            <p className="font-bold opacity-80 leading-5">
              23/04/2021 - 17/07/2021
            </p>
            <p className="opacity-80 font-bold text-xl leading-5 mb-5 mt-10 widerScreen:mt-70">
              1 BNB = 135000 WNTR
            </p>
            <p className="opacity-80 leading-5">
              Soft cap: <span className="font-bold">10000 BNB</span>
            </p>
            <p className="opacity-80 leading-5 mt-2.5">
              Hard cap: <span className="font-bold">15000 BNB</span>
            </p>
          </div>
          <div
            className={`${
              theme ? "bg-dark text-white" : "bg-white text-dark"
            } flex flex-col h-max items-center max-w-400 pb-55 pt-70 px-30 rounded-all widerScreen:max-w-512 widerScreen:pb-88 widerScreen:pt-28`}
          >
            <span className="flex h-82 items-center justify-center relative w-82">
              <span className="absolute font-bold text-26 text-dark z-10">
                01
              </span>
              <span className="absolute top-[-11%]">
                <SVG id="goals-yellow" />
              </span>
            </span>
            <h4 className="font-bold text-32 leading-54 mb-1 mt-30 widerScreen:mb-2.5 widerScreen:mt-16">
              Phase Three
            </h4>
            <p className="font-bold opacity-80 leading-5">
              23/01/2021 - 16/04/2021
            </p>
            <p className="opacity-80 font-bold text-xl leading-5 mb-5 mt-10 widerScreen:mt-70">
              1 BNB = 200000 WNTR
            </p>
            <p className="opacity-80 leading-5">
              Soft cap: <span className="font-bold">20000 BNB</span>
            </p>
            <p className="opacity-80 leading-5 mt-2.5">
              Hard cap: <span className="font-bold">30000 BNB</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presale;
