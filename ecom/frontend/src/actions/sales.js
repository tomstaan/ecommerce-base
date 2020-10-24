import axios from "axios";

import {
  GET_ALL_SALES,
  FILTER_SALES,
  FILTER_ASCENDING_SALES,
  FILTER_DESCENDING_SALES,
  FILTER_PRICE_SALES,
  FILTER_CATEGORY_SALES,
  FILTER_UNITS_SALES,
} from "./types.js";

//Get Products
export const getSales = () => (dispatch) => {
  axios
    .get("http://127.0.0.1:8000/api/sales/")
    .then((res) => {
      dispatch({
        type: GET_ALL_SALES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
