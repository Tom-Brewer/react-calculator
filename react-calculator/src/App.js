import './App.css';
import { evaluate } from 'mathjs';
import React, { useState } from "react";

const App = () => {

  const button = [
    "Clear", "^", "%",
    "(", ")", "-+", "/",
    7, 8, 9, "*",
    4, 5, 6, "-",
    1, 2, 3, "+",
    0, ".", "="
  ];


  const [calc, setCalc] = useState("")

  const clickNumbers = (value) => {
    setCalc(calc + value)
  }
  const clearCalc = () => {
    setCalc("")
  }
  const equalsBtn = () => {
    setCalc(evaluate(calc).toString())
  }

  return (
      <div className="App">
        <header id="header">
          <h1>Calculator</h1>
        </header>
        <div id="CalcBody">
          <div id="buttonBox">
            <div id="screen">{calc}</div>
            {button.map((btn, index) => {
              if (btn === "*" || btn === "-" || btn === "+" || btn === "/") {
                return <button key={index} className="button functionBtn" onClick={() => clickNumbers(btn)}>{btn}</button>
              }
              if (btn === "=") {
                return <button key={index} className="button" id="equals" onClick={() => equalsBtn()}>{btn}</button>
              }
              if (btn === "Clear") {
                return <button key={index} className="button" id="clear" onClick={() => clearCalc()}>{btn}</button>
              }
              else {
                return <button key={index} className="button" onClick={() => clickNumbers(btn)}>{btn}</button>
              }
            }
            )}
          </div>
        </div>
      </div>
  );
}

export default App;
