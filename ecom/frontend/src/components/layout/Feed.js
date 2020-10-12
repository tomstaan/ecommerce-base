import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewCategory from "../products/NewCategory";
import NewProduct from "../products/NewProduct";
import Products from "../products/Products";
import EditProduct from "../products/EditProduct";

export default class Feed extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/products/" component={Products} />
          <Route path="/products/newcategory/" component={NewCategory} />
          <Route path="/products/newproduct/" component={NewProduct} />
          <Route path="/products/editproduct/:id" component={EditProduct} />
        </Switch>
      </Router>
    );
  }
}
