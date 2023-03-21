import React, { Fragment } from "react";
import { SVGSource } from "../common/svg";
// import Navbar from "./../common/block-components/navbar";
// import Hero from "../common/block-components/block-auth-hero";
// import Objectives from "../common/block-components/block-auth-objectives";
// import Services from "../common/block-components/block-auth-services";

const UsersHome = ({ menu, theme, toggleMenu }) => {
  return (
    <Fragment>
      <SVGSource />
      {/* <Navbar menu={menu} theme={theme} toggleMenu={toggleMenu} /> */}
      {/* <Hero theme={theme} /> */}
      {/* <Objectives theme={theme} /> */}
      {/* <Services theme={theme} /> */}
    </Fragment>
  );
};

export default UsersHome;
