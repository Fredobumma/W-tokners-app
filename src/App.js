import React, { useState } from "react";
import Home from "./page-components/home";
import useDarkSide from "./hooks/useDarkSide";
import useWindowDimensions from "./hooks/useWindowDimensions";

function App() {
  const { width } = useWindowDimensions();
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "bg-light" ? true : false
  );
  const getTheme = colorTheme === "bg-dark";

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <React.Fragment>
      <main className="mx-auto">
        <Home
          screenWidth={width}
          theme={getTheme}
          checked={darkSide}
          onChange={toggleDarkMode}
        />
      </main>
    </React.Fragment>
  );
}

export default App;
