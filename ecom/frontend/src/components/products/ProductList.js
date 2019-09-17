import React, { Component, Fragment } from "react";
import "./../style/productlist.css";

//Displaying Products
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  getProducts,
  deleteProducts,
  handleProductSelect,
  selectAllProducts
} from "../../actions/products";

import { getCategory } from "../../actions/category";

//Images
import Case from "./../style/images/case.jpg";
import Delete from "./../style/images/delete.png";

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      selectedProducts: [],
      category: []
    };
  }

  static propTypes = {
    products: PropTypes.array.isRequired,
    getProducts: PropTypes.func.isRequired,
    deleteProducts: PropTypes.func.isRequired,
    handleProductSelect: PropTypes.func.isRequired,
    selectAllProducts: PropTypes.func.isRequired,
    filteredProducts: PropTypes.array.isRequired,
    category: PropTypes.array.isRequired,
    getCategory: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getProducts();
    this.props.getCategory();
  }

  categoryDisplay(e, prodId) {
    let title = "";
    this.props.category.map(Category =>
      Category.id == prodId ? (title = Category.cat_name) : ""
    );
    return title;
  }

  render() {
    return (
      <div className="plBack">
        <div className="col-lg-12">
          {this.props.filteredProducts.length ? (
            <Fragment>
              {this.props.filteredProducts.map(Product => (
                <div key={Product.id} className="productBack">
                  <div className="selectProductCont"> 
                    <div className="selectProductBack">
                      <input
                        className="selectProductBox"
                        type="checkbox"
                        name={Product.product_name}
                        onChange={this.props.handleProductSelect.bind(
                          this,
                          Product.id
                        )}
                        checked={Product.selected}
                        id={Product.id}
                      />
                      <span className="selectProductCheck" />
                    </div>
                  </div>
                  <div className="productImageBox">
                    <img src={Case} alt="Case" title="Case" />
                  </div>
                  <div className="productDescBack">
                    <div className="productDescTop">
                      <div className="productDescTitle">
                        <h3>{Product.product_name}</h3>
                      </div>
                      <div className="productColor">
                        <h3 className="productBold">Color</h3>
                        <h3 className="productTxt">{Product.color}</h3>
                      </div>
                      <div className="productQuant">
                        <h3 className="productBold">Quantity Per Unit</h3>
                        <h3 className="productTxt">
                          {Product.quantity_per_unit}
                        </h3>
                      </div>
                    </div>
                    <div className="productDescBottom">
                      <div className="productPrice">
                        <div className="productPriceBox">
                          <label className="priceCurrencySign">€</label>
                          <label className="priceAmount">
                            {Product.unit_price}
                          </label>
                        </div>
                      </div>
                      <div className="productDiscountCont">
                        <h3 className="productBold">Discount</h3>
                        <h3 className="productDiscActive">Active</h3>
                      </div>
                      <div className="productOriginalPrice">
                        <h3 className="productBold">Original Price</h3>
                        <h3 className="productTxt">{Product.unit_price}</h3>
                      </div>
                      <div className="productColor">
                        <h3 className="productBold">Size</h3>
                        <h3 className="productTxt">{Product.size}</h3>
                      </div>
                      <div className="productQuant">
                        <h3 className="productBold">Category</h3>
                        <div>
                          <h3 className="productTxt">
                            {this.categoryDisplay(this, Product.category_id)}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="productDivLine" />
                  <div className="productDescBack">
                    <div className="productDescTop">
                      <div className="productColor">
                        <h3 className="productBold">Units Available</h3>
                        <h3 className="productTxt">{Product.units_in_stock}</h3>
                      </div>
                      <div className="productColor">
                        <h3 className="productBold">MSRP</h3>
                        <h3 className="productTxt">€{Product.msrp}</h3>
                      </div>
                    </div>
                    <div className="productDescBottom">
                      <div className="productColor">
                        <h3 className="productBold">Units On Order</h3>
                        <h3 className="productTxt">{Product.units_on_order}</h3>
                      </div>
                      <div className="productColor">
                        <h3 className="productBold">Supplier</h3>
                        <h3 className="productTxt" />
                      </div>
                    </div>
                  </div>
                  <div className="singleProductActions">
                    <div className="deleteSingleProduct">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.props.deleteProducts.bind(
                          this,
                          Product.id
                        )}
                      >
                        <img
                          src={Delete}
                          alt="Delete Product"
                          title="Delete Product"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Fragment>
          ) : (
            <div>
              <h3>No Products Found</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products,
  selectAllChecked: state.products.selectAllChecked,
  filteredProducts: state.products.filteredProducts,
  filterValue: state.products.filterValue,
  category: state.category.category
});

export default connect(
  mapStateToProps,
  {
    getProducts,
    deleteProducts,
    handleProductSelect,
    selectAllProducts,
    getCategory
  }
)(ProductList);
