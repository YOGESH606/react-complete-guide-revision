import React ,{useState}from "react";

export const MultipleInput = () => {

  const[person , setPerson] = useState({name:'',mail:'',age:''})

  const [people, setPeople] = useState([]);

  const handleChange = (e)=>[
        setPerson({...person,[e.target.name]:e.target.value})
  ]
  const handleSubmit = (e)=>{
      e.preventDefault();
      if(person.name && person.mail && person.age){
          setPeople([...people,person])
          setPerson({name:'',mail:'',age:''})
      }
     
  }
  
  return(
      <div className="container">
          
            {
                   people.map((p)=>(
                    <div>
                        <span>name: {p.name}</span>
                        <span>mail: {p.mail}</span>
                        <span>age: {p.age}</span>
                    </div>
                  ))
           }
          <div>
              <label>Name:</label>
              <input name='name' value={person.name} onChange={handleChange}/>
          </div>
          <div>
              <label>Mail:</label>
              <input name='mail' value={person.mail} onChange={handleChange}/>
          </div>
          <div>
              <label>Age:</label>
              <input name='age' value={person.age} onChange={handleChange}/>
          </div>
          <button onClick={handleSubmit}>Submit</button>    
          
      </div>
  )
};
