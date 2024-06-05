// function FunctionProp(){


//     function HandleClick(){

//         alert("CLICKED")
//     }

//     return (

//         <div>
//             <h1>FunctionProp</h1>
//             {/* function keyword can not be use in component */}
//             <ChildrenComponent buttonValue="Click Me" HandleClick={HandleClick}></ChildrenComponent>   
//             </div>
//     );
// }


// function ChildrenComponent({buttonValue, HandleClick}){

//     return <button onClick={HandleClick}>{buttonValue}</button>
// }

import { useState } from "react";


function FunctionProp(){

const[counter, setcounter]=useState(1);

function Increment(){

    setcounter(counter+1);

}
    return (
    <div>
        <h1>FunctionProp</h1>
        <h1>Counter:{counter} </h1>
        <ChildrenComponent Increment={Increment}></ChildrenComponent>
    </div>
    );
}


function ChildrenComponent({Increment}){

    return(
        <button onClick={Increment}>CLICK FOR + </button>
    );
}
export default FunctionProp;