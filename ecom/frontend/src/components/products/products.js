import React, { Component } from "react";
import "./../style/products.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewProduct from "./NewProduct";

import Options from "./Options";
import ProductList from "./ProductList";
import NewCategory from "./NewCategory";

export default class Products extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/products/newcategory">
              <NewCategory></NewCategory>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
