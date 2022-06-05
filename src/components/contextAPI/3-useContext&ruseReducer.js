import React, { useContext, useReducer, useState } from "react";

const initialState = [];

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "add":
      return [...state, { ...payload, id: new Date().getTime() }];
    case "delete":
      return state.filter((person) => person.id !== payload.id);
    default:
      throw new Error();
  }
};

const peopleContext = React.createContext();

export const UseContext_useReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(mail);
    if (name && mail) {
      dispatch({ type: "add", payload: { name, mail } });
      setName("");
      setMail("");
    }
  };
  const handleDelete = (id) => {
    dispatch({ type: "delete", payload: { id } });
  };
  return (
    <div className="container">
      <peopleContext.Provider
        value={{
          name,
          mail,
          state,
          setName,
          setMail,
          dispatch,
          handleSubmit,
          handleDelete,
        }}
      >
        <h1>Parent Component</h1>
        <ChildComponent />
      </peopleContext.Provider>
    </div>
  );
};

const ChildComponent = () => {
  return (
    <div>
      <h1>ChildComponent</h1>
      <SubChildComponent />
    </div>
  );
};

const SubChildComponent = () => {
  const context = useContext(peopleContext);

  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <h1>Subchild Component</h1>
      <p>
        here we are aceessing state/dispatch and name/mail state of parent
        class. Using context API and useContext Hook
      </p>

      <div>
        <lable>Name</lable>
        <input
          value={context.name}
          onChange={(e) => {
            context.setName(e.target.value);
          }}
        />
      </div>

      <div>
        <lable>Email</lable>
        <input
          value={context.mail}
          onChange={(e) => {
            context.setMail(e.target.value);
          }}
        />
      </div>
      <button onClick={context.handleSubmit}>Submit</button>

      <div>
        {context.state.map((person) => (
          <div>
            <span>{person.name}</span>
            <span>{person.mail}</span>
            <button onClick={() => context.handleDelete(person.id)}>
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
