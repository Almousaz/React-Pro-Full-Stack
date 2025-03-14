import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ component: Component }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Component />;
}

export default PrivateRoute;
