import React, { useEffect, useState } from 'react'

export const UseEffectBasic = () => {
    const[counter,setCounter] = useState(0)

    useEffect(()=>{
        setCounter(5)
        return ()=>{
            console.log('cleaning successful')
        }
    },[])

     
  return (
    <div className='container'>
        <h3>Counter:{counter}</h3>
        <button onClick={(e)=>setCounter(counter+1)}>+</button>
    </div>
  )
}
