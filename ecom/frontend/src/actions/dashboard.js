import axios from "axios";

import {
  GET_ALL_SALES,
} from "./types.js";

//Get Products
export const getSales = () => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/sales/`)
    .then((res) => {
      dispatch({
        type: GET_ALL_SALES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};