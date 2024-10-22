import axios from "axios";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REDIRECT_URL,
  CHANGE_USERNAME,
  CHANGE_PASSWORD
} from "./types";

import { createMessage, returnErrors } from "./messages";

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });
  axios
    .get(
      `${process.env.REACT_APP_HOST_PROD_IP_ADDRESS}/api/auth/user`,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// LOGIN USER
export const login = (username, password) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ username, password });

  axios
    .post(
      `${process.env.REACT_APP_HOST_PROD_IP_ADDRESS}/api/auth/login`,
      body,
      config
    )
    .then((res) => {
      dispatch(createMessage({ login: "Login Successful" }));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// REGISTER USER
export const register = ({ username, password, email }) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ username, email, password });

  axios
    .post(
      `${process.env.REACT_APP_HOST_PROD_IP_ADDRESS}/api/auth/register`,
      body,
      config
    )
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  axios
    .post(
      `${process.env.REACT_APP_HOST_PROD_IP_ADDRESS}/api/auth/logout`,
      null,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({ type: "CLEAR_DASHBOARD_ON_LOGOUT" });
      dispatch({ type: "CLEAR_CATEGORY_ON_LOGOUT" });
      dispatch({ type: "CLEAR_PRODUCTS_ON_LOGOUT" });
      dispatch({ type: "CLEAR_SALES_ON_LOGOUT" });
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// CHANGE USERNAME
export const changeUsername = (username, user_id) => (dispatch, getState) => {
  axios
    .patch(
      `${process.env.REACT_APP_HOST_PROD_IP_ADDRESS}/api/auth/change/username/${user_id}`,
      username,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: CHANGE_USERNAME,
        payload: username
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// CHANGE USERNAME
export const changePassword = (password, user_id) => (dispatch, getState) => {
  axios
    .patch(
      `${process.env.REACT_APP_HOST_PROD_IP_ADDRESS}/api/auth/change/password/${user_id}`,
      password,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch(createMessage({ password: "Password Changed" }));
      dispatch({
        type: CHANGE_PASSWORD,
        payload: username
      });
    })
    .catch((err) =>
      dispatch(returnErrors("password", "error changing password"))
    );
};

// LOGOUT USER
export const redirectUrl = (url) => (dispatch) => {
  dispatch({
    type: REDIRECT_URL,
    payload: url,
  });
};

// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
