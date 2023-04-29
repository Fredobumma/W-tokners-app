import _ from "lodash";

function mapErrorTo(str) {
  str = str || "An unknown error occurred";
  return _.capitalize(str.replace("auth/", "").replaceAll("-", " "));
}

function clearError(obj, setState) {
  setTimeout(() => {
    delete obj.errors.generic;
    setState({ ...obj });
  }, 3000);
  clearTimeout();
}

export { mapErrorTo, clearError };
