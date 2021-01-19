import React, { Component } from "react";
import "./../style/dashboard.css";

// Images
import SalesImg from "./../style/images/salesimg.png";
import Revenue from "./../style/images/revenue.png";
import Profit from "./../style/images/profit.png";
import MonthlyVis from "./../style/images/monthlyvisitors.png";
import NewCustomers from "./../style/images/newcustomers.png";
import Customers from "./../style/images/customers.png";
import UpPointer from "./../style/images/UpPointer.png";
import DownPointer from "./../style/images/DownPointer.png";

export default class TopMonitor extends Component {
  render() {
    return (
      <div>
        <div className="topMonitorContainer">
          <div className="topMonitorBox">
            <div className="topMonitorInsideBox">
              <div className="topMonitorBoxImg">
                <img src={SalesImg} alt="Sales" title="Sales" />
              </div>
              <div className="topMonitorInfoBox">
                <div className="topMonitorInfoBoxTop">
                  <img src={UpPointer} alt="UpPointer" title="UpPointer" />
                  <h3 className="topMonitorInfoText">4382</h3>
                </div>
                <div className="topMonitorInfoBoxBottom">
                  <h3 className="topMonitorInfoDesc">Monthly Sales</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="topMonitorBox">
            <div className="topMonitorInsideBox">
              <div className="topMonitorBoxImg">
                <img src={Revenue} alt="Sales" title="Sales" />
              </div>
              <div className="topMonitorInfoBox">
                <div className="topMonitorInfoBoxTop">
                  <img src={UpPointer} alt="UpPointer" title="UpPointer" />
                  <h3 className="topMonitorInfoText">$6103</h3>
                </div>
                <div className="topMonitorInfoBoxBottom">
                  <h3 className="topMonitorInfoDesc">Revenue</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="topMonitorBox">
            <div className="topMonitorInsideBox">
              <div className="topMonitorBoxImg">
                <img src={Profit} alt="Sales" title="Sales" />
              </div>
              <div className="topMonitorInfoBox">
                <div className="topMonitorInfoBoxTop">
                  <img src={UpPointer} alt="UpPointer" title="UpPointer" />
                  <h3 className="topMonitorInfoText">$5282</h3>
                </div>
                <div className="topMonitorInfoBoxBottom">
                  <h3 className="topMonitorInfoDesc">Profit</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="topMonitorBox">
            <div className="topMonitorInsideBox">
              <div className="topMonitorBoxImg">
                <img src={MonthlyVis} alt="Sales" title="Sales" />
              </div>
              <div className="topMonitorInfoBox">
                <div className="topMonitorInfoBoxTop">
                  <img src={UpPointer} alt="UpPointer" title="UpPointer" />
                  <h3 className="topMonitorInfoText">228</h3>
                </div>

                <div className="topMonitorInfoBoxBottom">
                  <h3 className="topMonitorInfoDesc">Monthly Visits</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="topMonitorBox">
            <div className="topMonitorInsideBox">
              <div className="topMonitorBoxImg">
                <img src={NewCustomers} alt="Sales" title="Sales" />
              </div>
              <div className="topMonitorInfoBox">
                <div className="topMonitorInfoBoxTop">
                  <img src={DownPointer} alt="UpPointer" title="UpPointer" />
                  <h3 className="topMonitorInfoText">-13</h3>
                </div>
                <div className="topMonitorInfoBoxBottom">
                  <h3 className="topMonitorInfoDesc">New Customers</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="topMonitorBoxFinal">
            <div className="topMonitorInsideBox">
              <div className="topMonitorBoxImg">
                <img src={Customers} alt="Sales" title="Sales" />
              </div>
              <div className="topMonitorInfoBox">
                <div className="topMonitorInfoBoxTop">
                  <img src={UpPointer} alt="UpPointer" title="UpPointer" />
                  <h3 className="topMonitorInfoText">93</h3>
                </div>
                <div className="topMonitorInfoBoxBottom">
                  <h3 className="topMonitorInfoDesc">Total Customers</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
