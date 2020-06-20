import axios from "axios";

import {
  GET_PRODUCTS,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  SELECT_ALL_PRODUCTS,
  HANDLE_PRODUCT_SELECT,
  FILTER_PRODUCTS,
  FILTER_ASCENDING,
  FILTER_DESCENDING,
  FILTER_PRICE,
  FILTER_CATEGORY,
  FILTER_UNITS,
  UPDATE_PICTURES,
  ADD_IMAGE_TO_PRODUCT
} from "./types.js";

//Get Products
export const getProducts = () => dispatch => {
  axios
    .get("http://127.0.0.1:8000/api/products/") 
    .then(res => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//Delete Products
export const deleteProducts = id => dispatch => {
  axios
    .delete(`http://127.0.0.1:8000/api/products/${id}/`)
    .then(res => {
      //Message for adding leads
      dispatch({
        type: DELETE_PRODUCT,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

//ADD Category
export const addProduct = product => dispatch => {
  axios
    .post("http://127.0.0.1:8000/api/products/", product)
    .then(res => {
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// Update the pictures to add to new products
export const updateProductPictures = pictures => dispatch => {
  dispatch({
    type: UPDATE_PICTURES,
    payload: pictures
  });
};

//Add product images to id of product
export const addPicsToProd = picture => dispatch => {
  axios
    .post("http://127.0.0.1:8000/api/productimage/", picture)
    .then(res => {
      dispatch({
        type: ADD_IMAGE_TO_PRODUCT,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//Select All Products
export const selectAllProducts = () => dispatch => {
  dispatch({
    type: SELECT_ALL_PRODUCTS
  });
};

//Select All Products
export const handleProductSelect = id => dispatch => {
  dispatch({
    type: HANDLE_PRODUCT_SELECT,
    payload: id
  });
};

export const filterProducts = value => dispatch => {
  dispatch({
    type: FILTER_PRODUCTS,
    payload: value
  });
};

export const filterByAsc = () => dispatch => {
  dispatch({
    type: FILTER_ASCENDING
  });
};

export const filterByDesc = () => dispatch => {
  dispatch({
    type: FILTER_DESCENDING
  });
};

export const filterByPrice = () => dispatch => {
  dispatch({
    type: FILTER_PRICE
  });
};

export const filterByCat = () => dispatch => {
  dispatch({
    type: FILTER_CATEGORY
  });
};

export const filterByUnits = () => dispatch => {
  dispatch({
    type: FILTER_UNITS
  });
};
