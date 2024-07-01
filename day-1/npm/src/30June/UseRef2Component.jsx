

// in this file we see, that useRef is not render the page so it just increasing the counter value in backend so when we use useState which render thepage and increase the value of state counter as well as Ref counter.

import React, { useRef, useState } from 'react'

const UseRef2Component = () => {
    const[counter, setCounter]=useState(10);
    const counterRef=useRef(0);
function Increment(){

    counterRef.current++;
    console.log("Current Counter", counterRef.current)
}
  return (
    <div>
      <h1>State Counter: {counter} </h1>
      <button onClick={()=> setCounter(counter+1)}>++</button>

      <h1>Ref Counter:- {counterRef.current} </h1>
      <button onClick={Increment}>++</button>
    </div>
  )
}

export default UseRef2Component
