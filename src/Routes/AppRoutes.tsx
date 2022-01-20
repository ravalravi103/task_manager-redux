import React from "react";
import { Switch, Route } from "react-router-dom";
import DashBoard from "../pages/Dashboard/dashboard";
import TaskManagement from "../pages/TaskManagement/task-management";
import Login from "../pages/Login/login";
import Register from "../pages/Register/register";
import PrivateRoute from "../auth/PrivateRoute/PrivateRoute";

const AppRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <PrivateRoute path="/dashboard">
          <DashBoard />
        </PrivateRoute>
        <PrivateRoute path="/task-manager">
          <TaskManagement />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <PrivateRoute path="/" exact>
          <TaskManagement />
        </PrivateRoute>
      </Switch>
    </React.Fragment>
  );
};

export default AppRoutes;
