import React, { useState } from 'react'

export const UseStateCounter = () => {
    const[counter,setCounter] = useState(0)
    const [intervalId, setIntervalId] = useState(0);

    const handleTimer = ()=>{

        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(0);
            return;
          }

       const id = setInterval(()=>{
            setCounter((prevcounter)=>prevcounter+1)
        },1000)

        setIntervalId(id)
    }
  return (
    <div className="container"> 
        <h3>Counter : {counter} </h3>
        <div>
            <button onClick={()=>{setCounter(counter+1)}}>+</button>
            <button onClick={()=>{setCounter(0)}}>reset</button>
            <button onClick={()=>{setCounter(counter-1)}}>-</button>
            <button onClick={handleTimer}>{!intervalId ? 'start counting' : 'stop counting'}</button>
        </div>
    </div>
  )
}
