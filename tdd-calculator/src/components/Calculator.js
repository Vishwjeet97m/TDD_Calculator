import React, { useState } from "react";
import "./Calculator.css";
import { evaluate } from "mathjs"; 
import Button from "./Button";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [btnArr, setBtnArr] = useState(["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "C", "0", "=", "/"])

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
        {
          btnArr.map((btn)=>(
            <Button value={btn} onClick={handleClick} />
          ))
        }
      </div>
     
    </div>
  );
};

export default Calculator;
