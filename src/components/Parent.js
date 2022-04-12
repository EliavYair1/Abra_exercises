import { useState } from "react";


function Parent(props) {

  const [studentsGrades, setStudentsGrades] = useState(props.grades);
  const newChildGrades = [...studentsGrades,Math.round(Math.random( studentsGrades.length+1)*100)]
  
  const addChild= ()=>{
    setStudentsGrades(newChildGrades)
  
  }
  return (<>
  
    <Child  addChild={addChild} grade={newChildGrades.join()}/>
    </>
     );

}

export default Parent;


const Child = ({addChild,...props}) => {

  return (  
    <div>
      <button onClick={addChild} >click</button>
      <br/>

  <p >Students Grades : [{props.grade}]</p>
      
    </div>
  );
}
 
