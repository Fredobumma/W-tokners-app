import { useEffect, useRef, useState } from "react";
import { convert, getTokens } from "../services/tokenService";
import logger from "../services/logService";
import TokensContext from "./../context/tokensContext";
import Loader from "../common/block-components/loader";
import TokensList from "../common/block-components/block-tokensList";
import { mapErrorTo, match, paginate, sort } from "../utilities/helpers";

const Tokens = () => {
  const [
    {
      searchQuery,
      currency,
      usdRate,
      sortColumn,
      pageSize,
      currentPage,
      error,
    },
    setState,
  ] = useState({
    searchQuery: "",
    currency: "usd",
    usdRate: 1,
    sortColumn: "marketCap desc",
    pageSize: 10,
    currentPage: 1,
    error: "",
  });
  const [tokens, setTokens] = useState([]);
  const [loader, setLoader] = useState(true);

  const searchRef = useRef(null);
  const currencyRef = useRef(null);
  const sortRef = useRef(null);

  const filtered = tokens.filter(
    (t) => match(t.name, searchQuery) || match(t.symbol, searchQuery)
  );
  const sorted = sort(filtered, sortColumn);
  const visibleTokens = paginate(sorted, currentPage, pageSize);
  const pageCount = Math.ceil(filtered.length / pageSize);
  const start = (currentPage - 1) * (pageSize + 1);
  const end = (currentPage - 1) * pageSize + visibleTokens.length;

  const handleSearch = (e) => {
    setState((prev) => ({
      ...prev,
      currentPage: 1,
      searchQuery: e.target.value,
    }));
  };

  const handleSort = (e) => {
    setState((prev) => ({ ...prev, sortColumn: e.target.value }));
  };

  const handleCurrencyChange = (e) => {
    e.preventDefault();

    setState((prev) => ({ ...prev, currency: currencyRef.current.value }));
  };

  const handlePageChange = (page) => {
    if (page > pageCount || page < 1) return;

    setState((prev) => ({ ...prev, currentPage: page }));
  };

  const handleReset = (e) => {
    e.preventDefault();

    const currency = "usd",
      searchQuery = "",
      sortColumn = "marketCap desc";
    const inputs = [searchRef, currencyRef, sortRef];
    inputs.forEach(
      (el, i) => (el.current.value = i === 2 ? "marketCap desc" : "")
    );

    setState((prev) => ({ ...prev, searchQuery, currency, sortColumn }));
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
        setState((prev) => ({ ...prev, error: mapErrorTo(error.message) }));
        logger.log(error);

        setTimeout(() => setState((prev) => ({ ...prev, error: "" })), 3000);
        clearTimeout();
      }

      setLoader(false);
    };

    tokensData();
  }, [currency]);

  return (
    <TokensContext.Provider
      value={{
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
      }}
    >
      {loader && <Loader />}
      <TokensList />
    </TokensContext.Provider>
  );
};

export default Tokens;
