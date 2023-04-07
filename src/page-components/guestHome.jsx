import React, { Fragment } from "react";
import Hero from "../common/block-components/block-hero";
import Features from "../common/block-components/block-features";
import Services from "../common/block-components/block-services";
import Objectives from "../common/block-components/block-objectives";
import Showcase from "../common/block-components/block-showcase";
import Presale from "../common/block-components/block-presale";
import PurchaseGuide from "../common/block-components/block-purchase";

const GuestHome = ({ theme }) => {
  return (
    <Fragment>
      <Hero theme={theme} />
      <Features theme={theme} />
      <Services />
      <Objectives />
      <Showcase />
      <Presale theme={theme} />
      <PurchaseGuide theme={theme} />
    </Fragment>
  );
};

export default GuestHome;
