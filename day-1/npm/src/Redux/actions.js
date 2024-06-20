
export const INCREMENT= "INCREMENT";    // defining variable INCREMENT whose value is string type "INCREMENT"

export const DECREMENT= "DECREMENT";    // defining variable DECREMENT whose value is string type "DECREMENT"

export const increment=()=>{            // increment function defines which return INCREMENT variable where type is a object

    return {type: INCREMENT};
};

export const decrement=()=> (           // decrement function defines which return DECREMENT variable where type is a object
    {
        type: DECREMENT
    }
);