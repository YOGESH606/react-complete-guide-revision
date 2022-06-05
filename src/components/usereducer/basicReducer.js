// context - an API given to us by React, allowing for the passing of information to child components without the use of props
// reducer - a pure function, accepting a state & action, and returning a new state
// action - an object literal, which describes a change to state
// useContext - a react hook, allowing functional components to take advantage of the context API
// useReducer - a react hook, used in place of useState, generally for more complex state
// dispatch - a function returned to us by useReducer, which sends action objects to the reducer function

import React, { useReducer } from "react";

const initialState = {
    count: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {count:state.count + 1};
    case "decrement":
      return {count:state.count - 1};
    default:
      throw new Error();
  }
}
export const BasicReducer = () => {
    const[state,dispatch] = useReducer(reducer,initialState)

  return (
    <div className="container">
        <h1>useReducer basic example</h1>
        <h3>Counter : {state.count}</h3>
        <button onClick={()=>dispatch({type:'increment'})}>+</button>
        <button onClick={()=>dispatch({type:'decrement'})}>+</button>
    </div>
  )
};
