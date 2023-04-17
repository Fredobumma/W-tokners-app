"use-client";

import React, { useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ThemeContext from "./context/themeContext";
import useDarkSide from "./hooks/useDarkSide";
// import useWindowDimensions from "./hooks/useWindowDimensions";
import { SVGSource } from "./common/svg";
import Navbar from "./common/block-components/navbar";
import GuestHomePage from "./page-components/guestHomePage";
import UsersHomePage from "./page-components/usersHomePage";
import Team from "./page-components/team";
import Tokens from "./page-components/tokens";
import JoinWhitelist from "./page-components/joinWhitelist";
import Register from "./page-components/register";
import Login from "./page-components/login";
import Profile from "./page-components/profile";
import RecoverPassword from "./page-components/recoverPassword";
import SavedTokens from "./common/block-components/block-savedTokens";
import TokenDetails from "./common/block-components/block-token-details";
import NotFound from "./page-components/notFound";
import MenuBackDrop from "./common/block-components/menuBackDrop";
import Footer from "./common/block-components/block-footer";

function App() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "bg-light" ? false : true
  );
  const getTheme = colorTheme === "bg-dark";
  const [menu, setMenu] = useState(false);
  const [collapseInfo, setCollapseInfo] = useState(true);
  // const { width } = useWindowDimensions();

  // <===== SWITCH THEME =====>
  const toggleMode = (checked) => {
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
      element: <UsersHomePage /> || (
        <GuestHomePage collapseInfo={collapseInfo} toggleInfo={toggleInfo} />
      ),
    },
    { path: "/team", element: <Team /> },
    {
      path: "/tokens",
      children: [
        {
          index: true,
          element: <Tokens />,
        },
        {
          path: "saved",
          element: <SavedTokens />,
          children: [{ path: ":tokenId", element: <TokenDetails /> }],
        },
        { path: ":tokenId", element: <TokenDetails /> },
      ],
    },
    { path: "/join-whitelist", element: <JoinWhitelist /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/profile", element: <Profile /> },
    {
      path: "/recover-password",
      element: <RecoverPassword />,
    },
    { path: "/not-found", element: <NotFound /> },
    { path: "*", element: <Navigate to="/not-found" /> },
  ]);

  return (
    <React.Fragment>
      <ErrorBoundary
        fallback={
          <p className="mt-10 text-center">
            Error loading page!!! Please check or update your browser, if error
            persists contact support: fredobumma@gmail.com{" "}
          </p>
        }
      >
        <ThemeContext.Provider
          value={{
            theme: getTheme,
            checked: darkSide,
            toggleMode: toggleMode,
          }}
        >
          <SVGSource />
          <Navbar menu={menu} toggleMenu={toggleMenu} />
          <main className="pt-120px relative">
            <RouterProvider router={router} />
            <Footer />
            <MenuBackDrop menu={menu} toggleMenu={toggleMenu} />
          </main>
        </ThemeContext.Provider>
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
