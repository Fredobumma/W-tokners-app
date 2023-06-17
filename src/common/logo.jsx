import { NavLink } from "react-router-dom";
import { SVG } from "./svg";

const Logo = ({ extraClasses }) => {
  return (
    <NavLink to="/" className={`max-h-[33px] max-w-[207px] ${extraClasses}`}>
      <SVG id="namedLogo" height="100%" width="100%" />
    </NavLink>
  );
};

export default Logo;
