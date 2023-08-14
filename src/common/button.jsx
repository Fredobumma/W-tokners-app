import { NavLink } from "react-router-dom";

const Button = ({ label, extraStyles, ...rest }) => {
	return (
		<button
			{...rest}
			className={`active:scale-105 bg-secondary drop-shadow-button focus:scale-105 font-bold hover:scale-105 mt-3 px-30px py-3.5 rounded-[52px] text-sm text-white transform transition-all duration-300 ${extraStyles}`}
		>
			{label}
		</button>
	);
};

const NavButton = ({ label, extraStyles, children, ...rest }) => {
	return (
		<NavLink
			{...rest}
			className={`active:bg-secondary active:text-white bg-transparent focus:bg-secondary focus:text-white hover:bg-secondary hover:text-white font-bold inline-block rounded-[52px] text-sm transform transition-all duration-300 ${extraStyles}`}
		>
			{label}
			{children}
		</NavLink>
	);
};

export default Button;
export { NavButton };
