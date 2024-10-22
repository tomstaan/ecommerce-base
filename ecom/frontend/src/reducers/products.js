import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SELECT_ALL_PRODUCTS,
  HANDLE_PRODUCT_SELECT,
  FILTER_PRODUCTS,
  FILTER_PRICE,
  FILTER_ASCENDING,
  FILTER_DESCENDING,
  FILTER_CATEGORY,
  FILTER_UNITS,
  UPDATE_PICTURES,
  ADD_IMAGE_TO_PRODUCT,
  SET_EDIT_PRODUCT_ID,
  EDIT_PRODUCT,
  SET_SAVED_PICTURES,
  GET_ALL_PRODUCT_IMAGES,
  RESET_REDIRECT,
  UPDATE_EDIT_PICTURES,
  UPDATE_EDIT_DISPLAY_PICTURES,
  UPDATE_EDIT_NEW_PICTURES,
  EDIT_MODE_SELECT,
  DELETE_PRODUCT_IMAGE,
  CLEAR_PRODUCTS_ON_LOGOUT,
} from "../actions/types.js";

const initalState = {
  products: [],
  newProductPictures: [],
  newProdImageId: 0,
  selectAllChecked: false,
  filterValue: "",
  filteredProducts: [],
  filterAsc: true,
  filterDesc: false,
  filterPrice: true,
  filterCategory: false,
  filterUnits: false,
  currentSort: "unit_price",
  editProductId: 0,
  savedProductPictures: [],
  displayProductPictures: [],
  retrievedProductImages: [],
  editNewProductPictures: [],
  redirect_to_product_page: false,
  mode_select_edit: false,
  prodLoadingScreen: true,
};

