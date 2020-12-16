import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { plus, minus, reset } from "./action/counterAction";
import Alert from "./Alert";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [selct, setSelect] = useState(0);
  const counterReducer = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  console.log(counterReducer);
  return (
    <div className="container">
      <div className="jumbotron text-center block-center">
        <Alert />
        <hr />
        <h1>{counterReducer.counter}</h1>

        <button
          className="btn btn-success"
          onClick={() => dispatch(plus(selct))}
        >
          +
        </button>
        <button className="btn btn-info m-3" onClick={() => dispatch(reset())}>
          reset
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(minus(selct))}
        >
          -
        </button>
        <hr />
        <select onChange={(e) => setSelect(+e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <hr />
      </div>
    </div>
  );
}

export default App; //HOC
