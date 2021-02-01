import axios from "axios";

import {
  GET_DASHBOARD_STATISTICS,
  GET_DASHBOARD_SALES_GRAPH,
  GET_POPULAR_PRODUCTS
} from "./types.js";

// Get Monthly sales

export const getDashboardStatistics = () => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/dashboard/statistics/`)
    .then((res) => {
      dispatch({
        type: GET_DASHBOARD_STATISTICS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getDashboardSalesGraph = () => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/dashboard/salesgraph/`)
    .then((res) => {
      dispatch({
        type: GET_DASHBOARD_SALES_GRAPH,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getPopularProducts = () => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/dashboard/popularproducts/`)
    .then((res) => {
      dispatch({
        type: GET_POPULAR_PRODUCTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};