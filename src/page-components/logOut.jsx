import { Navigate } from "react-router-dom";
import { logoutJwt } from "../services/authService";

const LogOut = () => {
  logoutJwt();
  window.location = "/";
  return <Navigate to="/" replace={true} />;
};

export default LogOut;
