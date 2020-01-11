import { GET_CATEGORY, ADD_CATEGORY } from "../actions/types.js";

const initalState = {
  category: []
};

export default function(state = initalState, action) {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload
      };
    case ADD_CATEGORY:
      return {
        ...state,
        category: [...state.category, action.payload]
      };
    default:
      return state;
  }
}
