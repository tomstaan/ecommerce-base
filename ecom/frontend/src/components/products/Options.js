import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./../style/products.css";

//Images
import Filter from "./../style/images/filter.png";
import Actions from "./../style/images/options.png";
import Add from "./../style/images/plus.png";

import { selectAllProducts } from "../../actions/products";

export class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectAllChecked: []
    };
  }
  static propTypes = {
    selectAllChecked: PropTypes.bool.isRequired,
    selectAllProducts: PropTypes.func.isRequired
  };

  handleSelectAll = () => {
    this.props.selectAllProducts();
  };

  render() {
    return (
      <div className="productOptions">
        <div className="selectBox" onClick={this.handleSelectAll}>
          <div className="selectProductContOpt">
            <div className="selectProductBackOpt">
              <input
                className="selectProductBoxOpt"
                type="checkbox"
                name="Select All"
                checked={this.props.selectAllChecked}
                onChange={this.props.selectAllProducts}
                onClick={this.handleSelectAll}
              />
              <span
                className={
                  this.props.selectAllChecked ? "selectProductCheckOpt" : ""
                }
              />
            </div>
          </div>
          <div className="selectText">
            <h2>Select All</h2>
          </div>
        </div>
        <div className="filterBox">
          <img src={Filter} alt="Filter" title="Filter" />
          <div className="actionText">
            <h2>Filter</h2>
          </div>
        </div>
        <div className="actionBox">
          <img src={Actions} alt="Actions" title="Actions" />
          <div className="actionText">
            <h2>Actions</h2>
          </div>
        </div>
        <div className="AddProdBtn">
          <img src={Add} alt="Add" title="Add" />
          <div className="AddProdText">
            <h2>Add Product</h2>
          </div>
        </div>
        <div className="AddProdCatBtn">
          <img src={Add} alt="Add" title="Add" />
          <div className="AddProdCatText">
            <h2>Add Product Category</h2>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectAllChecked: state.products.selectAllChecked
});

export default connect(
  mapStateToProps,
  { selectAllProducts }
)(Options);
