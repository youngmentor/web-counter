import React, {useState} from "react";
import "./App.css";
function App () {
   const [number, setNumber] = useState(0);
  //  const [array, setArray] = useState(["student1 ", "student2 ", ])
  
   const addItem=()=> {
    setNumber((prev)=> prev+ 1);
}
 
   const minusItem=()=> {
    // if (number !== 0)
    setNumber ((prev)=>  prev -1);
    if(number === 0){
      setNumber(0)
    }
  }
   
  return(
    <div className="main">
  <div className="app"> 
  <div className="number">
    <div className="initial"> {number}</div>
    <div className="adder">
      <button className="button1" onClick={addItem}>+</button>
      {/* <button className="button2" onClick={minusItem}>-</button> */}
    </div>
  </div>
  </div>
    </div>
  )
}
export default App