import { useState } from "react";

function UseState(){


    const [counter, setcounter]=useState(1);
    const[counter2, setcounter2]= useState(10);
    function Increment(){
        // console.log("abdjkabkd")
        // setcounter(counter+1);
        setcounter((previousvalue)=>previousvalue+1)
    }

    function Decrement(){
        if(counter>1){
        setcounter((previousvalue)=>previousvalue-1)
    }
    
    }
    function Reset(){

        setcounter(1);
    }

    
    function Increment2(){
        // console.log("abdjkabkd")
        // setcounter(counter+1);
            if(counter>  10){
                // setcounter2(counter2+1);
        setcounter2((previousvalue)=>previousvalue+1)
    }
    }

    function Decrement2(){
        if(counter2>10){
            setcounter2((previousvalue)=>previousvalue-1)
    }
    
    }
    function Reset2(){

        setcounter2(10);
    }

    

return <div>
  <h1> Counter1: {counter}</h1>
   <button onClick={Increment}>+ </button> 
   <button onClick={Decrement}>- </button> 
   <button onClick={Reset}>Reset</button>

   <h1> Counter2: {counter2}</h1>
   <button onClick={Increment2}>+ </button> 
   <button onClick={Decrement2}>- </button> 
   <button onClick={Reset2}>Reset</button>
    </div>;

}

export default UseState;