import React, { Component } from "react";
import { BrowserRouter, Link, withRouter, Router } from "react-router-dom";
import { connect, Provider } from "react-redux";
import PropTypes from 'prop-types';
import "./../style/header.css";
//Images
import logo from "./../style/images/headlogo.png";
import settings from "./../style/images/sett.png";

import HeaderLinks from "./HeaderLinks";

import { logout } from "../../actions/auth";

export class Header extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="headerCont">
        <header>
          <div className="headerLmt">
            <div className="col-lg-12">
              <div className="headerLogo">
                <h1>Ecommerce Manager</h1>
              </div>
              <div className="headerUserMenu">
                <ul>
                  <li>
                    <div className="userMenuProfile"></div>
                  </li>
                  <li>
                    <h2 onClick={this.props.logout}>Logout</h2>
                  </li>
                </ul>
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  logout
})(Header);
