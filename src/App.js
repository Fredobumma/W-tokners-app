import React, { useState } from "react";
import Home from "./page-components/home";
import useDarkSide from "./hooks/useDarkSide";

function App() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "bg-light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <React.Fragment>
      <main>
        <Home checked={darkSide} onChange={toggleDarkMode} />
      </main>
    </React.Fragment>
  );
}

export default App;
