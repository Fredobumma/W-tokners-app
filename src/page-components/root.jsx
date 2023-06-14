import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getUser } from "../services/authService";
import { tracker } from "../services/trackService";
import useDarkSide from "../hooks/useDarkSide";
import AuthContext from "../context/authContext";
import ValidatorContext from "../context/validatorContext";
import CollapseInfoContext from "../context/collapseInfoContext";
import FormValidator from "../utilities/formValidator";
import { SVGSource } from "../common/svg";
import Navbar from "../common/block-components/navbar";
import MenuBackDrop from "../common/block-components/menuBackDrop";
import Footer from "../common/block-components/block-footer";

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
    <Fragment>
      <AuthContext.Provider value={user}>
        <SVGSource />
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
    </Fragment>
  );
};

export default Root;
