import {
  GET_ALL_SALES,
  FILTER_SALES,
  FILTER_ASCENDING_SALES,
  FILTER_DESCENDING_SALES,
  FILTER_PRICE_SALES,
  FILTER_CATEGORY_SALES,
  FILTER_UNITS_SALES,
} from "../actions/types.js";

const initalState = {
  sales:[], 
};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_ALL_SALES:
      return {
        ...state,
        sales: action.payload
      };
    default:
      return state;
  }
}
