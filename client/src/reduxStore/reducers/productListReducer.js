import { SET_USHOP_PRODUCT } from "../actions/types";

const initState = []

const productListReducer = (state = initState, action) => {
    switch(action.type){
        case SET_USHOP_PRODUCT:
            return [...state, ...action.data];
        default:
            return state;
    }
}

export default productListReducer;