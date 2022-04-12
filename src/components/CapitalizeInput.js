import React, { useState } from 'react';

const CapitalizeInput = (props) => {
  const onChangeEvent = (event)=>{
    // set the state value
    setValue(event.target.value)
  }
  // declare the variable to be use as the input value
  const [value, setValue] = useState(props.startText);
  console.log(value);
  return ( <>
  <input  value={value} onChange={onChangeEvent} 
  
  ></input>
  <p>{value.toUpperCase()}</p>
  
  </> );
}
 
export default CapitalizeInput;