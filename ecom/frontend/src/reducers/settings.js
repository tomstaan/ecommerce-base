import {
    GET_SETTINGS,
    CREATE_SETTINGS,
    UPDATE_SETTINGS
  } from "../actions/types.js";
  
  const initalState = {
    profile_pic: "",
    profile_pic_url: "",
    storename: "",
    exists: false,
    settingsLoadingScreen: true,
  };
  
  export default function (state = initalState, action) {
    switch (action.type) {
      case GET_SETTINGS:
        return {
          ...state,
          profile_pic: action.payload.profile_pic,
          storename: action.payload.store_name,
          exists: true,
          settingsLoadingScreen: false,
        };
      case CREATE_SETTINGS:
        return {
          ...state,
          profile_pic: settings.profile_pic,
          storename: settings.storename,
          exists: true
        }
      case UPDATE_SETTINGS:
        return {
          ...state,
          profile_pic: action.payload.profile_pic,
          storename: action.payload.store_name,
          settingsLoadingScreen: false,
        }
      default:
        return state;
    }
  }
  