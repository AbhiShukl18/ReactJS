// in this file, we see that  useRef has an object which has key as current which holds the initial state of useRef



import React, { useEffect, useRef, useState } from "react";

const UseRefComponent = () => {
  const [counter, setCounter] = useState(0);  
  const prevCounter = useRef();   
  console.log(prevCounter, "prevCounter");

  useEffect(() => {
    
    console.log(prevCounter.current, "prevCounter.current1")
    console.log(counter, "counter");
    prevCounter.current = counter;
    console.log(prevCounter.current, "prevCounter.current2")
    // console.log(counter, "prevCounter.current counter")

  }, [counter]);
  return (
    <div>
      <h1>Previous Counter : {prevCounter.current}</h1>
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};
export default UseRefComponent
