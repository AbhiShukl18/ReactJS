import React, { useReducer } from 'react'


function reducer(state, action){

    switch(action.type){

        case "INCREMENT":
        return {...state, counter:state.counter+1 };
        case "DECREMENT":
            return {...state, counter:state.counter-1 };;
        case "RESET":
            return {...state, counter:0};
        default :   
        return state;
    }

}
const initialState={counter: 0};


const Reducer = () => {
    const[state, dispatch]=useReducer(reducer, initialState)
    function Increment(){
        dispatch({type: "INCREMENT"});
    }

    function Decrement(){
        dispatch({type: "DECREMENT"});


    }
    function Reset(){

        dispatch({type: "RESET"});

    }

  return (
    <div>
      <h1>Counter: {state.counter}</h1>
     <h2> <button onClick={Increment}>PLUS</button> 
      <button onClick={Decrement}>MINUS</button>
      <button onClick={Reset}>RESET</button></h2>

    </div>
  )
}

export default Reducer
