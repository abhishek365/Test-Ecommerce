import React, { useContext } from "react";
import { countContext } from "../../App";

function ComponentB() {
  const { counter, countDispatch } = useContext(countContext);
  return (
    <>
      <div>ComponentB</div>
      <button onClick={() => countDispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => countDispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => countDispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default ComponentB;
