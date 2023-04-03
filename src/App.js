import React, { useState } from "react";
import useDarkSide from "./hooks/useDarkSide";
// import useWindowDimensions from "./hooks/useWindowDimensions";
import Switcher from "./common/switcher";
import GuestHome from "./page-components/guestHome";
import UsersHome from "./page-components/usersHome";
import Team from "./page-components/team";
import Register from "./page-components/register";
import Login from "./page-components/login";
import Profile from "./page-components/profile";
// import RecoverPassword from "./page-components/recoverPassword";
import MenuBackDrop from "./common/block-components/menuBackDrop";
import Tokens from "./page-components/tokens";

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
        <Team theme={getTheme} />
        <Register theme={getTheme} />
        <Login theme={getTheme} />
        <Profile theme={getTheme} />
        {/* <RecoverPassword theme={getTheme} /> */}
        <Tokens theme={getTheme} />
        <MenuBackDrop menu={menu} toggleMenu={toggleMenu} />
      </main>
    </React.Fragment>
  );
}

export default App;
