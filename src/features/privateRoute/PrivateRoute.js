import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

import React from "react";

//HOC

const PrivateRoute = (props) => {
  return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
