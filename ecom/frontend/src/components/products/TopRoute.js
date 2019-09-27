import React, { Component } from "react";
import "./../style/toproute.css";

//Images
import Arrow from "./../style/images/return.png";
export default class TopRoute extends Component {
  render() {
    return (
      <div>
        <div className="topRoutingBack">
          <div className="routeCont">
            <h3>Products</h3>
            <div className="routeArrow">
              <img src={Arrow} alt="arrow" title="arrow" />
            </div>
            <h3>New Product</h3>
          </div>
        </div>
      </div>
    );
  }
}
