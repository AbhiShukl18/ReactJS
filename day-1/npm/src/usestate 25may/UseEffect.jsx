//No dependency
//useEffect(()=> {code});


import { useEffect, useState } from "react"

function UseEffect(){
const [counter, setCounter] = useState(1);
const [counter2, setCounter2]= useState(10);

useEffect(()=> {
    alert("Inside Function");
});

    return (<div>
        <h1>Counter: {counter}</h1>
        <button onClick={()=> setCounter(counter+1)}>+</button>
        <h1>Counter2: {counter2} </h1>
        <button onClick={()=> setCounter2(counter2+1)}>+</button>

        <h2>Use Effect</h2>
    </div>
    );
}

export default UseEffect;