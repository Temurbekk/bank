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

  return (
    <>
      <NavBar />
      {signedIn ? (
        <Router>
          <Routes setSignedIn={setSignedIn} />
        </Router>
      ) : (
        <Login setSignedIn={setSignedIn} />
      )}
    </>
  );
}

export default App;
