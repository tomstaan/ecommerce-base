import axios from "axios";

import { GET_PRODUCTS, DELETE_PRODUCT } from "./types.js";

//Get Products
export const getProducts = () => dispatch => {
  axios
    .get("api/products")
    .then(res => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//Delete Tasks
export const deleteProducts = id => (dispatch) => {
    axios
      .delete(`/api/products/${id}/`)
      .then(res => {
        //Message for adding leads
        dispatch({
          type: DELETE_PRODUCT,
          payload: id
        });
      })
      .catch(err => console.log(err));
};

