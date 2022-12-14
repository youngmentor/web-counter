import React, { useReducer } from "react";
import "./App.css";

function reducer(number, action) {
  switch (action.type) {
    case "addItem":
      return { count: number.count + 1 }
    case "minusItem":
      return { count: number.count - 1 }
      default:
        return number
  }
}

function App() {
  const [number, dispatch] = useReducer(reducer, { count: 0 })


  const addItem = () => {
    dispatch({ type: 'addItem' })
  }

  const minusItem = () => {
    if (number.count !== 0)
    dispatch({ type: 'minusItem' })
  }

  return (
    <div className="main">
      <div className="app">
        <div className="number">
          <div className="initial"> {number.count}</div>
          <div className="adder">
            <button className="button1" onClick={addItem}>+</button>
            <button className="button2" onClick={minusItem}>-</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App