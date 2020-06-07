import React, { useState } from "react";
import Card from "../Components/Card";

const Credit = (props) => {
  const [credit, setCredit] = useState({
    amount: "",
    description: "",
    date: "",
  });

  const addCredit = (credit) => {
    const date = new Date();
    credit.date = date.toISOString();
    const newCredits = [credit, ...props.credits];

    props.setCredits(newCredits);
  };

  const handleChange = (e) => {
    const updatedCredit = { ...credit };
    const inputField = e.target.name;
    const inputValue = e.target.value;

    updatedCredit[inputField] = inputValue;
    if (inputField === "amount") {
      updatedCredit.amount = Number(inputValue);
    }
    setCredit(updatedCredit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Add button clicked");
    addCredit(credit);
  };
  return (
    <div>
      <div>This is the Credit page</div>
      <div>Current Account Balance {props.accountBalance}</div>
      <div> Credit Total:{props.creditTotal}</div>
      <div>Add Credit spending</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className=""
            name="description"
            value={credit.description}
            onChange={handleChange}
            placeholder="Enter description"
          />
          <input
            className=""
            name="amount"
            value={credit.amount}
            onChange={handleChange}
            placeholder="Enter amount"
          />
          <button>Add</button>
        </form>
      </div>
      <div>
        {props.credits.map((credit) => {
          const date = new Date(credit.date);
          return (
            <Card
              description={credit.description}
              amount={credit.amount}
              date={date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Credit;
