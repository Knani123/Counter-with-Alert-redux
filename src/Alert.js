import React from "react";
import { useSelector } from "react-redux";

import "./annim.css";

const Alert = () => {
  const counterReducer = useSelector((state) => state.counterReducer);

  return (
    <div>
      {counterReducer.counter < 5 ? (
        <h1 className="bg bg-success text-light ">KEEP GOING</h1>
      ) : (
        <h1 className="bg bg-danger text-warning annim">STOOOOP !!!</h1>
      )}
    </div>
  );
};

export default Alert;
