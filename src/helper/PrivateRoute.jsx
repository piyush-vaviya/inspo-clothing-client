import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component: Component }) {
  const isLogged = localStorage.getItem("loginDone");
  return isLogged ? <Component /> : <Navigate to="/sign" />;
}

// const getDifferedState = async (setState) => {
//   let differState;
//  await new Promise((resolve) =>
//   setState((data) => {
//     differState  = data
//     resolve();
//     return data
//   })
//  )
//   return differState
// }

// const data = {...(await getDifferedState(setChatMessage))}