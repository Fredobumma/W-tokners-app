import React, { Fragment } from "react";
import Hero from "../common/block-components/block-auth-hero";
import Objectives from "../common/block-components/block-auth-objectives";
import Services from "../common/block-components/block-auth-services";

const UsersHomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Objectives />
      <Services />
    </Fragment>
  );
};

export default UsersHomePage;
