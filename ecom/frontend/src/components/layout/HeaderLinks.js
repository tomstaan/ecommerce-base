import React, { Component } from "react";
import { BrowserRouter, Link, withRouter, Router } from "react-router-dom";
import { connect, Provider } from "react-redux";

import dashboard from "./../style/images/dash.png";
import product from "./../style/images/product.png";
import sales from "./../style/images/sales.png";
import { v4 as uuid } from 'uuid';

import { redirectUrl } from "../../actions/auth"

export class HeaderLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectUrl: "",
    };
  }

  handleRoute() {
    //return currentDir;
    let editDir = window.location.pathname;
    return editDir;
  }

  reloadFunc() {
      window.location.reload()
      return false;
  }

  render() {
    return (
      <div>
          <div className="hlOptions">
            <Link to="/dashboard" onClick={this.props.redirectUrl("/dashboard/")}>
            <div className={
                  this.handleRoute().includes("/dashboard")
                    ? "hlDashboardActive"
                    : "hlDashboard"
                }>
              <img src={dashboard} alt="Dashboard" title="Dashboard" />
              <div className="hlDashText">
                <h2>Dashboard</h2>
              </div>
            </div>
            </Link>
            <Link to="/products" onClick={this.props.redirectUrl("/products/")}>
              <div
                className={
                  this.handleRoute().includes("/products")
                    ? "hlDashboardActive"
                    : "hlDashboard"
                }
              >
                <img src={product} alt="ProductsActive" title="Products" />
                <div className="hlDashText">
                  <h2>Products</h2>
                </div>
              </div>
            </Link>
            <Link to="/sales" onClick={this.props.redirectUrl("/sales/")}>
              <div
                className={
                  this.handleRoute().includes("/sales")
                    ? "hlDashboardActive"
                    : "hlDashboard"
                }
              >
                <img src={sales} alt="ProductsActive" title="Products" />
                <div className="hlDashText">
                  <h2>Sales</h2>
                </div>
              </div>
            </Link>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  redirectUrl: state.auth.redirectUrl,
});

export default connect(mapStateToProps, {
  redirectUrl
})(HeaderLinks);
