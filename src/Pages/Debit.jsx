import React from "react";
import Card from "../Components/Card";

function Debit(props) {
  return (
    <div>
      <div>This is the debit page</div>
      <div>Current Account Balance {props.accountBalance}</div>
      <div> Debit Total:{props.debitTotal}</div>
      <div>Add Debit spending</div>
      <input type="text" placeholder="Enter a description..." />
      <input type="text" placeholder="Enter dollar amount" />
      <div>Add</div>
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
}

export default Debit;
