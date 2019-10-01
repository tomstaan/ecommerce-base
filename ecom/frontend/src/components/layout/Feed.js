import React, { Component } from "react";
import Products from "./../products/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class Feed extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/products">
              <Products/>
          </Route>
        </Switch>
      </Router>
    );
  }
}
