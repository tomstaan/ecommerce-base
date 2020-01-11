import axios from "axios";

import { GET_CATEGORY, ADD_CATEGORY } from "./types.js";

//Get Products
export const getCategory = () => dispatch => {
  axios
    .get("http://127.0.0.1:8000/api/productcat/")
    .then(res => {
      dispatch({
        type: GET_CATEGORY,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//ADD Category
export const addCategory = category => dispatch => {
  axios
    .post("http://127.0.0.1:8000/api/productcat/", category)
    .then(res => {
      dispatch({
        type: ADD_CATEGORY,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
