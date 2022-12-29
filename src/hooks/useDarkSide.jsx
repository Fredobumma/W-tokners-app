import { useState, useEffect } from "react";

function useDarkSide() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "bg-dark" ? "bg-light" : "bg-dark";

  useEffect(() => {
    const { classList } = window.document.documentElement;
    classList.remove(colorTheme);
    classList.add(theme);
    classList.remove(
      classList.value.includes("bg-dark") ? "text-dark" : "text-white"
    );
    classList.add(
      classList.value.includes("bg-dark") ? "text-white" : "text-dark"
    );
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}

export default useDarkSide;
