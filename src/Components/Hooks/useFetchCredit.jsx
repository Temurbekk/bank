import { useState, useEffect } from "react";
import axios from "axios";

const useFetchCredit = () => {
  const [credits, setCredits] = useState([]);
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
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return { credits, creditTotal };
};

export default useFetchCredit;
