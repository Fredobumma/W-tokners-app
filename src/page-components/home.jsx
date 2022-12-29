import React from "react";
import { SVGSource } from "../common/svg";
import Switcher from "../common/switcher";
// import Button from "../common/button";

const Home = () => {
  return (
    <React.Fragment>
      <SVGSource />
      <center>
        <Switcher />
      </center>
    </React.Fragment>
  );
};
export default Home;
