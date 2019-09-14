import {
  GET_CATEGORY
} from "../actions/types.js";

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
    default:
      return state;
  }
}
