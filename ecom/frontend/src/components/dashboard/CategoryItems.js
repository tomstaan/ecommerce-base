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
          <h4>Customer Per Country</h4>
          <div className="salesGraphSalesContCountry">

            <div className="salesGraphSalesBoxCont">
              <div className="salesGraphSalesInnerCont">
                <h3 className="salesGraphSalesInnerContCountry">United States</h3>
                <h3 className="salesGraphSalesInnerContNumber">23</h3>
              </div>
            </div>

            <div className="salesGraphSalesBoxCont">
              <div className="salesGraphSalesInnerCont">
                <h3 className="salesGraphSalesInnerContCountry">Ireland</h3>
                <h3 className="salesGraphSalesInnerContNumber">16</h3>
              </div>
            </div>

            <div className="salesGraphSalesBoxCont">
              <div className="salesGraphSalesInnerCont">
                <h3 className="salesGraphSalesInnerContCountry">United Kingdom</h3>
                <h3 className="salesGraphSalesInnerContNumber">8</h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default CategoryItems;