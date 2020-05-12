

const initState = {
    data: [],
    onEditClicked: false
}; 

const reducer = (state = initState, action) => {
    switch(action.type) {
        case "LOADED":
            return {
                ...state,
                data: action.payload
            };
        case "ON_EDIT_CLICK":
            return {
                ...state,
                onEditClicked: action.payload
            }
        case "CLOSE_MODAL":
            return{
                ...state,
                onEditClicked: action.payload
            }        
        default: 
            return state
    };
};

export default reducer;