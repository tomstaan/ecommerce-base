import { GET_PRODUCTS, DELETE_PRODUCT } from "../actions/types.js";

const initalState = {
  products: []
};

export default function(state = initalState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case DELETE_PRODUCT:
      console.log("Action = "+action.payload);
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      };
    default:
      return state;
  }
}
