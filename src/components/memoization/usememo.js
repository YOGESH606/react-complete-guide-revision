import { useMemo, useState } from "react";
export const UseMemoExample = () => {
  const [Counter1, setCounter1] = useState(0);
  const [Counter2, setCounter2] = useState(0);

  const inc1 = () => {
    setCounter1(Counter1 + 1);
  };
  const inc2 = () => {
    setCounter2(Counter2 + 1);
  };
  
  const isEven = useMemo(() =>{
    for(let i=0;i<1000000000;i++){}
    return Counter1%2===0;
},[Counter1])
//isEven only render only when Counter1 is changed 

  return (
    <div>
      <button onClick={inc1}>count1 - {Counter1}</button>
      <span>{isEven ? 'Even' : 'odd'}</span>
      <button onClick={inc2}>count2 - {Counter2}</button>
    </div>
  );
};
