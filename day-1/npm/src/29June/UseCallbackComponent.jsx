import React, { Children, memo, useCallback, useState } from 'react'

const UseCallbackComponent = () => {
    const[counter, setCounter]=useState(0);
    const[data, setData]=useState("")
    console.log(data,"data")
    // const Increment=()=>{

    //     setCounter((previous)=>previous+1);
    // }
const Increment=useCallback(()=>{

        setCounter((previous)=>previous+1);
    
},[])
  return (
    <div>
   
   <h1>Use Callbak Component</h1>
   <input onChange={(event)=>setData(event.target.value)}/>
      <MemoComponent counter={counter} Increment={Increment} />
    {/* <button onClick={()=>setCounter((previous)=>previous+1)} > + </button> */}
    </div>
  )
};

const MemoComponent=memo(ChildrenComponent);

function ChildrenComponent({counter, Increment}){
    console.log("Children comp re-rendered");

    return(

        <div>
            <h1>counter:- {counter} </h1>
            <button onClick={Increment}> +</button>
        </div>
    )
};
export default UseCallbackComponent;        
