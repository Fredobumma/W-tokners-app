import { useContext, useEffect } from "react";
import axios from "axios";
import { getTokens } from "../../services/tokenService";
import ThemeContext from "../../context/themeContext";
import { SVG } from "../svg";

const TokensList = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="py-10 relative tab:py-60px laptop:pb-0 laptop:pt-20">
      <div
        className={`absolute blur-[100px] h-full rotate-[15deg] w-full -z-20 tab:left-1/3 laptop:left-[60%] ${
          theme ? "bg-aside" : "bg-darkAside"
        }`}
      ></div>{" "}
      <form className="flex flex-col gap-5 px-5 py-5 bigTab:px-10 laptop:flex-row laptop:gap-50px laptop:items-center laptop:justify-between laptop:py-30px laptop:px-30px desktop:gap-24 desktop:px-60px">
        <div
          className={`flex border-b-2 items-center py-1 px-2 laptop:w-1/3 border-${
            theme ? "dark" : "light"
          }`}
        >
          <input
            type="search"
            id="search-coins"
            placeholder="search here..."
            className={`bg-transparent font-bold mr-3 outline-0 w-full placeholder:font-normal ${
              theme ? "text-dark placeholder:text-gray-500" : "text-light"
            }`}
          />
          <button className="cursor-pointer">
            <SVG id="search-icon" />
          </button>
        </div>
        <div className="flex flex-wrap gap-5 items-center justify-between tab:flex-nowrap tab:gap-50px laptop:grow laptop:mt-1">
          <div className="flex gap-3 grow tab:grow-0">
            <label htmlFor="search-currency">Currency:</label>
            <input
              type="search"
              name="search-currency"
              id="search-currency"
              placeholder="usd"
              className={`bg-transparent border-b-2 font-bold max-w-[60px] outline-0 pl-1 placeholder:font-normal ${
                theme
                  ? "border-dark text-dark placeholder:text-gray-500"
                  : "border-light text-light"
              }`}
            />
            <button className="rotate-90">
              <SVG id="submit-icon" />
            </button>
          </div>
          <div className="flex gap-3 order-2 w-full tab:order-none bigTab:max-w-400">
            <label htmlFor="sort-by">Sort by:</label>
            <span
              className={`flex flex-1 items-center px-3 rounded-all ${
                theme ? "bg-gray-200" : "bg-gray-700"
              }`}
            >
              <select
                id="sort-by"
                name="sort-by"
                className=" appearance-none bg-transparent capitalize flex-1 leading-4 py-1.5 text-xs focus:outline-0"
              >
                <option className="text-dark" value="market_cap_desc">
                  market cap desc
                </option>
                <option className="text-dark" value="market_cap_asc">
                  market cap asc
                </option>
                <option className="text-dark" value=" volume_desc">
                  volume desc
                </option>
                <option className="text-dark" value="volume_asc">
                  volume asc
                </option>
                <option className="text-dark" value="id_desc">
                  id desc
                </option>
                <option className="text-dark" value="id_ascc">
                  id asc
                </option>
                <option className="text-dark" value="gecko_desc">
                  gecko desc
                </option>
                <option className="text-dark" value="gecko_asc">
                  gecko asc{" "}
                </option>
              </select>
              <span className="-ml-5 pointer-events-none">
                <SVG id="select-icon" />
              </span>
            </span>
          </div>
          <button className="cursor-pointer mr-2 hover:scale-110 laptop:mr-0 transform-gpu transform transition-all duration-300">
            <SVG id="reset" />
          </button>
        </div>
      </form>
      <div className="border-t mt-5 overflow-x-auto pb-5 pt-5 rounded-all scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded-all shadow-xl">
        <table className="text-left text-sm w-full">
          <thead className="text-xs uppercase">
            <tr className="border-b">
              <th scope="col" className="p-4">
                <SVG id="star" />
              </th>
              <th scope="col" className="px-6 py-3">
                Asset
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Total Volume
              </th>
              <th scope="col" className="px-6 py-3">
                Market Cap Change
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              className={`border-b cursor-pointer ${
                theme ? "hover:bg-gray-200" : "hover:bg-gray-700"
              }`}
            >
              <td className="p-4 w-4">
                <SVG id="star" />
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-normal whitespace-nowrap"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
            <tr
              className={`border-b cursor-pointer ${
                theme ? "hover:bg-gray-200" : "hover:bg-gray-700"
              }`}
            >
              <td className="p-4 w-4">
                <SVG id="star" />
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-normal whitespace-nowrap"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
            <tr
              className={`border-b cursor-pointer ${
                theme ? "hover:bg-gray-200" : "hover:bg-gray-700"
              }`}
            >
              <td className="p-4 w-4">
                <SVG id="star" />
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-normal whitespace-nowrap"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
            <tr
              className={`border-b cursor-pointer ${
                theme ? "hover:bg-gray-200" : "hover:bg-gray-700"
              }`}
            >
              <td className="p-4 w-4">
                <SVG id="star" />
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-normal whitespace-nowrap"
              >
                Apple Watch
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Watches</td>
              <td className="px-6 py-4">$199</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
            <tr
              className={`border-b cursor-pointer ${
                theme ? "hover:bg-gray-200" : "hover:bg-gray-700"
              }`}
            >
              <td className="p-4 w-4">
                <SVG id="star" />
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-normal whitespace-nowrap"
              >
                Apple iMac
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">PC</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
            <tr
              className={`border-b cursor-pointer ${
                theme ? "hover:bg-gray-200" : "hover:bg-gray-700"
              }`}
            >
              <td className="p-4 w-4">
                <SVG id="star" />
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-normal whitespace-nowrap"
              >
                Apple AirPods
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$399</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
            <tr
              className={`border-b cursor-pointer ${
                theme ? "hover:bg-gray-200" : "hover:bg-gray-700"
              }`}
            >
              <td className="p-4 w-4">
                <SVG id="star" />
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-normal whitespace-nowrap"
              >
                iPad Pro
              </th>
              <td className="px-6 py-4">Gold</td>
              <td className="px-6 py-4">Tablet</td>
              <td className="px-6 py-4">$699</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
            <tr
              className={`border-b cursor-pointer ${
                theme ? "hover:bg-gray-200" : "hover:bg-gray-700"
              }`}
            >
              <td className="p-4 w-4">
                <SVG id="star" />
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-normal whitespace-nowrap"
              >
                Magic Keyboard
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
            <tr
              className={`border-b cursor-pointer ${
                theme ? "hover:bg-gray-200" : "hover:bg-gray-700"
              }`}
            >
              <td className="p-4 w-4">
                <SVG id="star" />
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-normal whitespace-nowrap"
              >
                Smart Folio iPad Air
              </th>
              <td className="px-6 py-4">Blue</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$79</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
            <tr
              className={`border-b cursor-pointer ${
                theme ? "hover:bg-gray-200" : "hover:bg-gray-700"
              }`}
            >
              <td className="p-4 w-4">
                <SVG id="star" />
              </td>
              <th
                scope="row"
                className="font-normal px-6 py-4 whitespace-nowrap"
              >
                AirTag
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$29</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
          </tbody>
        </table>
        <nav
          className="flex gap-30px items-center justify-between pl-3.5 pt-4 w-full"
          aria-label="Table navigation"
        >
          <span className="text-sm">
            Showing <span className="font-bold">1-10</span> of{" "}
            <span className="font-bold"> 1000</span>
          </span>
          <div className="flex gap-30px pr-3" aria-hidden>
            <button className="box-content h-10 w-10 active:rotate-360 focus:rotate-360 hover:rotate-360 transform-gpu transform transition-all duration-300">
              <SVG id="left-arrow" width="100%" height="100%" />
            </button>
            <button className="box-content h-10 w-10 active:rotate-360 focus:rotate-360 hover:rotate-360 transform-gpu transform transition-all duration-300">
              <SVG id="right-arrow" width="100%" height="100%" />
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default TokensList;
