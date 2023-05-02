import { NavLink } from "react-router-dom";

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

const NavButton = ({ label, extraStyles, ...rest }) => {
  return (
    <NavLink
      {...rest}
      className={`inline-block cursor-pointer font-bold rounded-[52px] text-sm ${extraStyles}`}
    >
      {label}
    </NavLink>
  );
};

export default Button;
export { NavButton };
