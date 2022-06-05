import React, { useState } from "react";

export const PreviousState = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    //setCount(count+1) react update state in batches thats why in both cases count is same
    // setCount(count+1)
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  const decrease = () => {
    setCount((count) => count - 1);
    setCount((count) => count - 1);

  };
  return (
    <div>
      <div>counter: {count}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
};
