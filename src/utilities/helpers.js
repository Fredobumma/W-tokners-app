import _ from "lodash";

const capitalize = (str) => _.capitalize(str);

function mapErrorTo(str) {
  str = str || "An unknown error occurred";
  return capitalize(str.replace("auth/", "").replaceAll("-", " "));
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
  const digits = !amount.includes(".") ? 0 : 20;

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

function sort(items, column) {
  const path = column.substring(0, column.lastIndexOf(" "));
  const order = column.includes("desc") ? "desc" : "asc";
  return _.orderBy(items, (el) => (path === "name" ? el[path] : +el[path]), [
    order,
  ]);
}

function paginate(items, currentPage, pageSize) {
  const startNumber = (currentPage - 1) * pageSize;

  return items.slice(startNumber, startNumber + pageSize);
}

export {
  mapErrorTo,
  clearNotify,
  numberFormat,
  match,
  sort,
  paginate,
  capitalize,
};
