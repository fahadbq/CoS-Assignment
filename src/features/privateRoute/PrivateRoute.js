import { Navigate } from "react-router-dom";

import React from "react";

//HOC

const PrivateRoute = ({ component: Component }) => {
  return localStorage.getItem("token") ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
