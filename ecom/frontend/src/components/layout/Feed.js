import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import NewCategory from "../products/NewCategory";
import NewProduct from "../products/NewProduct";
import Products from "../products/Products";
import EditProduct from "../products/EditProduct";
import Sales from "../sales/Transactions"
import Dashboard from "../dashboard/Dashboard"

export default class Feed extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/products/" component={Products} />
          <Route path="/products/newcategory/" component={NewCategory} />
          <Route path="/products/newproduct/" component={NewProduct} />
          <Route path="/products/editproduct/:id" component={EditProduct} />
          <Route exact path="/sales/" component={Sales} />
          <Route exact path="/dashboard/" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}
