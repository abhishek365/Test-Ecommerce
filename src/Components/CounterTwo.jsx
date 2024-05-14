import React, { useReducer } from "react";

const initialState = {
  counter: 0,
};
const reduce = (state, action) => {
    switch (action.type) {
      case "increment":
        return { counter: state.counter + 1 };
      case "decrement":
        return { counter: state.counter - 1 };
      case "reset":
        return initialState;
      default:
        return state;
    }
  };
const CounterTwo = () => {
  const [count, dispatch] = useReducer(reduce, initialState);

  return (
    <>
      <h1>Counter -- {count.counter}</h1>
      <button onClick={() => dispatch({type: "increment"})}>Increment</button>
      <button onClick={() => dispatch({type: "decrement"})}>decrement</button>
      <button onClick={() => dispatch({type: "reset"})}>Reset</button>
    </>
  );
};

export default CounterTwo;
