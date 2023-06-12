import { useRef } from "react";

const Input = ({ ...rest }) => {
  return (
    <>
      <input
        {...rest}
        className="font-bold bg-transparent h-10 pl-2 text-light w-full placeholder:font-normal focus:outline-none dark:text-dark dark:placeholder:text-gray-500"
      />
    </>
  );
};

export const SecondaryInput = ({ label, id, ...rest }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...rest}
        className="border-b-2 border-light font-bold bg-transparent h-10 px-2 text-light text-sm placeholder:font-normal focus:outline-none tab:w-3/4 dark:border-dark dark:text-dark dark:placeholder:text-gray-500"
      />
    </>
  );
};

export const DateInput = ({ label, id, ...rest }) => {
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
        className="bg-white border-b-2 border-light font-bold h-10 placeholder:font-normal px-2 text-dark text-sm w-full tab:w-3/4 focus:outline-none dark:border-dark dark:placeholder:text-gray-500"
      />
    </>
  );
};

export default Input;
