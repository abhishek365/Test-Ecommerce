import React, { useReducer } from "react";

const initialState = 0;

const Counter = () => {
  const reduce = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return initialState;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reduce, initialState);
  const [countTwo, dispatchTwo] = useReducer(reduce, initialState);

  return <>
    <h1>count -- {count}</h1>
    <button onClick={() => dispatch("increment")}>Increment</button>
    <button onClick={() => dispatch("decrement")}>Decrement</button>
    <button onClick={() => dispatch("reset")}>Reset</button>
    <br></br>
    <h1>count2 -- {countTwo}</h1>
    <button onClick={() => dispatchTwo("increment")}>Increment</button>
    <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
    <button onClick={() => dispatchTwo("reset")}>Reset</button>
  </>;
};

export default Counter;
