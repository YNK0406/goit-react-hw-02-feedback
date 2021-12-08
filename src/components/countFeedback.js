import React from "react";

const countFeedback = ({}) => {
  return (
    <div>
      <h1>Please leave feedback</h1>
      <ul>
        <li>
          <button>Good</button>
        </li>
        <li>
          <button>Neutral</button>
        </li>
        <li>
          <button>Bad</button>
        </li>
      </ul>
      <h1>Statistics</h1>
      <ul>
        <li>Good</li>
        <li>Neutral</li>
        <li>Bad</li>
        <li>Total</li>
        <li>Positive feedback</li>
      </ul>
    </div>
  );
};
export default countFeedback;
