import {
  GET_CATEGORY,
  ADD_CATEGORY,
  CLEAR_CATEGORY_ON_LOGOUT,
} from "../actions/types.js";

const initalState = {
  category: [],
};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case ADD_CATEGORY:
      return {
        ...state,
        category: [...state.category, action.payload],
      };
    case CLEAR_CATEGORY_ON_LOGOUT:
      return {
        ...state,
        category: [],
      };
    default:
      return state;
  }
}
