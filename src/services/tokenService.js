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
const { params, url } = options;

function getTokens() {
  const obj = {
    url: `${url}/coins`,
    params: {
      ...params,
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "100",
      offset: "0",
    },
  };

  return axios.request({ ...options, ...obj });
}

function getToken(tokenRef) {
  const obj = {
    url: `${url}/coin/${tokenRef}`,
    params: {
      ...params,
      timePeriod: "24h",
    },
  };

  return axios.request({ ...options, ...obj });
}

function getTokenOHLC(tokenRef) {
  const obj = {
    url: `${url}/coin/${tokenRef}/ohlc`,
    params: {
      ...params,
      interval: "day",
    },
  };

  return axios.request({ ...options, ...obj });
}

export { getTokens, getToken, getTokenOHLC };
