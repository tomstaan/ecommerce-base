import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import TopRoute from "./TopRoute";
import { Link, Redirect } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./../style/newproduct.css";

//Image Uploading
import NewProductImage from "./NewProductImage";

// Get products store
import store from "../../../src/store";

//Other imports
import { getCategory } from "../../actions/category";
import { addProduct, addPicsToProd, selectEditMode } from "../../actions/products";
import { FormFile } from "react-bootstrap";

export class NewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      newProductPictures: [],
      newProdImageId: 0,
      oldProducts: [],
      product_name: "",
      image_id: "",
      category_id: "",
      unit_price: 0.0,
      quantity_per_unit: 0,
      size: "",
      color: "",
      unit_weight: 0.0,
      units_in_stock: 0,
      units_on_order: 0,
      product_description: "",
      redirect: false,
    };
  }

  static propTypes = {
    category: PropTypes.array.isRequired,
    getCategory: PropTypes.func.isRequired,
    addProduct: PropTypes.func.isRequired,
  };

  componentWillMount(){
    selectEditMode(false);
  }

  componentDidMount() {
    this.props.getCategory();
    this.subscribed = true;
    store.subscribe(() => {
      if (this.subscribed == true) {
        this.setState({
          newProductPictures: store.getState().products.newProductPictures,
          newProdImageId: store.getState().products.newProdImageId,
          redirect: store.getState().products.redirect_to_product_page
        });
      }
    });
  }

  componentWillUnmount() {
    this.subscribed = false;
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({
      image_id: uuidv4(),
    });
  };

  onSubmit = (e) => {
    //console.log("Pictures = "+this.state.newProductPictures);
    // --------------
    e.preventDefault();

    const {
      product_name,
      category_id,
      unit_price,
      image_id,
      quantity_per_unit,
      size,
      color,
      unit_weight,
      units_in_stock,
      units_on_order,
      product_description,
    } = this.state;

    const product = {
      product_name,
      category_id,
      unit_price,
      image_id,
      quantity_per_unit,
      size,
      color,
      unit_weight,
      units_in_stock,
      units_on_order,
      product_description,
    };

    // Add product
    this.props.addProduct(product);

    //Add product images
    this.state.newProductPictures.forEach((picture) => {
      var newImageObject = new FormData(); // Currently empty

      //newImageObject.append('product_ref', product_ref);
      newImageObject.append("image_id", image_id);
      newImageObject.append("image_name", picture, picture.name);
      this.props.addPicsToProd(newImageObject);
    });

    // Reset state
    this.setState({
      product_name: "",
      category_id: "",
      unit_price: 0.0,
      image_id: "",
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
    //Redirect back to products when © MorganReeveExposed 2019submit is complete
    if (this.state.redirect) {
      return <Redirect push to="/products" />;
    }
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
      product_description,
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
                  {this.props.category.map((Category) => (
                    <option key={Category.id} value={Category.id}>
                      {Category.cat_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <NewProductImage />
            <div className="newProdTopFields">
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

const mapStateToProps = (state) => ({
  category: state.category.category,
  redirect_to_product_page: state.products.redirect_to_product_page
});

export default connect(mapStateToProps, {
  getCategory,
  addProduct,
  addPicsToProd,
  selectEditMode
})(NewProduct);
