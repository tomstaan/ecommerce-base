import { combineReducers } from "redux";
import products from "./products";
import category from "./category";
import sales from "./sales";
import dashboard from "./dashboard";
import auth from "./auth";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  products,
  category,
  sales,
  dashboard,
  auth,
  errors,
  messages,
});
 