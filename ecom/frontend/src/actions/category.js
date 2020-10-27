import axios from "axios";

import { GET_CATEGORY, ADD_CATEGORY } from "./types.js";

//Get Products
export const getCategory = () => dispatch => {
  axios
    .get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/productcat/`)
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
    .post(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/productcat/`, category)
    .then(res => {
      dispatch({
        type: ADD_CATEGORY,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
