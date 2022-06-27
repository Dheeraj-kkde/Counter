const initialState = 0; 

const reducer1 = (state = initialState, action) => {
    switch(action.type){
        case "Increment":
            return state + action.payload ;
        case "Decrement":
            return state - action.payload ;
        default:
            return state;
    }
}

export default reducer1;