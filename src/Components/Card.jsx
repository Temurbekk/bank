import React from "react";

const Card = (props) => {
  return (
    <div className="card section">
      <div className="card-header title has-text-centered">
        {props.description}
      </div>
      <div className="card-content">
        <div className="content">Price: {props.amount}</div>
        <div className="content">Date: {props.date.toLocaleDateString()}</div>
      </div>
    </div>
  );
};

export default Card;
