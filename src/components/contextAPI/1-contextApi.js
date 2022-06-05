import React, { useContext, useState } from "react";
const numberContext = React.createContext();

export const ContextApi = () => {
  const [name, setName] = useState("yogesh");
  return (
    <div className="container">
      <h1>Context API</h1>
        <numberContext.Provider value={{
                name:name,
                setName:setName,

              }}> 
            <p >{name}</p>
            <input value={name} onChange={(e)=>setName(e.target.value)}/>
            <ChildComponent />
        </numberContext.Provider>
    </div>
  );
};

const ChildComponent = () => {
  return (
    <div style={{border:'1px solid red'}}>
      <h3>ChildComponet</h3>
      <SubChildComponent />
    </div>
  );
};

const SubChildComponent = () => {
  const value = useContext(numberContext)
  return (
         <div style={{border:'1px solid red'}}>
             <h3>SubChildComponet</h3>
             <p>{value.name}</p>
            <input value={value.name} onChange={(e)=>value.setName(e.target.value)}/>
         </div>
  );
};
