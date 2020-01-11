import React, { Component } from "react";
import "./../style/products.css";
import Options from "./Options";
import ProductList from "./ProductList";

export default class Products extends Component {
  render() {
    return (
      <div>
          <Options />
          <ProductList />
        </div>
    );
  }
}
