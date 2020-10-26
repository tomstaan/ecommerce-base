import axios from "axios";

import {
  GET_PRODUCTS,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  SELECT_ALL_PRODUCTS,
  HANDLE_PRODUCT_SELECT,
  FILTER_PRODUCTS,
  FILTER_ASCENDING,
  FILTER_DESCENDING,
  FILTER_PRICE,
  FILTER_CATEGORY,
  FILTER_UNITS,
  UPDATE_PICTURES,
  ADD_IMAGE_TO_PRODUCT,
  SET_EDIT_PRODUCT_ID,
  SET_SAVED_PICTURES,
  GET_ALL_PRODUCT_IMAGES,
  RESET_REDIRECT
} from "./types.js";

//Get Products
export const getProducts = () => (dispatch) => {
  axios
    .get("http://127.0.0.1:8000/api/products/")
    .then((res) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//Delete Products
export const deleteProducts = (id) => (dispatch) => {
  axios
    .delete(`http://127.0.0.1:8000/api/products/${id}/`)
    .then((res) => {
      //Message for adding leads
      dispatch(
        {
          type: DELETE_PRODUCT,
          payload: id,
        },
        console.log(res)
      );
    })
    .catch((err) => console.log(err));
};

// Get Product Images using Image_id
export const getAllProductImages = (productId) => (dispatch) => {
  axios
    .get(`http://127.0.0.1:8000/api/products/${productId}/images/`)
    .then((res) => {
      dispatch({
        type: GET_ALL_PRODUCT_IMAGES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};



//ADD Category
export const addProduct = (product) => (dispatch) => {
  axios
    .post("http://127.0.0.1:8000/api/products/", product)
    .then((res) => {
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//Edit Category
export const editProduct = (product, id) => (dispatch) => {
  axios
    .put(`http://127.0.0.1:8000/api/products/${id}/`, product)
    .then((res) => {
      dispatch({
        type: EDIT_PRODUCT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// Update the pictures to add to new products
export const updateProductPictures = (pictures) => (dispatch) => {
  dispatch({
    type: UPDATE_PICTURES,
    payload: pictures,
  });
};

// Set images which are saved
export const setSavedPictures = (pictures) => (dispatch) => {
  dispatch({
    type: SET_SAVED_PICTURES,
    payload: pictures,
  });
};

//Add product images to id of product
export const addPicsToProd = (picture) => (dispatch) => {

    axios
      .post("http://127.0.0.1:8000/api/productimage/", picture)
      .then((res) => {
        dispatch({
          type: ADD_IMAGE_TO_PRODUCT,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
};

// Set the edit product id
export const setEditProductId = (id) => (dispatch) => {
  dispatch({
    type: SET_EDIT_PRODUCT_ID,
    payload: id,
  });
};

//Select All Products
export const selectAllProducts = () => (dispatch) => {
  dispatch({
    type: SELECT_ALL_PRODUCTS,
  });
};

//Select All Products
export const resetRedirect = () => (dispatch) => {
  dispatch({
    type: RESET_REDIRECT,
  });
};

//Select All Products
export const handleProductSelect = (id) => (dispatch) => {
  dispatch({
    type: HANDLE_PRODUCT_SELECT,
    payload: id,
  });
};

export const filterProducts = (value) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS,
    payload: value,
  });
};

export const filterByAsc = () => (dispatch) => {
  dispatch({
    type: FILTER_ASCENDING,
  });
};

export const filterByDesc = () => (dispatch) => {
  dispatch({
    type: FILTER_DESCENDING,
  });
};

export const filterByPrice = () => (dispatch) => {
  dispatch({
    type: FILTER_PRICE,
  });
};

export const filterByCat = () => (dispatch) => {
  dispatch({
    type: FILTER_CATEGORY,
  });
};

export const filterByUnits = () => (dispatch) => {
  dispatch({
    type: FILTER_UNITS,
  });
};
