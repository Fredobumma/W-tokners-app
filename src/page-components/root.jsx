import { Suspense, lazy, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getUser } from "../services/authService";
import { tracker } from "../services/trackService";
import useDarkSide from "../hooks/useDarkSide";
import AuthContext from "../context/authContext";
import ValidatorContext from "../context/validatorContext";
import Loader from "./../common/block-components/loader";
import MenuBackDrop from "../common/block-components/menuBackDrop";
import FormValidator from "../utilities/formValidator";

const Navbar = lazy(() => import("./../common/block-components/navbar"));
const Footer = lazy(() => import("./../common/block-components/block-footer"));

const Root = () => {
  // === Generic State
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme !== "light");
  const [menu, setMenu] = useState(false);

  // === User Object If Authorized
  const user = getUser();

  // === Theme Toogle
  const toggleMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  // === Menu Toggle
  const toggleMenu = () => {
    const { classList } = window.document.documentElement;
    classList.toggle("overflow-y-hidden");
    setMenu(!menu);
  };

  // === Open-replay Analysis Tracking System
  useEffect(() => {
    tracker.start();

    const email = user?.email;
    tracker.setUserID(email);
  }, [window.location.pathname]);

  return (
    <Suspense fallback={<Loader />}>
      <AuthContext.Provider value={user}>
        {/* Static Navbar */}
        <Navbar
          menu={menu}
          checked={darkSide}
          toggleMenu={toggleMenu}
          toggleMode={toggleMode}
        />
        <main className="pt-120px relative">
          <ValidatorContext.Provider value={FormValidator}>
            <Outlet /> {/*  App Outlet */}
          </ValidatorContext.Provider>
          <Footer checked={darkSide} toggleMode={toggleMode} />
          <MenuBackDrop menu={menu} toggleMenu={toggleMenu} />
        </main>
      </AuthContext.Provider>
    </Suspense>
  );
};

export default Root;
