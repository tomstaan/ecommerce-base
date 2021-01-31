import axios from "axios";

import {
  GET_DASHBOARD_STATISTICS
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