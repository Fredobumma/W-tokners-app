import { useContext } from "react";
import TokensContext from "../../context/tokensContext";
import { SVG } from "../svg";
import { numberFormat } from "../../utilities/helpers";

const TokensList = () => {
  const {
    state: { usdRate, currency, currentPage, error },
    keyProps: {
      searchRef,
      currencyRef,
      sortRef,
      visibleTokens,
      filtered,
      pageCount,
      start,
      end,
    },
    handlerMethods: {
      handleSearch,
      handleSort,
      handleCurrencyChange,
      handlePageChange,
      handleReset,
    },
  } = useContext(TokensContext);

  const sortValues = [
    { content: "Market Cap desc", value: "marketCap desc" },
    { content: "Market Cap asc", value: "marketCap asc" },
    { content: "Volume desc", value: "24hVolume desc" },
    { content: "Volume asc", value: "24hVolume asc" },
    { content: "Price desc", value: "price desc" },
    { content: "Price asc", value: "price asc" },
    { content: "Asset Name desc", value: "name desc" },
    { content: "Asset Name asc", value: "name asc" },
  ];

  const tableHeadings = [
    <SVG key="0" id="star" />,
    "Asset",
    "Name",
    "Price",
    "24h Volume",
    "Market Cap",
  ];

  const tableData = ["name", "price", "24hVolume", "marketCap"];

  const buttons = [
    { id: "left", condition: currentPage <= 1, dir: -1 },
    { id: "right", condition: currentPage >= pageCount, dir: 1 },
  ];

  return (
    <section className="py-10 relative tab:py-60px laptop:pb-0 laptop:pt-20">
      <div className="absolute bg-aside blur-[100px] h-full rotate-[15deg] w-full -z-20 tab:left-1/3 laptop:left-[60%] dark:bg-darkAside"></div>
      <form className="flex flex-col gap-5 px-5 py-5 bigTab:px-10 laptop:flex-row laptop:gap-50px laptop:items-center laptop:justify-between laptop:py-30px laptop:px-30px desktop:gap-24 desktop:px-60px">
        {error && <span className="text-center text-red text-xs">{error}</span>}
        <div className="flex border-b-2 border-dark items-center py-1 px-2 laptop:w-1/3 dark:border-light">
          <input
            ref={searchRef}
            type="search"
            id="search-coins"
            placeholder="search here..."
            className="bg-transparent font-bold mr-3 outline-none text-dark w-full placeholder:font-normal placeholder:text-gray-500 dark:text-light"
            onChange={handleSearch}
          />
          <button onClick={(e) => e.preventDefault()}>
            <SVG id="search-icon" />
          </button>
        </div>
        <div className="flex flex-wrap gap-5 items-center justify-between tab:flex-nowrap tab:gap-50px laptop:grow laptop:mt-1">
          <div className="flex gap-3 grow tab:grow-0">
            <label htmlFor="search-currency">Currency:</label>
            <input
              ref={currencyRef}
              type="search"
              name="search-currency"
              id="search-currency"
              placeholder={currency}
              className="bg-transparent border-b-2 border-dark font-bold max-w-[60px] outline-0 pl-1 text-dark placeholder:font-normal placeholder:text-gray-500 dark:border-light dark:text-light"
              maxLength="3"
            />
            <button className="rotate-90" onClick={handleCurrencyChange}>
              <SVG id="submit-icon" />
            </button>
          </div>
          <div className="flex gap-3 order-2 w-full tab:order-none bigTab:max-w-400">
            <label htmlFor="sort-by">Sort by:</label>
            <span className="bg-gray-200 flex flex-1 items-center px-3 rounded-all dark:bg-gray-700">
              <select
                ref={sortRef}
                id="sort-by"
                name="sort-by"
                className=" appearance-none bg-transparent capitalize flex-1 leading-4 py-1.5 text-xs focus:outline-0"
                onChange={handleSort}
              >
                {sortValues.map(({ content, value }, index) => (
                  <option key={index} className="text-dark" value={value}>
                    {content}
                  </option>
                ))}
              </select>
              <span className="-ml-5 pointer-events-none">
                <SVG id="select-icon" />
              </span>
            </span>
          </div>
          <button
            onClick={handleReset}
            className="mr-2 hover:scale-110 laptop:mr-0 transform-gpu transform transition-all duration-300"
          >
            <SVG id="reset" />
          </button>
        </div>
      </form>
      <div className="border-t mt-5 overflow-x-auto pb-5 pt-5 rounded-all scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded-all shadow-xl">
        <table className="text-left text-sm w-full">
          <thead className="text-xs uppercase">
            <tr className="border-b">
              {tableHeadings.map((thead, index) => (
                <th
                  key={index}
                  scope="col"
                  className={index ? "px-6 py-3" : "p-4"}
                >
                  {thead}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleTokens.map((token, i) => (
              <tr
                key={i}
                className="border-b cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <td className="p-4 w-4">
                  <SVG id="star" />
                </td>
                <th
                  scope="row"
                  style={{ backgroundColor: token.color }}
                  className="px-6 py-4 font-normal whitespace-nowrap"
                >
                  {token.symbol}
                </th>
                {tableData.map((data, index) => (
                  <td
                    key={index}
                    style={{ color: data === "name" && token.color }}
                    className="px-6 py-4"
                  >
                    {data === "name"
                      ? token[data]
                      : numberFormat(token[data] * usdRate, currency)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <nav
          className="flex gap-30px items-center justify-between pl-3.5 pt-4 w-full"
          aria-label="Table navigation"
        >
          <span className="text-sm">
            Showing{" "}
            <span className="font-bold">
              {start}-{end}
            </span>{" "}
            of <span className="font-bold">{filtered.length}</span>
          </span>
          <div className="flex gap-30px pr-3" aria-hidden>
            {buttons.map(({ id, condition, dir }, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(currentPage + dir)}
                className={`box-content h-10 w-10 active:rotate-360 focus:rotate-360 hover:rotate-360 transform-gpu transform transition-all duration-300 ${
                  condition && "cursor-not-allowed opacity-30"
                }`}
              >
                <SVG id={`${id}-arrow`} width="100%" height="100%" />
              </button>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default TokensList;
