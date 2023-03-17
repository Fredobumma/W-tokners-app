import React, { Fragment } from "react";
import { SVGSource } from "../common/svg";
// import Navbar from "./../common/block-components/navbar";
import Hero from "../common/block-components/block-auth-hero";

const UsersHome = ({ menu, theme, toggleMenu }) => {
  return (
    <Fragment>
      <SVGSource />
      {/* <Navbar menu={menu} theme={theme} toggleMenu={toggleMenu} /> */}
      <Hero />
    </Fragment>
  );
};

export default UsersHome;
