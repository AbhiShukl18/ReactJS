import React, { useMemo, useState } from 'react'

const UseMemoComponent = () => {
    const [counter, setCounter]=useState(0);
    // const expcount=ExpensiveCalculation(counter);
    const expcount=useMemo(()=>ExpensiveCalculation(counter), [counter]);

    const[state, setState]=useState("")
  return (
    <div>
      <h1>UseMemo Component</h1>
            <input onChange={(event)=> setState(event.target.value)} />
        <h1>Expensive calculation Count:- {expcount} </h1>
      <h1>Counter:- {counter} </h1>
      <button onClick={()=>setCounter(counter+1)}>+</button>
    </div>
  )
}

function ExpensiveCalculation(counter ){
console.log("Calulating expensive Calculations")
    var totalcount=0;
    for(var i=0; i<100000000; i++){

        totalcount += counter;
    }
return(
    totalcount
);
}

export default UseMemoComponent;
