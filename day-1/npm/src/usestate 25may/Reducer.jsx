//useReducer(function, initialstate)

import React, { useReducer } from "react";

function reducer(state, action) {               //action-it has an object which has 'type' key, state= {counter:0}
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "RESET":
      return { ...state, counter: 0 };
    default:
      return state;
  }
}
const initialState = { counter: 0 };

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);   //dispatch is function
  function Increment() {
    dispatch({ type: "INCREMENT" });
  }

  function Decrement() {
    dispatch({ type: "DECREMENT" });
  }
  function Reset() {
    dispatch({ type: "RESET" });
  }

  return (
    <div>
      <h1>Counter: {state.counter}</h1>
      <h2>
        {" "}
        <button onClick={Increment}>PLUS</button>
        <button onClick={Decrement}>MINUS</button>
        <button onClick={Reset}>RESET</button>
      </h2>
    </div>
  );
};

export default Reducer;



// Execution(In case of PLUS):-
// 1. Line no 37
// 2. Line no 21,22
// 3. Line no 20
// 4. Line no 5
// 5. Line no 7
