import axios from "axios";

import {
  GET_CATEGORY,
} from "./types.js";

//Get Products
export const getCategory = () => dispatch => {
  axios
    .get("api/productcat")
    .then(res => {
      dispatch({
        type: GET_CATEGORY,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
