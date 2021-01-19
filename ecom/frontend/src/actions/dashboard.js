import axios from "axios";

import {
  GET_MONTHLY_SALES
} from "./types.js";

// Get Monthly sales
export const getMonthlySales = (value) => (dispatch) => {
  dispatch({
    type: GET_MONTHLY_SALES,
    payload: value,
  });
};