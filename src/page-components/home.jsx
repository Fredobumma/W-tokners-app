import React from "react";
import { SVGSource } from "../common/svg";
import Switcher from "../common/switcher";
// import Button from "../common/button";
// import PurchaseGuide from "../common/block-components/block-purchase";
// import Footer from "../common/block-components/block-footer";

const Home = ({ theme, ...rest }) => {
  return (
    <React.Fragment>
      <SVGSource />
      <center>
        <Switcher {...rest} />
      </center>
      {/* <PurchaseGuide theme={theme} /> */}
      {/* <Footer theme={theme} /> */}
    </React.Fragment>
  );
};
export default Home;
