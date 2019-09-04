import {
  GET_PRODUCTS,
  DELETE_PRODUCT,
  SELECT_ALL_PRODUCTS,
  HANDLE_PRODUCT_SELECT,
  FILTER_PRODUCTS
} from "../actions/types.js";

const initalState = {
  products: [],
  selectAllChecked: false,
  filterValue: "",
  filteredProducts: []
};

export default function(state = initalState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.map(product => ({
          ...product,
          selected: false
        })),
        filteredProducts: action.payload.map(product => ({
          ...product,
          selected: false
        }))
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          product => product.id !== action.payload
        ),
        filteredProducts: state.filteredProducts.filter(
          product => product.id !== action.payload
        )
      };
    case HANDLE_PRODUCT_SELECT:
      return {
        ...state,
        products: state.products.map(Product =>
          Product.id === action.payload
            ? { ...Product, selected: !Product.selected }
            : Product
        ),
        filteredProducts: state.filteredProducts.map(Product =>
          Product.id === action.payload
            ? { ...Product, selected: !Product.selected }
            : Product
        )
      };
    case SELECT_ALL_PRODUCTS:
      return {
        ...state,
        selectAllChecked: !state.selectAllChecked,
        products: state.products.map(Product =>
          Product.selected !== !state.selectAllChecked
            ? { ...Product, selected: !state.selectAllChecked }
            : Product
        ),
        filteredProducts: state.filteredProducts.map(Product =>
          Product.selected !== !state.selectAllChecked
            ? { ...Product, selected: !state.selectAllChecked }
            : Product
        )
      };
    case FILTER_PRODUCTS: {
      return {
        ...state,
        filterValue: action.payload,
        filteredProducts: state.products.filter(Product =>
          Product.product_name.includes(action.payload)
        )
      };
    }
    default:
      return state;
  }
}
