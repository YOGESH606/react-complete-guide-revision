import React, { useCallback, useState } from "react";
import Child from "./child";

export const UseCallbackExample = () => {
  const [person, setPerson] = useState([]);
  const [count, setCount] = useState(0);

  const addPerson = useCallback(
    (name) => {
      console.log(name);
      setPerson([...person, name]);
    },
    [person]
  );

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
      <Child person={person} addPerson={addPerson} />
    </div>
  );
};


