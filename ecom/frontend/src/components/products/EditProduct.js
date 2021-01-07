import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import TopRoute from "./TopRoute";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./../style/newproduct.css";

//Image Uploading
import NewProductImage from "./NewProductImage";

// Get products store
import store from "../../store";

//Other imports
import { getCategory } from "../../actions/category";
import { getProducts, editProduct, setSavedPictures } from "../../actions/products";
import { FormFile } from "react-bootstrap";
import products from "../../reducers/products";

export class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      category: [],
      products: [],
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
      savedProductPictures: [],
    };
  }

  static propTypes = {
    category: PropTypes.array.isRequired,
    savedProductPictures: PropTypes.array.isRequired,
    getCategory: PropTypes.func.isRequired,
    editProduct: PropTypes.func.isRequired,
    setSavedPictures: PropTypes.func.isRequired,
  };

  componentWillMount(){
    this.getProductDetails();
    this.getProductImages();
  }

  componentDidMount() {
    this.props.getProducts();
    this.props.getCategory();
    this.subscribed = true;
    store.subscribe(() => {
      if (this.subscribed == true) {
        this.setState({
          savedProductPictures: store.getState().products.savedProductPictures,
        });
      }
    });
    console.log("Hello");
  }

  getProductDetails() {
    let meetupId = this.props.match.params.id;
    axios
      .get(`http://127.0.0.1:8000/api/products/${meetupId}/`)
      .then((response) => {
        this.setState({
          id: response.data.id,
          product_name: response.data.product_name,
          image_id: response.data.image_id,
          category_id: response.data.category_id,
          unit_price: response.data.unit_price,
          quantity_per_unit: response.data.quantity_per_unit,
          size: response.data.size,
          color: response.data.color,
          unit_weight: response.data.unit_weight,
          units_in_stock: response.data.units_in_stock,
          units_on_order: response.data.units_on_order,
          product_description: response.data.product_description,
        });
      })
      .catch((err) => console.log(err));
  }

  getProductImages() {
    let meetupId = this.props.match.params.id;
    axios
      .get(`http://127.0.0.1:8000/api/products/${meetupId}/images/`)
      .then((response) => {
        this.props.setSavedPictures(response.data)
      })
      .catch((err) => console.log(err));
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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

    // Edit product
    this.props.editProduct(product, this.state.id);

    /*
    this.state.newProductPictures.forEach((picture) => {
      var newImageObject = new FormData(); // Currently empty

      //const product_ref = 38

      //newImageObject.append('product_ref', product_ref);
      newImageObject.append("image_id", image_id);
      newImageObject.append("image_name", picture, picture.name);
      console.log(newImageObject);
      this.props.addPicsToProd(newImageObject);
    });*/

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
      product_description: "",
      redirect: true,
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
            <h3>Edit Product</h3>
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
                <button type="submit">Save Changes</button>
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
  products: state.products.products,
  savedProductPictures: state.products.savedProductPictures,
});

export default connect(mapStateToProps, {
  getCategory,
  getProducts,
  editProduct,
  setSavedPictures,
})(EditProduct);
