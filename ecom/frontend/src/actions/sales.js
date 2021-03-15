import axios from "axios";

import {
  GET_ALL_SALES,
  FILTER_SALES,
  FILTER_ASCENDING_SALES,
  FILTER_DESCENDING_SALES,
  FILTER_PRICE_SALES,
  FILTER_DATE_SALES,
  FILTER_QUANTITY_SALES,
} from "./types.js";

import { tokenConfig } from './auth';

//Get Products
export const getSales = () => (dispatch, getState) => {
  axios
    .get(`${process.env.REACT_APP_HOST_PROD_IP_ADDRESS}/api/sales/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_ALL_SALES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const filterSales = (value) => (dispatch) => {
  dispatch({
    type: FILTER_SALES,
    payload: value,
  });
};

export const filterByAsc = () => (dispatch) => {
  dispatch({
    type: FILTER_ASCENDING_SALES,
  });
};

export const filterByDesc = () => (dispatch) => {
  dispatch({
    type: FILTER_DESCENDING_SALES,
  });
};

export const filterByPrice = () => (dispatch) => {
  dispatch({
    type: FILTER_PRICE_SALES,
  });
};

export const filterByDate = () => (dispatch) => {
  dispatch({
    type: FILTER_DATE_SALES,
  });
};

export const filterByQuantity = () => (dispatch) => {
  dispatch({
    type: FILTER_QUANTITY_SALES,
  });
};