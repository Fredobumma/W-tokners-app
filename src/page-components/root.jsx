import { Suspense, lazy, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getUser } from "../services/authService";
import { tracker } from "../services/trackService";
import useDarkSide from "../hooks/useDarkSide";
import AuthContext from "../context/authContext";
import ValidatorContext from "../context/validatorContext";
import CollapseInfoContext from "../context/collapseInfoContext";
import Loader from "./../common/block-components/loader";
import MenuBackDrop from "../common/block-components/menuBackDrop";
import FormValidator from "../utilities/formValidator";

const Navbar = lazy(() => import("./../common/block-components/navbar"));
const Footer = lazy(() => import("./../common/block-components/block-footer"));

const Root = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme !== "light");
  const [menu, setMenu] = useState(false);
  const [collapseInfo, setCollapseInfo] = useState(true);

  const user = getUser();

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

  useEffect(() => {
    tracker.start();

    const email = user?.email;
    tracker.setUserID(email);
  }, [window.location.pathname]);

  return (
    <Suspense fallback={<Loader />}>
      <AuthContext.Provider value={user}>
        <Navbar
          menu={menu}
          checked={darkSide}
          toggleMenu={toggleMenu}
          toggleMode={toggleMode}
        />
        {/* Static Navbar */}
        <main className="pt-120px relative">
          <ValidatorContext.Provider value={FormValidator}>
            <CollapseInfoContext.Provider
              value={{ collapse: collapseInfo, toggle: toggleInfo }}
            >
              <Outlet /> {/*  App Outlet */}
            </CollapseInfoContext.Provider>
          </ValidatorContext.Provider>
          {/* Static Footer */}
          <Footer checked={darkSide} toggleMode={toggleMode} />
          <MenuBackDrop menu={menu} toggleMenu={toggleMenu} />
          {/* Menu Background */}
        </main>
      </AuthContext.Provider>
    </Suspense>
  );
};

export default Root;
