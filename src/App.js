import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import Credit from "./Pages/Credit";
import Debit from "./Pages/Debit";
import useFetchDebit from "./Components/Hooks/useFetchDebit";
import useFetchCredit from "./Components/Hooks/useFetchCredit";

function App() {
  const { debits, setDebits, debitTotal } = useFetchDebit();
  const { credits, setCredits, creditTotal } = useFetchCredit();
  const [signedIn, setSignedIn] = useState(false);
  const [accountBalance, setAccountBalance] = useState(0);
  const [user, setUser] = useState({
    name: "Temur",
    accountNum: 1234,
  });

  useEffect(() => {
    setAccountBalance(creditTotal - debitTotal);
  }, [credits, debits]);

  const DebitComponent = () => (
    <Debit
      accountBalance={accountBalance}
      debitTotal={debitTotal}
      debits={debits}
      setDebits={setDebits}
    />
  );
  const CreditComponent = () => (
    <Credit
      accountBalance={accountBalance}
      creditTotal={creditTotal}
      credits={credits}
      setCredits={setCredits}
    />
  );
  const HomeComponent = () => (
    <Home accountBalance={accountBalance} setSignedIn={setSignedIn} />
  );

  const ProfileComponent = () => (
    <Profile userName={user.name} accountNum={user.accountNum} />
  );

  return (
    <>
      {signedIn ? (
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/Profile" component={ProfileComponent} />
            <Route path="/Credit" component={CreditComponent} />
            <Route path="/Debit" component={DebitComponent} />
          </Switch>
        </Router>
      ) : (
        <Login setSignedIn={setSignedIn} />
      )}
    </>
  );
}

export default App;
