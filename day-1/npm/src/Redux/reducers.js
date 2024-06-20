import { DECREMENT, INCREMENT } from "./actions";   //importing both variable(DECREMENT, INCREMENT) from action file

const initialState={counter: 0};                    // assigning initalstate where counter value is zero

const counterReducer=(state=initialState, action)=>{    //function in which state is intial state(where value of counter is zero and action-it has an object which has 'type' key

    switch(action.type){                                    

        case INCREMENT:                                      // when type key has INCREMENT  then it goes by +1; 
        return {...state, counter: state.counter+1};           //counter= state(initialstate where counter value is 0)+1
        case DECREMENT:                                     // when type key has INCREMENT  then it goes by - 1; 
            return {...state, counter:state.counter-1};             //counter= state(initialstate where counter value is 0)- 1
            default:
                return state;
    }
};

export default counterReducer;