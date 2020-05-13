import { idToEdit } from "../actions";


const initState = {
    products:[],
    onEditClicked: false,
    edit: false,
    idEdit: null
}; 

const reducer = (state = initState, action) => {
    switch(action.type) {
        case "LOADED":
            return {
                ...state,
                products: action.payload
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
        case 'STATUS_CHANGED':
                return{ 
                    ...state, 
                    products: [...state.products, state.products[state.idEdit].Status = action.payload]
                }             
        default: 
            return state
    };
};

export default reducer;