import React, { useContext } from "react";
import ThemeContext from "../context/themeContext";

const Input = ({ autoComplete, id, name, type, placeholder, autoFocus }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <input
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`font-bold bg-transparent h-10 w-full placeholder:font-normal focus:outline-none ${
          theme ? "text-light" : "text-dark placeholder:text-gray-500"
        }`}
      />
    </>
  );
};

export const SecondaryInput = ({
  label,
  autoComplete,
  id,
  name,
  type,
  placeholder,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        autoComplete={autoComplete}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`border-b-2 font-bold bg-transparent h-10 px-2 text-sm placeholder:font-normal focus:outline-none tab:w-3/4 ${
          theme
            ? "border-light text-light"
            : "border-dark text-dark placeholder:text-gray-500"
        }`}
      />
    </>
  );
};

export const DateInput = ({
  label,
  autoComplete,
  id,
  name,
  type,
  placeholder,
  extraClasses,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        autoComplete={autoComplete}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`border-b-2 h-10 px-2 text-sm w-full tab:w-3/4 ${
          theme ? "border-light" : "border-dark"
        } ${extraClasses}`}
      />
    </>
  );
};

export default Input;
