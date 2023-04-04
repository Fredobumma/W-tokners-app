import React, { Fragment } from "react";
import RegisterForm from "../common/block-components/block-registerForm";

const Register = ({ theme }) => {
  return (
    <Fragment>
      <RegisterForm theme={theme} />
    </Fragment>
  );
};

export default Register;
