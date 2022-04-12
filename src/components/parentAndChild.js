
/* 
   - Parent can now recieve childs as prop by an array
   - Each child should have a button.
   - Clicking on a button cause the parent to create a new child.
*/


const Child = (props) => {
  return ( <>
  <button onClick={props.btnEvent}>click</button>
  </> );
}




const Parent = (props) => {
  
 const onClickEvent = ()=>{
   console.log("hello son")
 }
  return ( <>
  
  <Child btnEvent={onClickEvent} childs={props.childs}/>
  </>  );
}

export default Parent;
 
