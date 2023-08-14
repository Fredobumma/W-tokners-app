import { httpRequest } from "./httpService";

const {
	REACT_APP_TOKENS_API_KEY,
	REACT_APP_TOKENS_API_HOST,
	REACT_APP_CONVERTER_API_HOST,
} = process.env;

const tokensOptions = {
	method: "GET",
	url: `https://${REACT_APP_TOKENS_API_HOST}`,
	params: {
		referenceCurrencyUuid: "yhjMzLPhuIDl",
	},
	headers: {
		"X-RapidAPI-Key": REACT_APP_TOKENS_API_KEY,
		"X-RapidAPI-Host": REACT_APP_TOKENS_API_HOST,
	},
};

const currencyOptions = {
	method: "GET",
	url: `https://${REACT_APP_CONVERTER_API_HOST}/convert`,
	params: {
		from: "USD",
	},
	headers: {
		"X-RapidAPI-Key": REACT_APP_TOKENS_API_KEY,
		"X-RapidAPI-Host": REACT_APP_CONVERTER_API_HOST,
	},
};

const { params: tokensParams, url } = tokensOptions;
const { params: currencyParams } = currencyOptions;

function getTokens() {
	const obj = {
		url: `${url}/coins`,
		params: {
			...tokensParams,
			timePeriod: "24h",
			"tiers[0]": "1",
			orderBy: "marketCap",
			orderDirection: "desc",
			limit: "100",
			offset: "0",
		},
	};

	return httpRequest({ ...tokensOptions, ...obj });
}

function getToken(tokenRef) {
	const obj = {
		url: `${url}/coin/${tokenRef}`,
		params: {
			...tokensParams,
			timePeriod: "24h",
		},
	};

	return httpRequest({ ...tokensOptions, ...obj });
}

function getTokenOHLC(tokenRef) {
	const obj = {
		url: `${url}/coin/${tokenRef}/ohlc`,
		params: {
			...tokensParams,
			interval: "day",
		},
	};

	return httpRequest({ ...tokensOptions, ...obj });
}

async function convert(currency) {
	const paramsObj = {
		...currencyParams,
		to: currency.toUpperCase(),
		amount: 1,
	};

	const { data } = await httpRequest({
		...currencyOptions,
		params: paramsObj,
	});
	return data?.meta?.rates.from || 0;
}

export { getTokens, getToken, getTokenOHLC, convert };
