import { useContext, useEffect, useRef, useState } from "react";
import { getTokens } from "../../services/tokenService";
import { convert } from "../../services/currencyService";
import ThemeContext from "../../context/themeContext";
import { paginate } from "../../utilities/paginate";
import { match, numberFormat } from "../../utilities/helpers";
import { SVG } from "../svg";

const TokensList = () => {
  const [{ currency, pageSize, currentPage, searchQuery, usdRate }, setState] =
    useState({
      currency: "usd",
      pageSize: 10,
      currentPage: 1,
      searchQuery: "",
      usdRate: 1,
    });
  const [tokens, setTokens] = useState([]);
  const { theme } = useContext(ThemeContext);
  const currencyRef = useRef(null);

  const filtered = tokens.filter(
    (t) => match(t.name, searchQuery) || match(t.symbol, searchQuery)
  );
  const showingTokens = paginate(filtered, currentPage, pageSize);
  const pageCount = Math.ceil(filtered.length / pageSize);
  const start = showingTokens.length ? (currentPage - 1) * pageSize + 1 : 0;
  const end = (currentPage - 1) * pageSize + showingTokens.length;

  const handleSearch = (e) => {
    setState((prev) => ({
      ...prev,
      currentPage: 1,
      searchQuery: e.target.value,
    }));
  };

  const handleCurrencyChange = (e) => {
    e.preventDefault();
    const currency = currencyRef.current.value;

    setState((prev) => ({ ...prev, currency }));
  };

  const handlePageChange = (page) => {
    if (page > pageCount || page < 1) return;

    setState((prev) => ({ ...prev, currentPage: page }));
  };

  useEffect(() => {
    const tokensData = async () => {
      try {
        const { data } = await getTokens();
        const usdRate = await convert(currency);
        const tokens = data?.data.coins;

        setTokens([...tokens]);
        setState((prev) => ({ ...prev, usdRate }));
      } catch (error) {
        console.log(error.message);
      }
    };

    // const tokenData = async () => {
    //   try {
    //     const data = await getToken("Qwsogvtv82FCd");
    //     const tokens = data?.data.coins;
    //     setTokens([...tokens]);
    //   } catch (error) {
    //     console.error(error.message);
    //   }
    // };

    tokensData();
    // tokenData();
  }, [currency]);

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
              className={`bg-transparent border-b-2 font-bold max-w-[60px] outline-0 pl-1 placeholder:font-normal ${
                theme
                  ? "border-dark text-dark placeholder:text-gray-500"
                  : "border-light text-light"
              }`}
              maxLength="3"
            />
            <button className="rotate-90" onClick={handleCurrencyChange}>
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
          <button className="mr-2 hover:scale-110 laptop:mr-0 transform-gpu transform transition-all duration-300">
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
                24h Volume
              </th>
              <th scope="col" className="px-6 py-3">
                Market Cap
              </th>
            </tr>
          </thead>
          <tbody>
            {showingTokens.map((token, i) => (
              <tr
                key={i}
                className={`border-b cursor-pointer ${
                  theme ? "hover:bg-gray-200" : "hover:bg-gray-700"
                }`}
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
                <td style={{ color: token.color }} className="px-6 py-4">
                  {token.name}
                </td>
                <td className="px-6 py-4">
                  {numberFormat(token.price * usdRate, currency)}
                </td>
                <td className="px-6 py-4">
                  {numberFormat(token["24hVolume"] * usdRate, currency)}
                </td>
                <td className="px-6 py-4">
                  {numberFormat(token.marketCap * usdRate, currency)}
                </td>
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
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`box-content h-10 w-10 active:rotate-360 focus:rotate-360 hover:rotate-360 transform-gpu transform transition-all duration-300 ${
                currentPage <= 1 && "cursor-not-allowed opacity-30"
              }`}
            >
              <SVG id="left-arrow" width="100%" height="100%" />
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`box-content h-10 w-10 active:rotate-360 focus:rotate-360 hover:rotate-360 transform-gpu transform transition-all duration-300 ${
                currentPage >= pageCount && "cursor-not-allowed opacity-30"
              }`}
            >
              <SVG id="right-arrow" width="100%" height="100%" />
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default TokensList;
