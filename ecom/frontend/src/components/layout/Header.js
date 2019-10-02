import React, { Component } from "react";
import "./../style/header.css";
//Images
import logo from "./../style/images/headlogo.png";
import dashboard from "./../style/images/dash.png";
import product from "./../style/images/product.png";
import settings from "./../style/images/sett.png";

export default class Header extends Component {
  render() {
    return (
        <div className="headerCont">
          <header>
            <div className="headerLmt">
              <div className="col-lg-12">
                <div className="headerLogo">
                  <img src={logo} alt="Logo" title="Logo" />
                </div>
                <div className="headerUserMenu">
                  <ul>
                    <li>
                      <div className="userMenuProfile"></div>
                    </li>
                    <li>
                      <div className="userMenuMessage">
                        <div className="userMenuMessageAlert"></div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mainSearchCont">
                  <div className="mainSearchBar">
                    <div className="mainSearchIcon">
                      <div className="mainSearchImg"></div>
                    </div>
                    <input
                      type="search"
                      name="mainsearch"
                      id="mainsearch"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="headerLower">
            <div className="headerLmt">
              <div className="col-lg-12">
                <div className="hlOptions">
                  <div className="hlDashboard">
                    <img src={dashboard} alt="Dashboard" title="Dashboard" />
                    <div className="hlDashText">
                      <h2>Dashboard</h2>
                    </div>
                  </div>
                  <div className="hlDashboardActive">
                    <img src={product} alt="ProductsActive" title="Products" />
                    <div className="hlDashText">
                      <h2>Products</h2>
                    </div>
                  </div>
                </div>
                <div className="hlSettings">
                  <img src={settings} alt="Settings" title="Settings" />
                  <div className="hlSettText">
                    <h2>Settings</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
