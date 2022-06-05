import React, { useReducer, useState } from "react";

const initialState = [];

const reducer = (state, {type,payload}) => {
  switch (type) {
    case "add":
      return [...state, {...payload,id:new Date().getTime()}];
    case 'delete':
        return state.filter((person)=>person.id!==payload.id)
    default:
      throw new Error();
  }
};
export const BasicReducerArray = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && mail) {
      dispatch({ type: "add", payload: { name, mail } });
      setName('')
      setMail('')
    }
  };
  return (
    <div>
      <lable>Name</lable>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <lable>Email</lable>
      <input
        value={mail}
        onChange={(e) => {
          setMail(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>

      <div>
        {state.map((person) => (
          <div>
            <span>{person.name}</span>
            <span>{person.mail}</span>
            <button onClick={()=>dispatch({type:'delete',payload:{id:person.id}})}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
};
