import React, { useState } from "react";
import Card from "../Components/Card";

const Debit = (props) => {
  const [debit, setDebit] = useState({
    amount: "",
    description: "",
    date: "",
  });

  const addDebit = (debit) => {
    const date = new Date();
    debit.date = date.toISOString();
    const newDebits = [debit, ...props.debits];

    props.setDebits(newDebits);
  };

  const handleChange = (e) => {
    const updatedDebit = { ...debit };
    const inputField = e.target.name;
    const inputValue = e.target.value;

    updatedDebit[inputField] = inputValue;
    if (inputField === "amount") {
      updatedDebit.amount = Number(inputValue);
    }
    setDebit(updatedDebit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Add button clicked");
    addDebit(debit);
  };
  return (
    <div className="container">
      <div className="title is-1 has-text-centered">This is the Debit page</div>
      <div className="box">
        <div className="is-size-4">
          Current Account Balance {props.accountBalance}
        </div>
        <div className="is-size-5"> Debit Total: {props.debitTotal}</div>
      </div>
      <div className="title">Add Debit spending</div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="columns section">
            <input
              className="input column  mr-3"
              name="description"
              value={debit.description}
              onChange={handleChange}
              placeholder="Enter description"
            />

            <input
              className="input column  mr-3"
              name="amount"
              value={debit.amount}
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
        {props.debits.map((debit) => {
          const date = new Date(debit.date);
          return (
            <Card
              description={debit.description}
              amount={debit.amount}
              date={date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Debit;
