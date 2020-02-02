import React, { useState } from "react";
import CounterButton from "./CounterButton";

export default function Counter1() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(100);

  const addNumber1 = () => {
    setCount1(count1 => count1 + 1);
  };
  const subtractNumber1 = () => {
    setCount1(count1 => count1 - 1);
  };

  const addNumber2 = () => {
    setCount2(count2 => count2 + 1);
  };
  const subtractNumber2 = () => {
    setCount2(count2 => count2 - 1);
  };

  return (
    <div className="counter">
      <div className="top-counter">
        <CounterButton number={subtractNumber1} buttonValue="-" />
        <input type="number" onChange={e => setCount1(e.target.value)} value={count1}/>
        <CounterButton number={addNumber1} buttonValue="+" />
      </div>
      <div className="bottom-counter">
        <CounterButton number={subtractNumber2} buttonValue="-" />
        <input type="number" onChange={e => setCount2(e.target.value)} value={count2}/>
        <CounterButton number={addNumber2} buttonValue="+" />
      </div>
      
    </div>
  );
}
