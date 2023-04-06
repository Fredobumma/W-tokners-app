import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useDarkSide from "./hooks/useDarkSide";
// import useWindowDimensions from "./hooks/useWindowDimensions";
import { SVGSource } from "./common/svg";
import Navbar from "./common/block-components/navbar";
import GuestHome from "./page-components/guestHome";
import UsersHome from "./page-components/usersHome";
import Team from "./page-components/team";
import Tokens from "./page-components/tokens";
import JoinWhitelist from "./page-components/joinWhitelist";
import Register from "./page-components/register";
import Login from "./page-components/login";
import Profile from "./page-components/profile";
import RecoverPassword from "./page-components/recoverPassword";
import SavedTokens from "./common/block-components/block-savedTokens";
import TokenDetails from "./common/block-components/block-token-details";
import MenuBackDrop from "./common/block-components/menuBackDrop";
import Footer from "./common/block-components/block-footer";

function App() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "bg-light" ? false : true
  );
  const getTheme = colorTheme === "bg-dark";
  // const { width } = useWindowDimensions();
  const [menu, setMenu] = useState(false);
  const [collapseInfo, setCollapseInfo] = useState(true);

  // <===== SWITCH THEME =====>
  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  // <===== TOGGLE MENU =====>
  const toggleMenu = () => {
    const { classList } = window.document.documentElement;
    classList.toggle("overflow-y-hidden");
    setMenu(!menu);
  };

  const toggleInfo = () => {
    setCollapseInfo(!collapseInfo);
  };

  // <===== ROUTING IMPLEMENTATION =====>
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <GuestHome
          theme={getTheme}
          collapseInfo={collapseInfo}
          toggleInfo={toggleInfo}
        />
      ) || <UsersHome theme={getTheme} />,
    },
    { path: "/team", element: <Team theme={getTheme} /> },
    {
      path: "/tokens",
      children: [
        {
          index: true,
          element: <Tokens theme={getTheme} />,
        },
        {
          path: "saved",
          element: <SavedTokens theme={getTheme} />,
          children: [
            { path: ":tokenId", element: <TokenDetails theme={getTheme} /> },
          ],
        },
        { path: ":tokenId", element: <TokenDetails theme={getTheme} /> },
      ],
    },
    { path: "/join-whitelist", element: <JoinWhitelist theme={getTheme} /> },
    { path: "/register", element: <Register theme={getTheme} /> },
    { path: "/login", element: <Login theme={getTheme} /> },
    { path: "/profile", element: <Profile theme={getTheme} /> },
    {
      path: "/recover-password",
      element: <RecoverPassword theme={getTheme} />,
    },
  ]);

  return (
    <React.Fragment>
      <SVGSource />
      <Navbar
        menu={menu}
        theme={getTheme}
        checked={darkSide}
        toggleMenu={toggleMenu}
        toggleMode={toggleDarkMode}
      />
      <main className="relative">
        <RouterProvider router={router} />
        <Footer
          theme={getTheme}
          checked={darkSide}
          toggleMode={toggleDarkMode}
        />
        <MenuBackDrop menu={menu} toggleMenu={toggleMenu} />
      </main>
    </React.Fragment>
  );
}

export default App;
