import { useState } from "react"
const Counter = () => {
let [counter,setCounter] = useState(0)
const increment = ()=>{
  setCounter(counter++)
}
const deIncrement = ()=>{
  setCounter(counter--)
}
  return (<>
    <button onClick={increment}>+</button>
<p>start counting {counter}</p>
<button onClick={deIncrement}>-</button>
  </> 

   );
}
 
export default Counter;