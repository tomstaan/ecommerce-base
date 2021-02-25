import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import "./../style/dashboard.css";

import Chart from "react-apexcharts";
import { getDashboardSalesGraph } from "../../actions/dashboard";

class SalesGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
            type: 'line'
        },
        xaxis: {
            categories: []
          }
      },
      series: [
        {
            name: 'Sales',
            data: []
        },
      ],
    };
  }

  static propTypes = {
    getDashboardSalesGraph: PropTypes.func.isRequired
  };

  componentDidMount(){
    this.props.getDashboardSalesGraph()
    this.interval = setInterval(() => this.props.getDashboardSalesGraph(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <div className="salesGraphBaseContainer">
          <h4>Sales</h4>
          <div className="salesGraphSalesCont">
          <Chart
              options={this.props.options}
              series={this.props.series}
              type="line"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  options: state.dashboard.options,
  series: state.dashboard.series
});


export default connect(mapStateToProps, {
  getDashboardSalesGraph
})(SalesGraph);

