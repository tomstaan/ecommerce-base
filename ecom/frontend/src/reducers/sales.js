import {
  GET_ALL_SALES,
  FILTER_SALES,
  FILTER_ASCENDING_SALES,
  FILTER_DESCENDING_SALES,
  FILTER_PRICE_SALES,
  FILTER_DATE_SALES,
  FILTER_QUANTITY_SALES,
} from "../actions/types.js";

const initalState = {
  sales: [],
  filterValue: "",
  filteredSales: [],
  filterAsc: true,
  filterDesc: false,
  filterPrice: true,
  filterDate: false,
  filterQuantity: false,
  currentSort: "price",
  tranLoadingScreen: true,
};

export default function (state = initalState, action) {
  //Handles the sort type
  function handleSort() {
    let listCopy = state.filteredSales;

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
    state.filteredSales = listCopy;
  }
  switch (action.type) {
    case GET_ALL_SALES:
      state.filteredSales = action.payload.map((Sale) => ({
        ...Sale,
      }));
      handleSort();

      return {
        ...state,
        sales: action.payload.map((sale) => ({
          ...sale,
        })),
        filteredSales: state.filteredSales.map((Sale) => ({
          ...Sale,
        })),
        tranLoadingScreen: false,
      };
    case FILTER_SALES: {
      handleSort();
      return {
        ...state,
        filterValue: action.payload,
        filteredSales: state.sales.filter((Sale) =>
          action.payload === ""
            ? { ...Sale }
            : Sale.name.toLowerCase().includes(action.payload)
            ? Sale.name.toLowerCase().includes(action.payload)
            : Sale.product_details.order_id
                .toLowerCase()
                .includes(action.payload)
            ? Sale.product_details.order_id
                .toLowerCase()
                .includes(action.payload)
            : Sale.customer_email.toLowerCase().includes(action.payload)
            ? Sale.customer_email.toLowerCase().includes(action.payload)
            : ""
        ),
      };
    }
    case FILTER_ASCENDING_SALES: {
      console.log("FILTER_ASCENDING_SALES");
      state.filterAsc = true;
      state.filterDesc = false;
      handleSort();
      return {
        ...state,
        filterAsc: true,
        filterDesc: false,
        filteredSales: state.filteredSales.map((Sale) => ({
          ...Sale,
        })),
      };
    }
    case FILTER_DESCENDING_SALES: {
      console.log("FILTER_DESCENDING_SALES");
      state.filterAsc = false;
      state.filterDesc = true;
      handleSort();
      return {
        ...state,
        filterDesc: true,
        filterAsc: false,
        filteredSales: state.filteredSales.map((Sale) => ({
          ...Sale,
        })),
      };
    }
    case FILTER_PRICE_SALES: {
      console.log("FILTER_PRICE_SALES");
      state.filterPrice = true;
      state.filterDate = false;
      state.filterQuantity = false;
      state.currentSort = "price";
      return {
        ...state,
        filterPrice: true,
        filterDate: false,
        filterQuantity: false,
        filteredSales: state.filteredSales.map((Sale) => ({
          ...Sale,
        })),
      };
    }
    case FILTER_DATE_SALES: {
      console.log("FILTER_DATE_SALES");
      state.filterPrice = false;
      state.filterDate = true;
      state.filterQuantity = false;
      state.currentSort = "date";
      handleSort();
      return {
        ...state,
        filterPrice: false,
        filterDate: true,
        filterQuantity: false,
        filteredSales: state.filteredSales.map((Sale) => ({
          ...Sale,
        })),
      };
    }
    case FILTER_QUANTITY_SALES: {
      console.log("FILTER_NAME_SALES");
      state.filterPrice = false;
      state.filterDate = false;
      state.filterQuantity = true;
      state.currentSort = "name";
      handleSort();
      return {
        ...state,
        filterPrice: false,
        filterDate: false,
        filterQuantity: true,
        filteredSales: state.filteredSales.map((Sale) => ({
          ...Sale,
        })),
      };
    }
    default:
      return state;
  }
}
