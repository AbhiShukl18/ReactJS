import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/actions';

const ReduxCounter = () => {

    const dispatch=useDispatch();
    const counter= useSelector((state)=>state.counter);
  return (
    <div>
      <h1>Counter:- {counter}</h1> <br />
    <span>  <button style={{width: "25px", fontSize:"20px",}} onClick={ () => dispatch(increment())}>+</button></span>
    <span> <button style={{width: "25px",fontSize:"20px",}} onClick={ () => dispatch(decrement())}>-</button> </span>
    </div>
  );
};

export default ReduxCounter;
