import React, { Fragment } from "react";
import Hero from "../common/block-components/block-auth-hero";
import Objectives from "../common/block-components/block-auth-objectives";
import Services from "../common/block-components/block-auth-services";

const UsersHome = ({ theme }) => {
  return (
    <Fragment>
      <Hero theme={theme} />
      <Objectives theme={theme} />
      <Services theme={theme} />
    </Fragment>
  );
};

export default UsersHome;
