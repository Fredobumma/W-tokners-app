import React, { Fragment } from "react";
import { SVGSource } from "../common/svg";
import Executives from "./../common/block-components/block-executives";

const Team = ({ theme }) => {
  return (
    <Fragment>
      <SVGSource />
      <Executives theme={theme} />
    </Fragment>
  );
};

export default Team;
