import { Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth.js";

export const PrivateRoute = ({ Component, allowedRoutes = [] }) => {
  const { user } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    if (user) {
      setIsAuthenticated(allowedRoutes.includes(user.role));
    }
  }, [user, allowedRoutes]);

  if (isAuthenticated === null) return null;

  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};
