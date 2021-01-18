import React, { Component } from "react";
import "./../style/dashboard.css";

import Chart from "react-apexcharts";

class CategoryItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
            height: 380,
            type: 'bar',
        },
        xaxis: {
            categories: [
                "Iphone 12",
                "Apple Watch",
                "Samsung S10",
                "Macbook Pro 15",
                "Iphone 11",
                "Dell XPS 13",
                "Samsung S20",
                "Macbook Pro 13",
              ],
          }
      },
      series: [
        {
          data: [39, 34, 32, 31, 28, 26, 24, 19],
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="salesGraphBaseContainerRight">
          <h4>Category</h4>
          <div className="salesGraphSalesCont"></div>
        </div>
      </div>
    );
  }
}

export default CategoryItems;