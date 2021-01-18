import React, { Component } from "react";
import "./../style/dashboard.css";

import TopMonitor from "./TopMonitor";
import SalesGraph from "./SalesGraph";
import PopularItems from "./PopularItems";
import CategoryItems from "./CategoryItems.js"

export default class Dashboard extends Component {
  render() {
    return (
      <div>
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
