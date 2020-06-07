import { useState, useEffect } from "react";
import axios from "axios";

function useFetchCredit() {
  const [debits, setDebits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return { debits, isLoading, debitTotal };
}

export default useFetchCredit;
