import React,{useState} from 'react'
import data from '../data'

export const UseStateArray = () => {
    const [people, setPeople] = useState(data)
    const [name , setName] =useState('')

    const removePerson = (id)=>{ 
       const updatedData= people.filter(person=>person.id!==id)
       setPeople(updatedData)
    }

    const addPerson = ()=>{
        const newPerson = {
            id : name.length,
            name : name
        }
        if(newPerson.name)
               setPeople([...people,newPerson])
        setName('')
    }
    const resetData = ()=>{
        setPeople([])
    }

  return (
    <div className="container">
      {
            people.map((person)=>(
                <div>
                    {person.name}
                    <button onClick={()=>removePerson(person.id)}>X</button>
                </div>
            ))
       }
       <div>
           <input placeholder='enter name..' value={name} onChange={(e)=>setName(e.target.value)}/>
           <button onClick={addPerson}>+</button>
           <div>
                 <button onClick={resetData}>Reset All Data</button>
            </div>
       </div>
        
    </div> 
  )
}

