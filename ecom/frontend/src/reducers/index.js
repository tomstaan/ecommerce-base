import { combineReducers } from "redux";
import products from "./products";
import category from "./category";
import sales from "./sales"

export default combineReducers({
  products,
  category,
  sales
});
