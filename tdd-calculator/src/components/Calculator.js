import React, { useState } from "react";
import "./Calculator.css";
import { evaluate } from "mathjs"; 

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
        const evalResult = evaluate(input); 
        setResult(evalResult === Infinity ? "Error" : evalResult.toString());
    } else if (value === "C") {
      // Clear the input and result
      setInput("");
      setResult("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display" data-testid="display">
        {result || input || "0"}
      </div>
      <div className="buttons">
      <div className="buttons">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("C")}>C</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("=")}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
</div>
      </div>
    </div>
  );
};

export default Calculator;
