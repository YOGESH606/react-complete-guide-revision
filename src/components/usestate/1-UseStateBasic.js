import { useState } from "react";

export const UseStateBasic = () => {
  const [title, setTitle] = useState("");
  const handleChange = (e)=>{
    setTitle(e.target.value)
  }
  return (
    <div className="container">
      <h3>Title: {title}</h3>
      <input value={title} onChange={handleChange} />
    </div>
  );
};


