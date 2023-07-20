import React from "react";
const Counter = ({ list }) => {
  var count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].checked === true) {
      count++;
      console.log("Sumando 1...");
    }
  }

  return <div className="count">{count}</div>;
};

export default Counter;
