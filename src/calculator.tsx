import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DailySchedule(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [symbole, setSymbole] = useState<string>("");
  const [prevOutput, setPrevOutput] = useState<string>("");
  const [currentOutput, setCurrentOutput] = useState<string>("");

  const handleNumber = (e: any) => {
    let str: string = value + e.target.name;
    let strOutput: string = currentOutput + e.target.name;
    setValue(str);
    setCurrentOutput(strOutput);
  };

  const handleSymbole = (e: any) => {
    setPrevOutput(value);
    let str: string = e.target.name;
    if (value.indexOf(str) === -1) {
      setValue(value + str);
      setPrevOutput(value + " " + str);
      setSymbole(str);
      setCurrentOutput("");
    }
  };

  const switchSymbole = () => {
    let str: string = symbole;
    let arr: string = value;
    let plusIndex: number = arr.indexOf(str);
    let firstNumber: number = Number(arr.substring(0, plusIndex));
    let secondNumber: number = Number(arr.substring(plusIndex + 1, arr.length));
    console.log(firstNumber);
    console.log(secondNumber);

    setPrevOutput("");

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      setValue("Math Err");
      setCurrentOutput("Math Err");
    } else {
      switch (str) {
        case "+":
          setValue((firstNumber + secondNumber).toString());
          setCurrentOutput((firstNumber + secondNumber).toString());
          break;

        case "-":
          setValue((firstNumber - secondNumber).toString());
          setCurrentOutput((firstNumber - secondNumber).toString());
          break;

        case "*":
          setValue((firstNumber * secondNumber).toString());
          setCurrentOutput((firstNumber * secondNumber).toString());
          break;

        case "÷":
          if (secondNumber === 0) {
            setValue("Math Err");
            setCurrentOutput("Math Err");
          } else {
            setValue((firstNumber / secondNumber).toFixed(2).toString());
            setCurrentOutput(
              (firstNumber / secondNumber).toFixed(2).toString()
            );
          }
          break;

        default:
          break;
      }
    }
  };

  const handleDeleteButton = () => {
    setValue(value.slice(0, -1));
    setCurrentOutput(currentOutput.slice(0, -1));
  };

  const clear = () => {
    setValue("");
    setSymbole("");
    setCurrentOutput("");
    setPrevOutput("");
  };

  return (
    <div className="App calculator-grid">
      <div
        className="output"
        style={{ border: "1px solid rgba(255,255,255,0.5)" }}
      >
        <div className="prev">{prevOutput}</div>
        <div className="curr">{currentOutput}</div>
      </div>

      <button className="span-two" onClick={clear} name="C">
        AC
      </button>
      <button onClick={handleDeleteButton}>DEL</button>
      <button onClick={handleSymbole} name="÷">
        ÷
      </button>
      <button onClick={handleNumber} name="1">
        1
      </button>
      <button onClick={handleNumber} name="2">
        2
      </button>
      <button onClick={handleNumber} name="3">
        3
      </button>
      <button onClick={handleSymbole} name="*">
        *
      </button>

      <button onClick={handleNumber} name="4">
        4
      </button>
      <button onClick={handleNumber} name="5">
        5
      </button>
      <button onClick={handleNumber} name="6">
        6
      </button>
      <button onClick={handleSymbole} name="+">
        +
      </button>

      <button onClick={handleNumber} name="7">
        7
      </button>
      <button onClick={handleNumber} name="8">
        8
      </button>
      <button onClick={handleNumber} name="9">
        9
      </button>
      <button onClick={handleSymbole} name="-">
        -
      </button>
      <button onClick={handleNumber} name=".">
        .
      </button>

      <button onClick={handleNumber} name="0">
        0
      </button>

      <button className="span-two" onClick={switchSymbole} name="=">
        =
      </button>
    </div>
  );
}
