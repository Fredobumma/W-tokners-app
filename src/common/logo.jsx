import { lazy } from "react";
import { NavLink } from "react-router-dom";

const SVG = lazy(() => import("./assets/svgs/allSvg"));

const Logo = ({ extraClasses, ...rest }) => {
	return (
		<NavLink
			aria-label="Logo"
			to="/"
			className={`max-h-[33px] max-w-[207px] ${extraClasses}`}
			{...rest}
		>
			<SVG id="namedLogo" height="100%" width="100%" />
		</NavLink>
	);
};

export default Logo;
