import { useContext, useRef } from "react";
import ThemeContext from "../context/themeContext";

const Input = ({ ...rest }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <input
        {...rest}
        className={`font-bold bg-transparent h-10 pl-2 w-full placeholder:font-normal focus:outline-none ${
          theme ? "text-light" : "text-dark placeholder:text-gray-500"
        }`}
      />
    </>
  );
};

export const SecondaryInput = ({ label, id, ...rest }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...rest}
        className={`border-b-2 font-bold bg-transparent h-10 px-2 text-sm placeholder:font-normal focus:outline-none tab:w-3/4 ${
          theme
            ? "border-light text-light"
            : "border-dark text-dark placeholder:text-gray-500"
        }`}
      />
    </>
  );
};

export const DateInput = ({ label, id, ...rest }) => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef();

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        ref={ref}
        id={id}
        {...rest}
        onFocus={() => (ref.current.type = "date")}
        onBlur={() => (ref.current.type = "text")}
        className={`bg-white border-b-2 font-bold h-10 placeholder:font-normal px-2 text-dark text-sm w-full tab:w-3/4 focus:outline-none ${
          theme ? "border-light" : "border-dark placeholder:text-gray-500"
        }`}
      />
    </>
  );
};

export default Input;
