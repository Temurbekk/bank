import React from "react";
import Card from "../Components/Card";

function Credit(props) {
  return (
    <div>
      <div>This is the Credit page</div>
      <div>Current Account Balance {props.accountBalance}</div>
      <div> Credit Total:{props.creditTotal}</div>
      <div>Add Credit spending</div>
      <input type="text" placeholder="Enter a description..." />
      <input type="text" placeholder="Enter dollar amount" />
      <div>Add</div>
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
}

export default Credit;
