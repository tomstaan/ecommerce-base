import {
  GET_PRODUCTS,
  DELETE_PRODUCT,
  SELECT_ALL_PRODUCTS,
  HANDLE_PRODUCT_SELECT,
  FILTER_PRODUCTS,
  FILTER_PRICE,
  FILTER_ASCENDING,
  FILTER_DESCENDING,
  FILTER_CATEGORY,
  FILTER_UNITS
} from "../actions/types.js";

const initalState = {
  products: [],
  selectAllChecked: false,
  filterValue: "",
  filteredProducts: [],
  filterAsc: true,
  filterDesc: false,
  filterPrice: true,
  filterCategory: false,
  filterUnits: false
};

//const sortByKey = key => (a, b) => a[key] > b[key];

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
          Product.product_name.toLowerCase().includes(action.payload)
        )
      };
    }
    case FILTER_ASCENDING: {
      const priceSorted = state.filteredProducts.unit_price.sort(
        (a, b) => a - b
      );
      console.log(priceSorted);
      return {
        ...state,
        filterAsc: true,
        filterDesc: false,
        filteredProducts: priceSorted
      };
    }
    case FILTER_DESCENDING: {
      return {
        ...state,
        filterDesc: true,
        filterAsc: false
      };
    }
    case FILTER_PRICE: {
      //const priceSorted = state.filteredProducts.slice().sort(sortByKey("unit_price"));
      function compare(a, b) {
        if (a.unit_price < b.unit_price) {
          return -1;
        }
        if (a.unit_price > b.unit_price) {
          return 1;
        }
        return 0;
      }
      const priceSorted = state.filteredProducts.sort(compare);
      console.log(priceSorted);
      return {
        ...state,
        filterPrice: true,
        filterCategory: false,
        filterUnits: false,
        filteredProducts: priceSorted
      };
    }
    case FILTER_CATEGORY: {
      return {
        ...state,
        filterPrice: false,
        filterCategory: true,
        filterUnits: false
      };
    }
    case FILTER_UNITS: {
      return {
        ...state,
        filterPrice: false,
        filterCategory: false,
        filterUnits: true
      };
    }
    default:
      return state;
  }
}
