import axios from "axios";

import { GET_CATEGORY, ADD_CATEGORY } from "./types.js";
import { tokenConfig } from './auth';

//Get Products
export const getCategory = () => (dispatch, getState) => {
  axios
    .get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/productcat/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_CATEGORY,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//ADD Category
export const addCategory = category => (dispatch, getState) => {
  axios
    .post(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/productcat/`, category, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: ADD_CATEGORY,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
