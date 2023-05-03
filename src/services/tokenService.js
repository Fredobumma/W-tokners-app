import axios from "axios";

const {
  REACT_APP_TOKENS_API_URL,
  REACT_APP_TOKENS_API_KEY,
  REACT_APP_TOKENS_API_HOST,
} = process.env;

const options = {
  method: "GET",
  url: REACT_APP_TOKENS_API_URL,
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
  },
  headers: {
    "X-RapidAPI-Key": REACT_APP_TOKENS_API_KEY,
    "X-RapidAPI-Host": REACT_APP_TOKENS_API_HOST,
  },
};

function getTokens() {
  const { params } = options;
  params.timePeriod = "24h";
  params["tiers[0]"] = "1";
  params.orderBy = "marketCap";
  params.orderDirection = "desc";
  params.limit = "100";
  params.offset = "0";

  return axios.request(options);
}

function getToken(tokenRef) {
  const { url, params } = options;
  options.url = url.replace("/coins", `/coin/${tokenRef}`);
  params.timePeriod = "24h";

  console.log("here", options.url);
  return axios.request(options);
}

function getTokenOHLC(tokenRef) {
  const { url, params } = options;
  options.url = url.replace("/coins", `/coin/${tokenRef}/ohlc`);
  params.interval = "day";

  return axios.request(options);
}

export { getTokens, getToken, getTokenOHLC };
