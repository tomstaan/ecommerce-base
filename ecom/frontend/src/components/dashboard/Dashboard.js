import React, { Component } from "react";
import "./../style/dashboard.css";

import TopMonitor from './TopMonitor';


export default class Dashboard extends Component {
  render() {
    return (
      <div>
         <TopMonitor/>
        </div>
    );
  }
}