import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import NewCategory from "../products/NewCategory";
import NewProduct from "../products/NewProduct";
import Products from "../products/Products";
import EditProduct from "../products/EditProduct";
import Sales from "../sales/Transactions"
import Dashboard from "../dashboard/Dashboard"
import Login from '../accounts/Login';
import Register from '../accounts/Register';
import PrivateRoute from "../common/PrivateRoute"
import Settings from "../settings/Settings";
import ChangePassword from "../settings/ChangePassword";

export default class Feed extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute exact path="/products/" component={withRouter(Products)} />
          <PrivateRoute path="/products/newcategory/" component={NewCategory} />
          <PrivateRoute path="/products/newproduct/" component={NewProduct} />
          <PrivateRoute path="/products/editproduct/:id" component={EditProduct} />
          <PrivateRoute exact path="/sales/" component={withRouter(Sales)} />
          <PrivateRoute exact path="/dashboard/" component={withRouter(Dashboard)} />
          <PrivateRoute exact path="/settings/" component={withRouter(Settings)} />
          <PrivateRoute path="/settings/password/" component={ChangePassword} />
          <Route exact path="/register/" component={Register} />
          <Route exact path="/login/" component={Login} />
        </Switch>
      </Router>
    );
  }
}
