import { useContext } from "react";
import ThemeContext from "../context/themeContext";

const SelectOptions = ({ label, id, autoComplete, ...rest }) => {
  const { theme } = useContext(ThemeContext);
  const options = Object.values(rest);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        autoComplete={autoComplete}
        className={`border-b-2 bg-transparent h-10 px-2 text-sm w-full tab:w-3/4 ${
          theme ? "border-light" : "border-dark"
        }`}
      >
        {options.map(({ value, content }, i) => (
          <option value={value} key={i} className="text-dark">
            {content || value}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectOptions;
