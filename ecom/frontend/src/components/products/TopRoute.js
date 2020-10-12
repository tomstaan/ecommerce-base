import React, { Component } from "react";
import "./../style/toproute.css";
import { Link } from "react-router-dom";

//Images
import Arrow from "./../style/images/return.png";
export default class TopRoute extends Component {
  handleRoute() {
    let currentDir = window.location.pathname
      .split("/")
      .pop()
      .trim();
    //return currentDir;
    let editDir = window.location.pathname
    return editDir
  }
  render() {
    return (
      <div>
        <div className="topRoutingBack">
          <div className="routeCont">
            <Link to="/products">
              <h3>Products</h3>
            </Link>
            <div className="routeArrow">
              <img src={Arrow} alt="arrow" title="arrow" />
            </div>
            {this.handleRoute().includes("newcategory") ? <h3>New Category</h3> : ""}
            {this.handleRoute().includes("newproduct") ? <h3>New Product</h3> : ""}
            {this.handleRoute().includes("editproduct") ? <h3>Edit Product</h3> : ""}
          </div>
        </div>
      </div>
    );
  }
}
