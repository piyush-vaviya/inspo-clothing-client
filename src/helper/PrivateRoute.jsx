import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component: Component }) {
  const isLogged = localStorage.getItem("loginDone");
  return isLogged ? <Component /> : <Navigate to="/sign" />;
}
