import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Credit from "../Pages/Credit";
import Debit from "../Pages/Debit";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/Profile" component={Profile} />
      <Route path="/Credit" component={Credit} />
      <Route path="/Debit" component={Debit} />
    </Switch>
  );
};

export default Routes;
