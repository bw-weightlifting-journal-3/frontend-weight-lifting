import React, { useState } from "react";
import CounterButton from "./CounterButton";

export default function Counter1() {
  const [count1, setCount] = useState(0);
  const [count2, setCount] = useState(100);

  const addNumber1 = () => {
    setCount(count => count1 + 1);
  };
  const subtractNumber1 = () => {
    setCount(count => count1 - 1);
  };

  const addNumber2 = () => {
    setCount(count => count2 + 1);
  };
  const subtractNumber2 = () => {
    setCount(count => count2 - 1);
  };

  return (
    <div className="counter">
      <div className="top-counter">
        <CounterButton number={subtractNumber1} buttonValue="-" />
        <span onClick="">{count1}</span>
        <CounterButton number={addNumber1} buttonValue="+" />
      </div>
      <div className="bottom-counter">
        <CounterButton number={subtractNumber2} buttonValue="-" />
        <input type="text">{count2}</input>
        <CounterButton number={addNumber2} buttonValue="+" />
      </div>
    </div>
  );
}
