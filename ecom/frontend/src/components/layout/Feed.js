import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewCategory from "../products/NewCategory";
import NewProduct from "../products/NewProduct";
import Products from "../products/Products";

export default class Feed extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/products/" component={Products} />
          <Route exact path="/products/newcategory/" component={NewCategory} />
          <Route exact path="/products/newproduct/" component={NewProduct} />
        </Switch>
      </Router>
    );
  }
}
