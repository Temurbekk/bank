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
    <div>
      <div>This is the Debit page</div>
      <div>Current Account Balance {props.accountBalance}</div>
      <div> Debit Total:{props.debitTotal}</div>
      <div>Add Debit spending</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className=""
            name="description"
            value={debit.description}
            onChange={handleChange}
            placeholder="Enter description"
          />
          <input
            className=""
            name="amount"
            value={debit.amount}
            onChange={handleChange}
            placeholder="Enter amount"
          />
          <button>Add</button>
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
