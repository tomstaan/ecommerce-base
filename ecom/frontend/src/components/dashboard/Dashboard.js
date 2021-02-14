import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import "./../style/dashboard.css";

import TopMonitor from "./TopMonitor";
import SalesGraph from "./SalesGraph";
import PopularItems from "./PopularItems";
import CategoryItems from "./CategoryItems.js";
import { Fragment } from "react";
import Header from "./../layout/Header"

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <div
          className={
            this.props.dashLoadingScreen
              ? "loadingBackground"
              : "loadingBackgroundHidden"
          }
        >
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
        <div className="dashboardBaseContainer">
          <TopMonitor />
          <SalesGraph />
          <PopularItems />
          <CategoryItems />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dashLoadingScreen: state.dashboard.dashLoadingScreen,
});

export default connect(mapStateToProps, {})(Dashboard);
