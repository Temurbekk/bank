import React from "react";

function Card(props) {
  return (
    <div>
      <div>Description: {props.description}</div>
      <div>Price: {props.amount}</div>
      <div>Date: {props.date.toLocaleDateString()}</div>
    </div>
  );
}

export default Card;
