import { useState, useEffect } from "react";

function useDarkSide() {
	const [theme, setTheme] = useState(localStorage.theme);
	const colorTheme = theme === "dark" ? "light" : "dark";

	useEffect(() => {
		const { classList } = window.document.documentElement;
		classList.remove(colorTheme);
		classList.add(theme);
		localStorage.setItem("theme", theme);
	}, [theme, colorTheme]);

	return [colorTheme, setTheme];
}

export default useDarkSide;
