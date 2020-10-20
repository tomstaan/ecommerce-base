import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./../style/header.css";
//Images
import logo from "./../style/images/headlogo.png";
import settings from "./../style/images/sett.png";

import HeaderLinks from "./HeaderLinks";

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
            
            <HeaderLinks/>

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
