import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import "./../style/newproduct.css";

//Images
import Arrow from "./../style/images/return.png";
import GalleryIcon from "./../style/images/pic.png";

export class NewProduct extends Component {
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
                  className="form-control"
                  type="text"
                  name="productName"
                  id="label-title"
                  placeholder="Product Name"
                  onChange={this.onChange}
                  value={productName}
                />
              </div>
              <div className="newProdField">
                <input
                  className="form-control"
                  type="text"
                  name="productCategory"
                  id="label-title"
                  placeholder="Product Category"
                  onChange={this.onChange}
                  value={productCategory}
                />
              </div>
              <div className="newProdImageUploadCont">
                <div className="newProdImageUploadLabel">
                  <div className="newProdLabelImg">
                    <img src={GalleryIcon} alt="Gallery Icon" title="Gallry Icon"/>
                  </div>
                  <div className="newProdGalleryButton">
                    <button>Upload Images</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(NewProduct);
