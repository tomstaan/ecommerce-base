import React, { Component } from "react";
import { BrowserRouter, Link, withRouter, Router } from "react-router-dom";

import dashboard from "./../style/images/dash.png";
import product from "./../style/images/product.png";
import sales from "./../style/images/sales.png";
import { v4 as uuid } from 'uuid';

export class HeaderLinks extends Component {
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
        <BrowserRouter>
          <div className="hlOptions">
            <Link to="/dashboard">
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
            <Link to="/products">
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
            <Link to="/sales">
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
        </BrowserRouter>
      </div>
    );
  }
}


export default HeaderLinks;