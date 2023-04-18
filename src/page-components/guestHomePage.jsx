import React, { Fragment } from "react";
import Hero from "../common/block-components/block-hero";
import Features from "../common/block-components/block-features";
import Services from "../common/block-components/block-services";
import Objectives from "../common/block-components/block-objectives";
import Showcase from "../common/block-components/block-showcase";
import Presale from "../common/block-components/block-presale";
import PurchaseGuide from "../common/block-components/block-purchase";

const GuestHomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Features />
      <Services />
      <Objectives />
      <Showcase />
      <Presale />
      <PurchaseGuide />
    </Fragment>
  );
};

export default GuestHomePage;
