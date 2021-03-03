import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import "./../style/dashboard.css";

import Chart from "react-apexcharts";
import { getPopularProducts } from "../../actions/dashboard";

class PopularItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
            height: 380,
            type: 'bar',
            width: '100%',
        },
        xaxis: {
            categories: [],
          }
      },
      series: [
        {
          data: [],
        },
      ],
    };
  }

  componentDidMount(){
    this.props.getPopularProducts()
    this.interval = setInterval(() => this.props.getPopularProducts(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <div className="salesGraphBaseContainerPopular">
          <h4>Popular Products</h4>
          <div className="salesGraphSalesCont">
          <Chart
              options={this.props.popular_options}
              series={this.props.popular_series}
              type="bar"
              width="100%"
              height="360px"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  popular_options: state.dashboard.popular_options,
  popular_series: state.dashboard.popular_series
});

export default connect(mapStateToProps, {
  getPopularProducts
})(PopularItems);
