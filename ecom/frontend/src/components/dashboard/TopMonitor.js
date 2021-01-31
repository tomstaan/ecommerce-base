import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
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

import { getDashboardStatistics } from '../../actions/dashboard';

export class TopMonitor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthly_sales: 0,
      revenue: 0,
      profit: 0,
      monthly_visitors: 0,
      new_customers: 0,
      all_customers: 0
    };
  }

  static propTypes = {
    getDashboardStatistics: PropTypes.func.isRequired
  };

  componentDidMount(){
    console.log("Get dashboard stats")
    this.props.getDashboardStatistics()
  }


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
                  <h3 className="topMonitorInfoText">{this.props.monthly_sales}</h3>
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
                  <h3 className="topMonitorInfoText">€{this.props.revenue/100}</h3>
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
                  <h3 className="topMonitorInfoText">€{this.props.profit/100}</h3>
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
                  <h3 className="topMonitorInfoText">{this.props.monthly_visitors}</h3>
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
                  <h3 className="topMonitorInfoText">{this.props.new_customers}</h3>
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
                  <h3 className="topMonitorInfoText">{this.props.all_customers}</h3>
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

const mapStateToProps = (state) => ({
  monthly_sales: state.dashboard.monthly_sales,
  revenue: state.dashboard.revenue,
  profit: state.dashboard.profit,
  monthly_visitors: state.dashboard.monthly_visitors,
  new_customers: state.dashboard.new_customers,
  all_customers: state.dashboard.all_customers
});

export default connect(mapStateToProps, {
  getDashboardStatistics
})(TopMonitor);
