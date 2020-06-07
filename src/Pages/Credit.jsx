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
    <div className="container">
      <div className="title is-1 has-text-centered">
        This is the Credit page
      </div>
      <div className="box">
        <div className="is-size-4">
          Current Account Balance {props.accountBalance}
        </div>
        <div className="is-size-5"> Credit Total: {props.creditTotal}</div>
      </div>
      <div className="title">Add Credit spending</div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="columns section">
            <input
              className="input column  mr-3"
              name="description"
              value={credit.description}
              onChange={handleChange}
              placeholder="Enter description"
            />

            <input
              className="input column  mr-3"
              name="amount"
              value={credit.amount}
              onChange={handleChange}
              placeholder="Enter amount"
            />
            <div
              className="button is-primary column is-one-fifth"
              onClick={handleSubmit}
            >
              Add
            </div>
          </div>
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
