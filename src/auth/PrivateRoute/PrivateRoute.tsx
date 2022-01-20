import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = (props: any) => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  if (!user) return <Redirect to="/login" />;
  return <Route {...props}></Route>;
};

export default PrivateRoute;
