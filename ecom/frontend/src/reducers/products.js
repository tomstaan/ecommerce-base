import { GET_PRODUCTS } from '../actions/types.js';

const initalState = {
    products: []
}

export default function(state = initalState, action){
    switch(action.type){
        case GET_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}