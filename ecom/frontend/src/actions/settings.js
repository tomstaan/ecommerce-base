import axios from "axios";

import { GET_SETTINGS, CREATE_SETTINGS, UPDATE_SETTINGS } from "./types.js";

import { tokenConfig } from "./auth";

import { createMessage, returnErrors } from './messages';

//Get Products
export const getSettings = () => (dispatch, getState) => {
  axios
    .get(
      `${process.env.REACT_APP_HOST_PROD_IP_ADDRESS}/api/store/settings/`,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: GET_SETTINGS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//Get Products
export const createSettings = (settings) => (dispatch, getState) => {
  axios
    .post(
      `${process.env.REACT_APP_HOST_PROD_IP_ADDRESS}/api/store/settings/`,
      settings,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch(createMessage({ settings: 'Settings Saved' }));
      dispatch({
        type: CREATE_SETTINGS,
        payload: res.data,
        settings: settings
      });
    })
    .catch((err) => console.log(err));
};


//Get Products
export const updateSettings = (settings, id) => (dispatch, getState) => {
  axios
    .put(
      `${process.env.REACT_APP_HOST_PROD_IP_ADDRESS}/api/store/settings/${id}/`,
      settings,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch(createMessage({ settings: 'Settings Updated' }));
      dispatch({
        type: UPDATE_SETTINGS,
        payload: res.data
      });
    })
    .catch((err) => console.log(err));
};