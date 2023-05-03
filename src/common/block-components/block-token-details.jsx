"use client";

import { useContext } from "react";
import { ErrorBoundary } from "react-error-boundary";
import TradeViewChart from "react-crypto-chart";
import ThemeContext from "../../context/themeContext";
import { SVG } from "../svg";

const TokenDetails = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="py-10 relative laptop:py-20">
      <div
        className={`absolute blur-[100px] h-full rotate-[15deg] w-full -z-20 tab:left-1/3 laptop:left-[60%] ${
          theme ? "bg-aside" : "bg-darkAside"
        }`}
      ></div>{" "}
      <div className="relative">
        <div className="absolute h-max left-0 max-w-2xl mx-auto overflow-x-hidden overflow-y-auto right-0 rounded-all shadow-xl top-0 w-full z-50 bigTab:mt-20 laptop:mt-60px desktop:mt-10">
          <div className="flex border-b items-start p-4 px-6 rounded-t">
            <h3 className="font-bold text-26 truncate">
              <span className="align-middle bg-yellow inline-block h-30 mr-2 rounded-all w-30"></span>
              Bitcoin <sup className="align-middle text-[10px]">BTC</sup>
            </h3>
            <button
              type="button"
              className="inline-flex items-center ml-auto p-1.5 rounded-all text-sm hover:bg-gray-200 hover:text-gray-900 transform-gpu transform transition-all duration-300"
              data-modal-hide="defaultModal"
            >
              <span className="w-5">&#10006;</span>
            </button>
          </div>
          <div className="flex flex-col p-6 space-y-6 bigTab:flex-row bigTab:gap-6 bigTab:mt-2.5 bigTab:space-y-0">
            <div className="w-full">
              <div className="flex justify-between">
                <p className="font-bold truncate">
                  <span className="font-normal opacity-70 text-sm">Price</span>
                  <br />
                  $27,785
                </p>
                <p
                  className={`bg-opacity-25 bg-rose-700 flex gap-1 h-fit items-center mt-1 px-1.5 rounded-all text-sm ${
                    theme ? "text-red" : "text-rose-500"
                  }`}
                >
                  <span className="truncate">-1.45%</span>
                  <SVG id="select-icon" />
                </p>
              </div>
              <p className="font-bold truncate">
                <span className="font-normal opacity-70 text-sm">
                  Market Cap
                </span>
                <br />
                $574,512,927,785
              </p>
              <div>
                <p className="font-bold truncate">
                  <span className="font-normal opacity-70 text-sm">
                    24h Volume
                  </span>
                  <br />
                  $74,512,927,785
                </p>
                <div className="bg-green-500 h-2 my-4 rounded-full w-full">
                  <div
                    className="bg-rose-700 h-2 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </div>
              <div className="gap-6 grid grid-cols-2">
                <p className="break-words font-bold w-full">
                  <span className="font-normal opacity-70 text-sm">
                    Low 24h
                  </span>
                  <br />
                  $27,663
                </p>
                <p className="break-words font-bold text-right place-self-end w-full">
                  <span className="font-normal opacity-70 text-sm">
                    High 24h
                  </span>
                  <br />
                  $28,632
                </p>
                <p className="break-words font-bold w-full">
                  <span className="font-normal opacity-70 text-sm">
                    Max Supply
                  </span>
                  <br />
                  $27,663,543
                </p>
                <p className="break-words font-bold text-right place-self-end w-full">
                  <span className="font-normal opacity-70 text-sm">
                    Circulating Supply
                  </span>
                  <br />
                  $27,663,543
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="overflow-y-hidden">
                <ErrorBoundary
                  fallback={
                    <p className="h-[300px] text-sm w-full">
                      Error loading chart
                    </p>
                  }
                >
                  <TradeViewChart
                    containerStyle={{
                      height: "300px",
                      margin: "0 auto",
                      maxWidth: "300px",
                      width: "100%",
                    }}
                    pair="BTCUSDT"
                  />
                </ErrorBoundary>
              </div>
              <div className="flex gap-5 justify-between mt-6">
                <p className="break-words font-bold place-self-end w-full bigTab:gap-5">
                  <span className="font-normal opacity-70 text-sm">Rank:</span>{" "}
                  1
                </p>
                <button className="cursor-pointer hover:scale-110 laptop:mr-0 transform-gpu transform transition-all duration-300">
                  <SVG id="reset" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"></div>
        </div>
      </div>
    </section>
  );
};

export default TokenDetails;
