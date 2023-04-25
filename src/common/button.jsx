import React from "react";

const Button = ({ label, extraStyles, ...rest }) => {
  return (
    <button
      {...rest}
      className={`font-bold rounded-[52px] text-sm ${extraStyles}`}
    >
      {label}
    </button>
  );
};

export default Button;
