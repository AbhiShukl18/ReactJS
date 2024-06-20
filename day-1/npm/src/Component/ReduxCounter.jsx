import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/actions';

const ReduxCounter = () => {

    const dispatch=useDispatch();                               // creating a instance of useDispath and assigning into dispatch variable
    const counter= useSelector((state)=>state.counter);           // creating a instance of useSelector and assigning into counter variable where state is initial state of counter i.e 0
  return (
    <div>
      <h1>Counter:- {counter}</h1> <br />
    <span>  <button style={{width: "25px", fontSize:"20px",}} onClick={ () => dispatch(increment())}>+</button></span>    {/* we are calling increment function from action file */}
    <span> <button style={{width: "25px",fontSize:"20px",}} onClick={ () => dispatch(decrement())}>-</button> </span>       {/* we are calling decrement function from action file */}
    </div>
  );
};

export default ReduxCounter;


// we are using dispatch function to change the state 