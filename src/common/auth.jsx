import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/authContext";

const RequireAuth = ({ children }) => {
  const user = useContext(AuthContext);

  if (!user)
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
