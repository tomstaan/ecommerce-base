import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import TopRoute from "./TopRoute";
import { Link } from "react-router-dom";
import "./../style/newproduct.css";

//Images
import Arrow from "./../style/images/return.png";
import GalleryIcon from "./../style/images/pic.png";

//Other imports
import { getCategory } from "../../actions/category";
import { addProduct } from "../../actions/products";

export class NewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      product_name: "",
      category_id: "",
      unit_price: 0.0,
      quantity_per_unit: 0,
      size: "",
      color: "",
      unit_weight: 0.0,
      units_in_stock: 0,
      units_on_order: 0,
      product_description: ""
    };
  }

  static propTypes = {
    category: PropTypes.array.isRequired,
    getCategory: PropTypes.func.isRequired,
    addProduct: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getCategory();
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const {
      product_name,
      category_id,
      unit_price,
      quantity_per_unit,
      size,
      color,
      unit_weight,
      units_in_stock,
      units_on_order,
      product_description
    } = this.state;
    const product = {
      product_name,
      category_id,
      unit_price,
      quantity_per_unit,
      size,
      color,
      unit_weight,
      units_in_stock,
      units_on_order,
      product_description
    };
    this.props.addProduct(product);
    this.setState({
      product_name: "",
      category_id: "",
      unit_price: 0.0,
      quantity_per_unit: 0,
      size: "",
      color: "",
      unit_weight: 0.0,
      units_in_stock: 0,
      units_on_order: 0,
      product_description: ""
    });
  };

  render() {
    const {
      product_name,
      category_id,
      unit_price,
      quantity_per_unit,
      size,
      color,
      unit_weight,
      units_in_stock,
      units_on_order,
      product_description
    } = this.state;
    return (
      <div className="NewProdBack">
        <div className="col-lg-12">
          <TopRoute />
          <div className="newProductTitle">
            <h3>New Product</h3>
          </div>
          <form onSubmit={this.onSubmit}>
            <div className="newProdTopFields">
              <div className="newProdField">
                <input
                  className=""
                  type="text"
                  name="product_name"
                  id="label-title"
                  placeholder="Product Name"
                  onChange={this.onChange}
                  value={product_name}
                />
              </div>
              <div className="newProdField">
                <select
                  id="newProdCat"
                  onChange={this.onChange}
                  name="category_id"
                  className="newProdCat"
                  value={category_id}
                >
                  <option className="selectEmptyCat" value="">
                    Category
                  </option>
                  {this.props.category.map(Category => (
                    <option key={Category.id} value={Category.id}>
                      {Category.cat_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="newProdImageUploadCont">
                <div className="newProdImageUploadLabel">
                  <div className="newProdLabelImg">
                    <img
                      src={GalleryIcon}
                      alt="Gallery Icon"
                      title="Gallry Icon"
                    />
                  </div>
                  <div className="newProdGalleryButton">
                    <button type="button">Upload Images</button>
                  </div>
                </div>
              </div>
              <div className="newProdField">
                <label className="newProdFieldLabel">Price</label>
                <input
                  className=""
                  type="number"
                  step="0.01"
                  min="0"
                  name="unit_price"
                  id="label-title"
                  placeholder=""
                  onChange={this.onChange}
                  value={unit_price}
                />
                <span></span>
              </div>
              <div className="newProdFieldRight">
                <label className="newProdFieldLabel">Quantity Per Unit</label>
                <input
                  className=""
                  type="text"
                  name="quantity_per_unit"
                  id="label-title"
                  placeholder=""
                  onChange={this.onChange}
                  value={quantity_per_unit}
                />
              </div>
              <div className="newProdField">
                <input
                  className="newProdBottomFields"
                  type="text"
                  name="size"
                  id="label-title"
                  placeholder="Size"
                  onChange={this.onChange}
                  value={size}
                />
              </div>
              <div className="newProdFieldRight">
                <input
                  className="newProdBottomFields"
                  type="text"
                  name="color"
                  id="label-title"
                  placeholder="Color"
                  onChange={this.onChange}
                  value={color}
                />
              </div>
              <div className="newProdField">
                <label className="newProdFieldLabel">Weight</label>
                <input
                  className=""
                  type="text"
                  name="unit_weight"
                  id="label-title"
                  placeholder=""
                  onChange={this.onChange}
                  value={unit_weight}
                />
              </div>
              <div className="newProdFieldRight">
                <label className="newProdFieldLabel">Units In Stock</label>
                <input
                  className=""
                  type="text"
                  name="units_in_stock"
                  id="label-title"
                  placeholder=""
                  onChange={this.onChange}
                  value={units_in_stock}
                />
              </div>
              <div className="newProdField">
                <label className="newProdFieldLabel">Units On Order</label>
                <input
                  className=""
                  type="text"
                  name="units_on_order"
                  id="label-title"
                  placeholder=""
                  onChange={this.onChange}
                  value={units_on_order}
                />
              </div>
              <div className="newProdTxtArea">
                <textarea
                  name="product_description"
                  id="product_description"
                  placeholder="Product Description"
                  onChange={this.onChange}
                  value={product_description}
                ></textarea>
              </div>
              <Link to="/products">
                <div className="newProdLeftButton">
                  <button>Cancel</button>
                </div>
              </Link>
              <div className="newProdRightButton">
                <button type="submit">Create Product</button>
              </div>
            </div>
          </form>
          <div className="newProdBottom"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  category: state.category.category
});

export default connect(
  mapStateToProps,
  {
    getCategory,
    addProduct
  }
)(NewProduct);
