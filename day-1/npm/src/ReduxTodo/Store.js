import {createStore} from "redux";                      // creating a store in store.js file
import todoReducer from "./Reducer";                

const Store1= createStore(todoReducer);                   // assigning counterreducer into store variable which is cmoing from create store

export default Store1;