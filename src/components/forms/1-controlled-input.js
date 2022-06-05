import React ,{useState}from "react";

export const ControlledInput = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [age, setAge] = useState();
  //const[person , setPerson] = useState({name:'',mail:'',age:''})
  const [people, setPeople] = useState([]);

//   console.log(name)
//   console.log(mail)
//   console.log(age)
  const handleSubmit = (e)=>{
      e.preventDefault();
      if(name && mail && age){
          const person = {
              name,
              mail,
              age
          }
          setPeople([...people,person])
          setName('')
          setAge('')
          setMail('')
      }
     
  }
  return(
      <div className="container">
          {
              people.map((person)=>(
                <div>
                    <span>name: {person.name}</span>
                    <span>mail: {person.mail}</span>
                    <span>age: {person.age}</span>
                </div>
              ))
          }
          <div>
              <label>Name:</label>
              <input value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div>
              <label>Mail:</label>
              <input value={mail} onChange={(e)=>setMail(e.target.value)}/>
          </div>
          <div>
              <label>Age:</label>
              <input value={age} onChange={(e)=>setAge(e.target.value)}/>
          </div>
          <button onClick={handleSubmit}>Submit</button>
          
      </div>
  )
};
