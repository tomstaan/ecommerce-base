import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import "./../style/newproduct.css";

//Images
import Arrow from "./../style/images/return.png";
import GalleryIcon from "./../style/images/pic.png";

//Other imports
import { getCategory } from "../../actions/category";

export class NewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    };
  }

  state = {
    productName: "",
    productCategory: "",
    productPrice: "",
    productQuantity: "",
    productSize: "",
    productColor: "",
    productWeight: "",
    productStock: "",
    productOrder: "",
    productDesc: ""
  };

  static propTypes = {
    category: PropTypes.array.isRequired,
    getCategory: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getCategory();
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const {
      productName,
      productCategory,
      productPrice,
      productQuantity,
      productSize,
      productColor,
      productWeight,
      productStock,
      productOrder,
      productDesc
    } = this.state;
    const product = {
      productName,
      productCategory,
      productPrice,
      productQuantity,
      productSize,
      productColor,
      productWeight,
      productStock,
      productOrder,
      productDesc
    };
    //this.props.addTask(task);
    this.setState({
      productName: "",
      productCategory: "",
      productPrice: "",
      productQuantity: "",
      productSize: "",
      productColor: "",
      productWeight: "",
      productStock: "",
      productOrder: "",
      productDesc: ""
    });
  };

  render() {
    const {
      productName,
      productCategory,
      productPrice,
      productQuantity,
      productSize,
      productColor,
      productWeight,
      productStock,
      productOrder,
      productDesc
    } = this.state;
    return (
      <div className="NewProdBack">
        <div className="col-lg-12">
          <div className="topRoutingBack">
            <div className="routeCont">
              <h3>Products</h3>
              <div className="routeArrow">
                <img src={Arrow} alt="arrow" title="arrow" />
              </div>
              <h3>New Product</h3>
            </div>
          </div>
          <div className="newProductTitle">
            <h3>New Product</h3>
          </div>
          <form onSubmit={this.onSubmit}>
            <div className="newProdTopFields">
              <div className="newProdField">
                <input
                  className=""
                  type="text"
                  name="productName"
                  id="label-title"
                  placeholder="Product Name"
                  onChange={this.onChange}
                  value={productName}
                />
              </div>
              <div className="newProdField">
                <select
                  id="newProdCat"
                  onChange={this.onChange}
                  name="productCategory"
                  className="newProdCat"
                  value={productCategory}
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
                    <button>Upload Images</button>
                  </div>
                </div>
              </div>
              <div className="newProdField">
                <label className="newProdFieldLabel">Price</label>
                <input
                  className=""
                  type="text"
                  name="productPrice"
                  id="label-title"
                  placeholder=""
                  onChange={this.onChange}
                  value={productPrice}
                />
              </div>
              <div className="newProdFieldRight">
                <label className="newProdFieldLabel">Quantity Per Unit</label>
                <input
                  className=""
                  type="text"
                  name="productQuantity"
                  id="label-title"
                  placeholder=""
                  onChange={this.onChange}
                  value={productQuantity}
                />
              </div>
              <div className="newProdField">
                <input
                  className="newProdBottomFields"
                  type="text"
                  name="productSize"
                  id="label-title"
                  placeholder="Size"
                  onChange={this.onChange}
                  value={productSize}
                />
              </div>
              <div className="newProdFieldRight">
                <input
                  className="newProdBottomFields"
                  type="text"
                  name="productColor"
                  id="label-title"
                  placeholder="Color"
                  onChange={this.onChange}
                  value={productColor}
                />
              </div>
              <div className="newProdField">
                <label className="newProdFieldLabel">Weight</label>
                <input
                  className=""
                  type="text"
                  name="productWeight"
                  id="label-title"
                  placeholder=""
                  onChange={this.onChange}
                  value={productWeight}
                />
              </div>
              <div className="newProdFieldRight">
                <label className="newProdFieldLabel">Units In Stock</label>
                <input
                  className=""
                  type="text"
                  name="productStock"
                  id="label-title"
                  placeholder=""
                  onChange={this.onChange}
                  value={productStock}
                />
              </div>
              <div className="newProdField">
                <label className="newProdFieldLabel">Units On Order</label>
                <input
                  className=""
                  type="text"
                  name="productOrder"
                  id="label-title"
                  placeholder=""
                  onChange={this.onChange}
                  value={productOrder}
                />
              </div>
              <div className="newProdTxtArea">
                <textarea
                  name="productDesc"
                  id="productDesc"
                  placeholder="Product Description"
                  onChange={this.onChange}
                  value={productDesc}
                ></textarea>
              </div>
              <div className="newProdLeftButton">
                <button>Cancel</button>
              </div>
              <div className="newProdRightButton">
                <button>Create Product</button>
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
    getCategory
  }
)(NewProduct);
