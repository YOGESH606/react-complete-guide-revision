import { memo ,useState} from "react";

const Child = ({ addPerson, person }) => {
  const [Name, setName] = useState("");
  console.log("child");
  return (
    <div>
      <input onChange={(e) => setName(e.target.value)}></input>
      <button onClick={() => addPerson(Name)}>add</button>
      {person.map((p) => (
        <div>{p}</div>
      ))}
    </div>
  );
};
export default memo(Child);