import { useState, useEffect } from "react";
import axios from "axios";

const useFetchDebit = () => {
  const [debits, setDebits] = useState([]);
  const [debitTotal, setDebitTotal] = useState(0);
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
  return { debits, debitTotal };
};

export default useFetchDebit;
