import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Routes from "./Components/Routes";
import Login from "./Pages/Login";
import useFetchDebit from "./FetchData/useFetchDebit";
import useFetchCredit from "./FetchData/useFetchCredit";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [accountBalance, setAccountBalance] = useState(0);
  const { credits, creditTotal } = useFetchCredit();
  const { debits, debitTotal } = useFetchDebit();
  const [user, setUser] = useState({
    name: "Temur",
    account_num: 1234,
  });

  useEffect(() => {
    setAccountBalance(credits - debits);
    console.log(accountBalance);
  }, [accountBalance, credits, debits]);

  return (
    <>
      {signedIn ? (
        <Router>
          <NavBar />
          <Routes setSignedIn={setSignedIn} />
        </Router>
      ) : (
        <Login setSignedIn={setSignedIn} />
      )}
    </>
  );
}

export default App;
