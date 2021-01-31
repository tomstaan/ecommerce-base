import { GET_DASHBOARD_STATISTICS } from "../actions/types.js";

const initalState = {
  monthly_sales: 0,
  revenue: 0,
  profit: 0,
  monthly_visitors: 0,
  new_customers: 0,
  all_customers: 0
};

export default function(state = initalState, action) {
  switch (action.type) {
    case GET_DASHBOARD_STATISTICS:
      return {
        ...state,
        monthly_sales: action.payload['monthly_sales'],
        revenue: action.payload['revenue'],
        profit: action.payload['profit'],
        monthly_visitors: action.payload['monthly_visitors'],
        new_customers: action.payload['new_customers'],
        all_customers: action.payload['all_customers']
      };
    default:
      return state;
  }
}
