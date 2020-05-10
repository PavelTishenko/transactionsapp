

const initState = {
    data: []
}; 

const reducer = (state = initState, action) => {
    switch(action.type) {
        case "LOADED":
            return {
                ...state,
                data: action.payload
            }
        default: 
            return state
    };
    
};

export default reducer;