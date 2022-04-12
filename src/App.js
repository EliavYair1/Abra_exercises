import CapitalizeInput from "./components/CapitalizeInput"
import './App.css';
import Counter from "./components/counter";
import PrintNames from "./components/printNames";
// import Parent from "./components/parentAndChild";
import Parent from "./components/Parent"
// add a message when the persons prop is empty (array is empty)
// add a search input which filter names depends on the the search input
// if search input is empty dont filter
function App() {
const persons = [{firstName:"eliav",lastName:"yair"},
{firstName:"elad",lastName:"zucker"}]
const childs = [{firstName:"moshe",lastName:"cohen",grade:96},
{firstName:"ilan",lastName:"gilad",grade:86}]



const studentsGrades=[98,88,57,69];


  return (
    <div className="App">
<CapitalizeInput startText="insert info here"/>
<Counter/>
<div className="box">
<PrintNames persons={persons}/>
</div>

<div className="box">
{/* <Parent childs={childs}/> */}
<Parent grades={studentsGrades}  />

</div>
    </div>
  );
}

export default App;
