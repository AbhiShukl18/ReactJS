import {createStore} from "redux";                      // creating a store in store.js file
import counterReducer from "./reducers";                

const store= createStore(counterReducer);                   // assigning counterreducer into store variable which is cmoing from create store

export default store;