export default function (state = initalState, action) {
  //Handles the sort type
  function handleSort() {
    let listCopy = state.filteredProducts;

    if (state.filterAsc) {
      //Ascending
      listCopy.sort(function (a, b) {
        var priceA = parseFloat(a[state.currentSort]);
        var priceB = parseFloat(b[state.currentSort]);
        if (priceA < priceB) {
          return -1;
        }
        if (priceA > priceB) {
          return 1;
        }
        // price must be equal
        return 0;
      });
    } else {
      //Descending
      listCopy.sort(function (a, b) {
        var priceA = parseFloat(a[state.currentSort]);
        var priceB = parseFloat(b[state.currentSort]);
        if (priceA > priceB) {
          return -1;
        }
        if (priceA < priceB) {
          return 1;
        }
        // price must be equal
        return 0;
      });
    }
    //Returns sorted List
    state.filteredProducts = listCopy;
  }
  switch (action.type) {
    case GET_PRODUCTS:
      state.filteredProducts = action.payload.map((product) => ({
        ...product,
        selected: false,
      }));
      handleSort();

      return {
        ...state,
        products: action.payload.map((product) => ({
          ...product,
          selected: false,
        })),
        filteredProducts: state.filteredProducts.map((Product) => ({
          ...Product,
        })),
        prodLoadingScreen: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
        filteredProducts: state.filteredProducts.filter(
          (product) => product.id !== action.payload
        ),
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        products: [...state.products],
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        newProdImageId: action.payload.id,
      };
    case SET_EDIT_PRODUCT_ID:
      return {
        ...state,
        editProductId: action.payload,
      };
    case ADD_IMAGE_TO_PRODUCT:
      return {
        ...state,
        redirect_to_product_page: true,
      };
    case RESET_REDIRECT:
      return {
        ...state,
        redirect_to_product_page: false,
      };
    case UPDATE_PICTURES:
      return {
        ...state,
        newProductPictures: action.payload,
      };
    case GET_ALL_PRODUCT_IMAGES:
      return {
        ...state,
        retrievedProductImages: action.payload,
      };
    case EDIT_MODE_SELECT:
      return {
        ...state,
        mode_select_edit: action.payload,
      };
    case SET_SAVED_PICTURES:
      return {
        ...state,
        savedProductPictures: action.payload,
      };
    case HANDLE_PRODUCT_SELECT:
      return {
        ...state,
        products: state.products.map((Product) =>
          Product.id === action.payload
            ? { ...Product, selected: !Product.selected }
            : Product
        ),
        filteredProducts: state.filteredProducts.map((Product) =>
          Product.id === action.payload
            ? { ...Product, selected: !Product.selected }
            : Product
        ),
      };
    case SELECT_ALL_PRODUCTS:
      return {
        ...state,
        selectAllChecked: !state.selectAllChecked,
        products: state.products.map((Product) =>
          Product.selected !== !state.selectAllChecked
            ? { ...Product, selected: !state.selectAllChecked }
            : Product
        ),
        filteredProducts: state.filteredProducts.map((Product) =>
          Product.selected !== !state.selectAllChecked
            ? { ...Product, selected: !state.selectAllChecked }
            : Product
        ),
      };
    case UPDATE_EDIT_PICTURES:
      return {
        ...state,
        savedProductPictures: action.payload,
      };
    case UPDATE_EDIT_DISPLAY_PICTURES:
      return {
        ...state,
        displayProductPictures: action.payload,
      };
    case UPDATE_EDIT_NEW_PICTURES:
      return {
        ...state,
        editNewProductPictures: action.payload.editNewProductPictures,
      };
    case DELETE_PRODUCT_IMAGE:
      return {
        ...state,
      };
    case FILTER_PRODUCTS: {
      handleSort();
      return {
        ...state,
        filterValue: action.payload,
        filteredProducts: state.products.filter((Product) =>
          action.payload === ""
            ? { ...Product }
            : Product.product_name.toLowerCase().includes(action.payload)
        ),
      };
    }
    case FILTER_ASCENDING: {
      state.filterAsc = true;
      state.filterDesc = false;
      handleSort();
      return {
        ...state,
        filterAsc: true,
        filterDesc: false,
        filteredProducts: state.filteredProducts.map((Product) => ({
          ...Product,
        })),
      };
    }
    case FILTER_DESCENDING: {
      state.filterAsc = false;
      state.filterDesc = true;
      handleSort();
      return {
        ...state,
        filterDesc: true,
        filterAsc: false,
        filteredProducts: state.filteredProducts.map((Product) => ({
          ...Product,
        })),
      };
    }
    case FILTER_PRICE: {
      state.filterPrice = true;
      state.filterCategory = false;
      state.filterUnits = false;
      state.currentSort = "unit_price";
      handleSort();
      return {
        ...state,
        filterPrice: true,
        filterCategory: false,
        filterUnits: false,
        filteredProducts: state.filteredProducts.map((Product) => ({
          ...Product,
        })),
      };
    }
    case FILTER_CATEGORY: {
      return {
        ...state,
        filterPrice: false,
        filterCategory: true,
        filterUnits: false,
      };
    }
    case FILTER_UNITS: {
      state.filterPrice = false;
      state.filterCategory = false;
      state.filterUnits = true;
      state.currentSort = "units_in_stock";
      handleSort();
      return {
        ...state,
        filterPrice: false,
        filterCategory: false,
        filterUnits: true,
        filteredProducts: state.filteredProducts.map((Product) => ({
          ...Product,
        })),
      };
    }
    case CLEAR_PRODUCTS_ON_LOGOUT: {
      return {
        ...state,
        products: [],
        newProductPictures: [],
        newProdImageId: 0,
        selectAllChecked: false,
        filterValue: "",
        filteredProducts: [],
        filterAsc: true,
        filterDesc: false,
        filterPrice: true,
        filterCategory: false,
        filterUnits: false,
        currentSort: "unit_price",
        editProductId: 0,
        savedProductPictures: [],
        displayProductPictures: [],
        retrievedProductImages: [],
        editNewProductPictures: [],
        redirect_to_product_page: false,
        mode_select_edit: false,
        prodLoadingScreen: true,
      };
    }
    default:
      return state;
  }
}
