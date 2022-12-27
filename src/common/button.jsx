import React from "react";

const Button = ({ label, extraStyles }) => {
  return (
    <button
      className={`font-bold rounded-[52px] text-sm text-white ${extraStyles}`}
    >
      {label}
    </button>
  );
};

export default Button;
