import { combineReducers } from "redux";
import products from "./products";
import category from "./category";

export default combineReducers({
  products,
  category
});
