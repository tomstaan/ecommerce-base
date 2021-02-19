import axios from "axios";

import {
  GET_DASHBOARD_STATISTICS,
  GET_DASHBOARD_SALES_GRAPH,
  GET_POPULAR_PRODUCTS,
  GET_USER_COUNTRIES
} from "./types.js";

import { createMessage, returnErrors } from './messages';

import { tokenConfig } from './auth';

// Get Monthly sales

export const getDashboardStatistics = () => (dispatch, getState) => {
  axios
    .get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/dashboard/statistics/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_DASHBOARD_STATISTICS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getDashboardSalesGraph = () => (dispatch, getState) => {
  axios
    .get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/dashboard/salesgraph/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_DASHBOARD_SALES_GRAPH,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getPopularProducts = () => (dispatch, getState) => {
  axios
    .get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/dashboard/popularproducts/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_POPULAR_PRODUCTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getUserCountries = () => (dispatch, getState) => {
  axios
    .get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/dashboard/usercountries/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_USER_COUNTRIES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};