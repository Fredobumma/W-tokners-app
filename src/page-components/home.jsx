import React from "react";
import { SVGSource } from "../common/svg";
import Switcher from "../common/switcher";
// import Button from "../common/button";
// import Footer from "../common/block-components/block-footer";

const Home = ({ theme, ...rest }) => {
  return (
    <React.Fragment>
      <SVGSource />
      <center>
        <Switcher {...rest} />
        {/* <Footer theme={theme} /> */}
      </center>
    </React.Fragment>
  );
};
export default Home;
