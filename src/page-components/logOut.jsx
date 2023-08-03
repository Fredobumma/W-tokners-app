import { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { logoutJwt } from "../services/authService";
import Loader from "../common/block-components/loader";

const LogOut = () => {
  logoutJwt();
  window.location = "/";

  return (
    <Fragment>
      <Loader />
      <Navigate to="/" replace={true} />
    </Fragment>
  );
};

export default LogOut;
