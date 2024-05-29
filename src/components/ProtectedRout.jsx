import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, path }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to={`${path}`} />;
  }

  return children;
};

export default ProtectedRoute;
