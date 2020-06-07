import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import NavBar from "./Components/NavBar";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import Credit from "./Pages/Credit";
import Debit from "./Pages/Debit";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [accountBalance, setAccountBalance] = useState(0);
  const [user, setUser] = useState({
    name: "Temur",
    account_num: 1234,
  });
  const [credits, setCredits] = useState([]);
  const [creditTotal, setCreditTotal] = useState(0);
  const [debits, setDebits] = useState([]);
  const [debitTotal, setDebitTotal] = useState(0);

  useEffect(() => {
    axios
      .get("https://moj-api.herokuapp.com/credits")
      .then((response) => {
        let data = response.data;
        setCredits(data);

        let creditTotal = 0;
        for (let obj of data) {
          creditTotal += obj.amount;
        }
        setCreditTotal(creditTotal);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://moj-api.herokuapp.com/debits")
      .then((response) => {
        let data = response.data;
        setDebits(data);

        let debitTotal = 0;
        for (let obj of data) {
          debitTotal += obj.amount;
        }
        setDebitTotal(debitTotal);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    setAccountBalance(credits - debits);
    console.log(accountBalance);
  }, [credits, debits]);

  const HomeComponent = () => (
    <Home accountBalance={accountBalance} setSignedIn={setSignedIn} />
  );
  const ProfileComponent = () => (
    <Profile userName={user.name} account_num={user.account_num} />
  );

  const CreditsComponent = () => (
    <Credit
      accountBalance={accountBalance}
      credits={credits}
      creditTotal={creditTotal}
    />
  );

  const DebitsComponent = () => (
    <Debit
      accountBalance={accountBalance}
      debits={debits}
      debitTotal={debitTotal}
    />
  );

  return (
    <>
      {signedIn ? (
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/Profile" component={ProfileComponent} />
            <Route path="/Credit" component={CreditsComponent} />
            <Route path="/Debit" component={DebitsComponent} />
          </Switch>
        </Router>
      ) : (
        <Login setSignedIn={setSignedIn} />
      )}
    </>
  );
}

export default App;
