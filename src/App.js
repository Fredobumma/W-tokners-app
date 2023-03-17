import React, { useState } from "react";
import Home from "./page-components/home";
import useDarkSide from "./hooks/useDarkSide";
import useWindowDimensions from "./hooks/useWindowDimensions";
import MenuBackDrop from "./common/block-components/menuBackDrop";

function App() {
  const { width } = useWindowDimensions();
  const [colorTheme, setTheme] = useDarkSide();
  const [menu, setMenu] = useState(false);
  const [darkSide, setDarkSide] = useState(
    colorTheme === "bg-light" ? true : false
  );
  const getTheme = colorTheme === "bg-dark";

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  const toggleMenu = () => setMenu(!menu);

  return (
    <React.Fragment>
      <main className={`mx-auto h-screen ${menu && "relative"} laptop:static`}>
        <Home
          screenWidth={width}
          theme={getTheme}
          menu={menu}
          checked={darkSide}
          toggleMenu={toggleMenu}
          onChange={toggleDarkMode}
        />
        <MenuBackDrop menu={menu} toggleMenu={toggleMenu} />
      </main>
    </React.Fragment>
  );
}

export default App;
