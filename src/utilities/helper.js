import _ from "lodash";

function mapErrorTo(str) {
  str = str || "An unknown error occurred";
  return _.capitalize(str.replace("auth/", "").replaceAll("-", " "));
}

function clearNotify(obj, setState) {
  setTimeout(() => {
    delete obj.errors.generic;
    delete obj.errors.success;

    setState({ ...obj });
  }, 3000);
  clearTimeout();
}

export { mapErrorTo, clearNotify };
