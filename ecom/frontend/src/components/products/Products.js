import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import "./../style/products.css";
import "./../style/dashboard.css";
import Options from "./Options";
import ProductList from "./ProductList";

import { Fragment } from "react";


export class Products extends Component {
  render() {
    return (
      <div>
        <div className={this.props.prodLoadingScreen ? "loadingBackground" : "loadingBackgroundHidden"}>
          <div className="loadingBox">
            <Fragment>
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </Fragment>
          </div>
        </div>
          <Options />
          <ProductList />
        </div>
    );
  }
}


const mapStateToProps = (state) => ({
  prodLoadingScreen: state.products.prodLoadingScreen
});

export default connect(mapStateToProps, {
})(Products);