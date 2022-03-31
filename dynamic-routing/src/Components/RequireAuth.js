import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";

const RequireAuth = (props) => {
  const auth = useAuth();
//   const location = useLocation();
  if (!auth.user) {
    return <Navigate to="login" />;
  }

  return <>{props.children}</>;
};

export default RequireAuth;
