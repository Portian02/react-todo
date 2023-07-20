import React from "react";
import "./counter.css"

const Counter = ({ list }) => {
  var count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].checked === true) {
      count++;
      console.log("Sumando 1...");
    }
  }

  return (
    <div className="container-count">
      <div className="count">{count}</div>
      <p>Tareas Completadas</p>
    </div>
  );
};

export default Counter;
