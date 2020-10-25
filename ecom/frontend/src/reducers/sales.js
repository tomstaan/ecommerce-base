import {
  GET_ALL_SALES,
  FILTER_SALES,
  FILTER_ASCENDING_SALES,
  FILTER_DESCENDING_SALES,
  FILTER_PRICE_SALES,
  FILTER_DATE_SALES,
  FILTER_NAME_SALES,
} from "../actions/types.js";

const initalState = {
  sales:[], 
  filterValue: "",
  filteredSales: [],
  filterAsc: true,
  filterDesc: false,
  filterPrice: true,
  filterDate: false,
  filterName: false,
  currentSort: "unit_price",

};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_ALL_SALES:
      return {
        ...state,
        sales: action.payload
      };
    case FILTER_SALES:
      console.log("FILTER_SALES")
      return {
        ...state
      }
    case FILTER_ASCENDING_SALES:
      console.log("FILTER_ASCENDING_SALES")
      state.filterAsc = true;
      state.filterDesc = false;
      //handleSort();
      return {
        ...state,
        filterAsc: true,
        filterDesc: false/*,
        filteredProducts: state.filteredProducts.map(Product => ({
          ...Product
        }))*/
      };
    case FILTER_DESCENDING_SALES:
      console.log("FILTER_DESCENDING_SALES")
      state.filterAsc = false;
      state.filterDesc = true;
      //handleSort();
      return {
        ...state,
        filterDesc: true,
        filterAsc: false/*,
        filteredProducts: state.filteredProducts.map(Product => ({
          ...Product
        }))*/
      };
    case FILTER_PRICE_SALES:
      console.log("FILTER_PRICE_SALES")
      state.filterPrice = true;
      state.filterDate = false;
      state.filterName = false;
      state.currentSort = "unit_price";
      //handleSort();
      return {
        ...state,
        filterPrice: true,
        filterDate: false,
        filterName: false/*,
        filteredProducts: state.filteredProducts.map(Product => ({
          ...Product
        }))*/
      };
    case FILTER_DATE_SALES:
      return {
        ...state,
        filterPrice: false,
        filterDate: true,
        filterName: false
      };
    case FILTER_NAME_SALES:
      console.log("FILTER_NAME_SALES")
      state.filterPrice = false;
      state.filterDate = false;
      state.filterName = true;
      state.currentSort = "units_in_stock";
      //handleSort();
      return {
        ...state,
        filterPrice: false,
        filterDate: false,
        filterName: true/*,
        filteredProducts: state.filteredProducts.map(Product => ({
          ...Product
        }))*/
      };
    default:
      return state;
  }
}
