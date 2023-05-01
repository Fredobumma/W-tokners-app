import { Navigate } from "react-router-dom";
import { getJwt } from "../services/authService";

const RequireAuth = ({ children }) => {
  const auth = getJwt();

  if (!auth)
    return (
      <Navigate
        to="/login"
        replace={true}
        state={{ from: location.pathname }}
      />
    );

  return children;
};

export default RequireAuth;
