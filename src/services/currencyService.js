import axios from "axios";

const { REACT_APP_TOKENS_API_KEY, REACT_APP_CONVERTER_API_URL } = process.env;
const options = {
  method: "GET",
  url: `https://${REACT_APP_CONVERTER_API_URL}/convert`,
  params: {
    from: "USD",
  },
  headers: {
    "X-RapidAPI-Key": REACT_APP_TOKENS_API_KEY,
    "X-RapidAPI-Host": REACT_APP_CONVERTER_API_URL,
  },
};

async function convert(currency) {
  const { params } = options;
  const obj = {
    ...params,
    to: currency.toUpperCase(),
    amount: 1,
  };

  const { data } = await axios.request({ ...options, params: obj });
  return data?.meta?.rates.from;
}

export { convert };
