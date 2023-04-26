export const mapToState = (obj) => {
  for (let key in obj) obj[key] = obj[key].stringValue;
  return obj;
};
