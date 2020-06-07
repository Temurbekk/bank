import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Credit from "../Pages/Credit";
import Debit from "../Pages/Debit";

const Routes = ({ setSignedIn }) => {
  const HomeComponent = () => (
    <Home accountBalance={0} setSignedIn={setSignedIn} />
  );
  return (
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <Route path="/Profile" component={Profile} />
      <Route path="/Credit" component={Credit} />
      <Route path="/Debit" component={Debit} />
    </Switch>
  );
};

export default Routes;
