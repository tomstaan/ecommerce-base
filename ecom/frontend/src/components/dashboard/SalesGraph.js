import React, { Component } from "react";
import "./../style/dashboard.css";

import Chart from "react-apexcharts";

class SalesGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
            type: 'line'
        },
        xaxis: {
            categories: ["17 Dec", "24 Dec", "31 Dec", "7 Jan", "17 Jan"]
          }
      },
      series: [
        {
            name: 'sales',
            data: [20, 39, 18, 36, 2]
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="salesGraphBaseContainer">
          <h4>Sales</h4>
          <div className="salesGraphSalesCont">
          <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SalesGraph;
