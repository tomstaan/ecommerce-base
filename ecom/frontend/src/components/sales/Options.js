import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./../style/products.css";
import "./../style/transactions.css";

//Images
import Filter from "./../style/images/filter.png";
import Asc from "./../style/images/asc.png";
import Desc from "./../style/images/desc.png";

import {
  getSales,
  filterSales,
  filterByAsc,
  filterByDesc,
  filterByPrice,
  filterByQuantity,
  filterByDate
} from "../../actions/sales";

export class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actionMenu: false,
      filterMenu: false,
      sales: []
    };
  }
  static propTypes = {
    sales: PropTypes.array.isRequired,
    getSales: PropTypes.func.isRequired,
    filterSales: PropTypes.func.isRequired,
    filterValue: PropTypes.string.isRequired,
    filterByAsc: PropTypes.func.isRequired,
    filterByDesc: PropTypes.func.isRequired,
    filterByPrice: PropTypes.func.isRequired,
    filterByDate: PropTypes.func.isRequired,
    filterByQuantity: PropTypes.func.isRequired,
    filterAsc: PropTypes.bool.isRequired,
    filterDesc: PropTypes.bool.isRequired,
    filterQuantity: PropTypes.bool.isRequired,
    filterPrice: PropTypes.bool.isRequired,
    filterDate: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.getSales();
  }

  toggleAction = () => {
    this.setState({
      actionMenu: !this.state.actionMenu
    });
  };

  toggleFilter = () => {
    this.setState({
      filterMenu: !this.state.filterMenu
    });
  };

  render() {
    return (
        <div className="productOptions">
          <div className="actionBoxFrameSales">
            <div className="filterBoxFrame">
              <div className="filterBox" onClick={this.toggleFilter}>
                <img src={Filter} alt="Filter" title="Filter" />
                <div className="actionText">
                  <h2>Filter</h2>
                </div>
              </div>
              {this.state.filterMenu ? (
                <div className="filterBoxOptions">
                  <div className="filterSearchItem">
                    <input
                      type="search"
                      placeholder="Keyword"
                      onChange={e => this.props.filterSales(e.target.value)}
                      value={this.props.filterValue}
                    />
                  </div>
                  <div className="filterSortTypes">
                    <div
                      className={
                        this.props.filterAsc
                          ? "filterSortAscH"
                          : "filterSortAsc"
                      }
                      onClick={this.props.filterByAsc.bind(this)}
                    >
                      <div className="filterAscImg">
                        <img src={Asc} alt="Ascending" title="Ascending" />
                      </div>
                    </div>
                    <div
                      className={
                        this.props.filterDesc
                          ? "filterSortDescH"
                          : "filterSortDesc"
                      }
                      onClick={this.props.filterByDesc.bind(this)}
                    >
                      <div className="filterDescImg">
                        <img src={Desc} alt="Descending" title="Descending" />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      this.props.filterPrice
                        ? "filterSortPriceH"
                        : "filterSortPrice"
                    }
                    onClick={this.props.filterByPrice.bind(this)}
                  >
                    <div className="filterSortPriceCover">
                      <h2>Price</h2>
                    </div>
                  </div>
                  <div
                    className={
                      this.props.filterDate
                        ? "filterSortCategoryH"
                        : "filterSortCategory"
                    }
                    onClick={this.props.filterByDate.bind(this)}
                  >
                    <div className="filterSortCategoryCover">
                      <h2>Date</h2>
                    </div>
                  </div>
                  <div
                    className={
                      this.props.filterQuantity
                        ? "filterSortUnitsH"
                        : "filterSortUnits"
                    }
                    onClick={this.props.filterByQuantity.bind(this)}
                  >
                    <div className="filterSortUnitsCover">
                      <h2>Quantity</h2>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  sales: state.sales.sales,
  filterValue: state.sales.filterValue,
  filterAsc: state.sales.filterAsc,
  filterDesc: state.sales.filterDesc,
  filterPrice: state.sales.filterPrice,
  filterDate: state.sales.filterDate,
  filterQuantity: state.sales.filterQuantity
});

export default connect(
  mapStateToProps,
  {
    getSales,
    filterSales,
    filterByAsc,
    filterByDesc,
    filterByPrice,
    filterByDate,
    filterByQuantity
  }
)(Options);
