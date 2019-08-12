import React, { Component, Fragment } from "react";
import "./../style/productlist.css";

//Displaying Products
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts } from "../../actions/products";

//Images
import Case from "./../style/images/case.jpg";

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProducts: []
    };
  }

  static propTypes = {
    products: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getProducts();
  }

  handleSelectChange(e) {
    if (this.state.selectedProducts.indexOf(e.target.id) < 0) {
      this.setState({
        selectedProducts: [...this.state.selectedProducts, e.target.id]
      });
    } else {
      var array = [...this.state.selectedProducts]; // make a separate copy of the array
      var index = array.indexOf(e.target.id);
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({ selectedProducts: array });
      }
    }
  }

  render() {
    return (
      <div className="plBack">
        <div className="col-lg-12">
          {this.props.products.map(product => (
            <Fragment key={product.id}>
              <div className="productBack">
                <div className="selectProductCont">
                  <div className="selectProductBack">
                    <input
                      className="selectProductBox"
                      type="checkbox"
                      name={product.product_name}
                      id={product.id}
                      onClick={this.handleSelectChange.bind(this)}
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
                      <h3>{product.product_name}</h3>
                    </div>
                    <div className="productColor">
                      <h3 className="productBold">Color</h3>
                      <h3 className="productTxt">{product.color}</h3>
                    </div>
                    <div className="productQuant">
                      <h3 className="productBold">Quantity Per Unit</h3>
                      <h3 className="productTxt">
                        {product.quantity_per_unit}
                      </h3>
                    </div>
                  </div>
                  <div className="productDescBottom">
                    <div className="productPrice">
                      <div className="productPriceBox">
                        <label className="priceCurrencySign">€</label>
                        <label className="priceAmount">
                          {product.unit_price}
                        </label>
                      </div>
                    </div>
                    <div className="productDiscountCont">
                      <h3 className="productBold">Discount</h3>
                      <h3 className="productDiscActive">Active</h3>
                    </div>
                    <div className="productOriginalPrice">
                      <h3 className="productBold">Original Price</h3>
                      <h3 className="productTxt">{product.unit_price}</h3>
                    </div>
                    <div className="productColor">
                      <h3 className="productBold">Size</h3>
                      <h3 className="productTxt">{product.size}</h3>
                    </div>
                    <div className="productQuant">
                      <h3 className="productBold">Category</h3>
                      <h3 className="productTxt">{product.category_id}</h3>
                    </div>
                  </div>
                </div>
                <div className="productDivLine" />
                <div className="productDescBack">
                  <div className="productDescTop">
                    <div className="productColor">
                      <h3 className="productBold">Units Available</h3>
                      <h3 className="productTxt">{product.units_in_stock}</h3>
                    </div>
                    <div className="productColor">
                      <h3 className="productBold">MSRP</h3>
                      <h3 className="productTxt">€{product.msrp}</h3>
                    </div>
                  </div>
                  <div className="productDescBottom">
                    <div className="productColor">
                      <h3 className="productBold">Units On Order</h3>
                      <h3 className="productTxt">{product.units_on_order}</h3>
                    </div>
                    <div className="productColor">
                      <h3 className="productBold">Supplier</h3>
                      <h3 className="productTxt" />
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(
  mapStateToProps,
  { getProducts }
)(ProductList);
