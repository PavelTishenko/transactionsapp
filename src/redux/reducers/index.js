

const initState = {
    data: [],
    onEditClicked: false,
    edit: false,
    idEdit: null
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
        case "EDIT_APPROVED":
            return {
                ...state,
                edit: action.payload
            }
        case 'EDIT_ID':
            return {
                ...state,
                idEdit: action.payload
            }            
        default: 
            return state
    };
};

export default reducer;