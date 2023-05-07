import _ from "lodash";

function mapErrorTo(str) {
  str = str || "An unknown error occurred";
  return _.capitalize(str.replace("auth/", "").replaceAll("-", " "));
}

function clearNotify(obj, setState) {
  setTimeout(() => {
    delete obj.errors.generic;
    delete obj.success;

    setState({ ...obj });
  }, 3000);
  clearTimeout();
}

function numberFormat(amount, currency) {
  amount = String(twoDecimals(amount));
  const digits = amount.length > 8 && amount[1] !== "." ? 0 : 10;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: digits,
  }).format(amount);
}

function twoDecimals(n) {
  const log10 = n ? Math.floor(Math.log10(n)) : 0,
    div = log10 < 0 ? Math.pow(10, 1 - log10) : 100;

  return Math.round(n * div) / div;
}

function match(value, query) {
  value = value.toUpperCase();
  query = query.toUpperCase();
  return value.startsWith(query) || value.includes(query);
}

export { mapErrorTo, clearNotify, numberFormat, match };
