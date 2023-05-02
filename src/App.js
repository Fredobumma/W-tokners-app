"use-client";

import { Fragment, useEffect, useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import jwtDecode from "jwt-decode";
import { tracker } from "./services/trackService";
import { getJwt } from "./services/authService";
import ThemeContext from "./context/themeContext";
import AuthContext from "./context/authContext";
import MenuContext from "./context/menuContext";
import ValidatorContext from "./context/validatorContext";
import CollapseInfoContext from "./context/collapseInfoContext";
import useDarkSide from "./hooks/useDarkSide";
// import useWindowDimensions from "./hooks/useWindowDimensions";
import FormValidator from "./utilities/formValidator";
import { SVGSource } from "./common/svg";
import RequireAuth from "./common/auth";
import Navbar from "./common/block-components/navbar";
import HomePage from "./page-components/homePage";
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
  const getTheme = colorTheme === "bg-dark";
  const [darkSide, setDarkSide] = useState(Boolean(colorTheme !== "bg-light"));
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

  // <===== TOGGLE READ MORE IN GUEST HOMEPAGE =====>
  const toggleInfo = () => {
    setCollapseInfo(!collapseInfo);
  };

  // <===== ROUTING IMPLEMENTATION =====>
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
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
    {
      path: "/join-whitelist",
      element: (
        <RequireAuth>
          <JoinWhitelist />
        </RequireAuth>
      ),
    },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    {
      path: "/profile",
      element: (
        <RequireAuth>
          <Profile />
        </RequireAuth>
      ),
    },
    {
      path: "/recover-password",
      element: <RecoverPassword />,
    },
    { path: "/not-found", element: <NotFound /> },
    { path: "*", element: <Navigate to="/not-found" /> },
  ]);

  useEffect(() => {
    tracker.start();

    const { email } = getJwt() ? jwtDecode(getJwt()) : {};
    tracker.setUserID(email);
  }, []);

  return (
    <Fragment>
      {/* // <===== ERROR BOUNDARY WITH FALLBACK MESSAGE =====> */}
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
            toggleMode,
          }}
        >
          <AuthContext.Provider value={{ user: getJwt() }}>
            <MenuContext.Provider value={{ menu, toggleMenu }}>
              <SVGSource />
              {/* // <===== APP NAVBAR  =====> */}
              <Navbar />
              {/* // <===== APP NAVBAR  =====> */}
              <main className="pt-120px relative">
                <ValidatorContext.Provider value={FormValidator}>
                  <CollapseInfoContext.Provider
                    value={{ collapse: collapseInfo, toggle: toggleInfo }}
                  >
                    {/* // <===== PROVIDING ROUTES AND APP PAGES =====> */}
                    <RouterProvider router={router} />
                    {/* // <===== PROVIDING ROUTES AND APP PAGES =====> */}
                  </CollapseInfoContext.Provider>
                </ValidatorContext.Provider>
                {/* // <===== APP FOOTER  =====> */}
                <Footer />
                {/* // <===== APP FOOTER  =====> */}

                <MenuBackDrop />
              </main>
            </MenuContext.Provider>
          </AuthContext.Provider>
        </ThemeContext.Provider>
      </ErrorBoundary>
    </Fragment>
  );
}

export default App;
