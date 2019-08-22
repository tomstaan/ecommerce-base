import axios from "axios";

import { GET_PRODUCTS, DELETE_PRODUCT, SELECT_ALL_PRODUCTS } from "./types.js";

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

//Delete Products
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

//Select All Products
export const selectAllProducts = () => (dispatch) => {
  dispatch({
    type: SELECT_ALL_PRODUCTS
  });
};
