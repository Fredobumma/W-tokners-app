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

function numberFormat(num, currency) {
  const digits = num.length > 5 && !num.includes(".") ? 0 : 2;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency || "usd",
    minimumFractionDigits: digits,
    maximumFractionDigits: 10,
  }).format(num);
}

function twoDecimals(n) {
  const log10 = n ? Math.floor(Math.log10(n)) : 0,
    div = log10 < 0 ? Math.pow(10, 1 - log10) : 100;

  return Math.round(n * div) / div;
}

export { mapErrorTo, clearNotify, numberFormat, twoDecimals };
