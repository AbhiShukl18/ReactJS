// import { ADD, DELETE } from "./Action";   //importing both variable(DECREMENT, INCREMENT) from action file

// const initialState={
//     todo:[], 
// };              // assigning initalstate where counter value is zero

// const todoReducer=(state=initialState, action)=>{    //function in which state is intial state(where value of counter is zero and action-it has an object which has 'type' key

//     switch(action.type){                                    

//         case ADD:                                      // when type key has INCREMENT  then it goes by +1; 
//         return {...state, todo:[state.todo, action.payload]};           //counter= state(initialstate where counter value is 0)+1
//         case DELETE:                                     // when type key has INCREMENT  then it goes by - 1; 
//             return {...state, todo:[state.todo.splice(0 ,1), state.todo]};             //counter= state(initialstate where counter value is 0)- 1
//             default:
//                 return state;
//     }
// };

// export default todoReducer;