import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

import React from "react";

const PrivateRoute = (props) => {
  return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
