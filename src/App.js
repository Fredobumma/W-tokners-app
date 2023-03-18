import React, { useState } from "react";
import useDarkSide from "./hooks/useDarkSide";
// import useWindowDimensions from "./hooks/useWindowDimensions";
import GuestHome from "./page-components/guestHome";
import UsersHome from "./page-components/usersHome";
import MenuBackDrop from "./common/block-components/menuBackDrop";
import Switcher from "./common/switcher";

function App() {
  // const { width } = useWindowDimensions();
  const [menu, setMenu] = useState(false);
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "bg-light" ? false : true
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
        <center>
          <Switcher checked={darkSide} onChange={toggleDarkMode} />
        </center>
        <GuestHome theme={getTheme} menu={menu} toggleMenu={toggleMenu} />
        <UsersHome theme={getTheme} menu={menu} toggleMenu={toggleMenu} />
        <MenuBackDrop menu={menu} toggleMenu={toggleMenu} />
      </main>
    </React.Fragment>
  );
}

export default App;
