import { GET_MONTHLY_SALES } from "../actions/types.js";

const initalState = {
  monthly_sales: 0
};

export default function(state = initalState, action) {
  switch (action.type) {
    case GET_MONTHLY_SALES:
      return {
        ...state,
        category: action.payload
      };
    default:
      return state;
  }
}
