import { lazy } from "react";

const DarkModeSwitch = lazy(async () => ({
	default: (await import("react-toggle-dark-mode")).DarkModeSwitch,
}));

function Switcher({ ...rest }) {
	return (
		<>
			<DarkModeSwitch
				size={20}
				fill="#0F1320"
				moonColor="dark"
				sunColor="white"
				{...rest}
			/>
		</>
	);
}

export default Switcher;
