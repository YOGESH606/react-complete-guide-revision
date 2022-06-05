import React, { useState } from "react";
const numberContext = React.createContext();

export const UseContext = () => {
  const [name, setName] = useState("yogesh");
  return (
    <div className="container">
      <h1>useContext hook</h1>
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
  return (
    <numberContext.Consumer>
        {
         context =>
         <div style={{border:'1px solid red'}}>
             <h3>SubChildComponet</h3>
             <p>{context.name}</p>
            <input value={context.name} onChange={(e)=>context.setName(e.target.value)}/>
         </div>
        }
    </numberContext.Consumer>
  );
};
