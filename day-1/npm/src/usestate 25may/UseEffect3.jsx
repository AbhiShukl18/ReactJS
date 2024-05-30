// single and Multiple dependecies
//useEffect(()=>{code }, [counter1, counter2, counter3....so on]);

import { useEffect, useState } from "react";

function UseEffect3(){
 
const[counter, setCounter]=useState(1);
const[isuserloggedin, setuserlogged]= useState(false);

function switchflag(){

    setuserlogged((prev)=> !prev);
}


useEffect(()=>{
    alert("Welome here!");
}, [counter, isuserloggedin])

    return (


    <div>
        {isuserloggedin? <h1 onClick={switchflag}>Welome...! Logout??</h1> : <h1 onClick={switchflag}>Logged Out.... Please Login</h1> }
        {(counter>=10 && counter<=20)? <h1>Counter is in between 10 and 20</h1>: <h1>Counter is out of Range</h1> }
        <h1>Counter: {counter} </h1>
        <button onClick={()=> setCounter(counter+1)}>+</button>
        <button onClick={()=> setCounter(counter-1)}>-</button>
    </div>


);
}

export default UseEffect3;