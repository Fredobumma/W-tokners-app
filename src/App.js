import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useDarkSide from "./hooks/useDarkSide";
// import useWindowDimensions from "./hooks/useWindowDimensions";
import Switcher from "./common/switcher";
import GuestHome from "./page-components/guestHome";
import UsersHome from "./page-components/usersHome";
import Team from "./page-components/team";
import Tokens from "./page-components/tokens";
import JoinWhitelist from "./page-components/joinWhitelist";
import Register from "./page-components/register";
import Login from "./page-components/login";
import Profile from "./page-components/profile";
import RecoverPassword from "./page-components/recoverPassword";
import TokensList from "./common/block-components/block-tokensList";
import SavedTokens from "./common/block-components/block-savedTokens";
import TokenDetails from "./common/block-components/block-token-details";
import MenuBackDrop from "./common/block-components/menuBackDrop";

function App() {
  // const { width } = useWindowDimensions();
  const [menu, setMenu] = useState(false);
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "bg-light" ? false : true
  );
  // const getTheme = colorTheme === "bg-dark";

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  const toggleMenu = () => setMenu(!menu);

  // ROUTING
  // TODO: here
  const router = createBrowserRouter([
    { path: "/", element: <GuestHome /> || <UsersHome /> },
    { path: "/team", element: <Team /> },
    {
      path: "/tokens",
      element: <Tokens />,
      children: [
        {
          path: "/tokens",
          element: <TokensList />,
          children: [{ path: ":tokenId", element: <TokenDetails /> }],
        },
        {
          path: "/tokens/saved",
          element: <SavedTokens />,
          children: [{ path: ":tokenId", element: <TokenDetails /> }],
        },
      ],
    },
    { path: "/join-whitelist", element: <JoinWhitelist /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/profile", element: <Profile /> },
    { path: "/recover-password", element: <RecoverPassword /> },
  ]);

  return (
    <React.Fragment>
      <main className={`mx-auto h-screen ${menu && "relative"} laptop:static`}>
        <RouterProvider router={router} />
        <center>
          <Switcher checked={darkSide} onChange={toggleDarkMode} />
        </center>
        {/* <GuestHome theme={getTheme} menu={menu} toggleMenu={toggleMenu} /> */}
        {/* <UsersHome theme={getTheme} menu={menu} toggleMenu={toggleMenu} /> */}
        {/* <JoinWhitelist theme={getTheme} /> */}
        {/* <Team theme={getTheme} /> */}
        {/* <Register theme={getTheme} /> */}
        {/* <Login theme={getTheme} /> */}
        {/* <Profile theme={getTheme} /> */}
        {/* <RecoverPassword theme={getTheme} /> */}
        {/* <Tokens theme={getTheme} /> */}
        <MenuBackDrop menu={menu} toggleMenu={toggleMenu} />
      </main>
    </React.Fragment>
  );
}

export default App;
