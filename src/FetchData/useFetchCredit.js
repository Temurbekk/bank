import { useState, useEffect } from "react";
import axios from "axios";

function useFetchCredit() {
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [creditTotal, setCreditTotal] = useState(0);

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
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return { credits, isLoading, creditTotal };
}

export default useFetchCredit;
