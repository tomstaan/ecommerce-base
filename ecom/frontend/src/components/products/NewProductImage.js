import React, { Component } from "react";
import PropTypes, { element, func } from "prop-types";
import { connect, Provider } from "react-redux";
import "./../style/newproduct.css";

//Images
import GalleryIcon from "./../style/images/pic.png";
import AddImageIcon from "./../style/images/addImages.png";
import TestImage from "./../../../../media/product_images/63c39c97-fe7e-46c4-bf7c-b78750206b23/71EoGntO5bL._SX466_.jpg";

import {
  updateProductPictures,
  updateSavedEditImages,
  updateDisplayEditImages,
  updateNewEditImages,
  selectEditMode,
} from "../../actions/products";
import { isEmptyObject } from "jquery";

export class NewProductImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayProductPictures: [],
      editNewProductPictures: [],
      savedProductPictures: [],
      displayImages: false,
      imagesLoaded: true,
    };
  }

  // Make sure new product images works

  // Make function to filter the images from the array to check if they are already contained in the array or got deleted then delete them

  // Add the rest of the images as new images to the product

  // 1. make a function in actions to check

  // Add images to list on components did update
  componentDidUpdate() {
    // If the cureent mode is edit product , get product pictures
    if (this.props.mode_select_edit) {
      if (this.state.imagesLoaded) {
        // Get images
        var images = this.props.savedProductPictures.map(
          (img) => img["image_name"]
        );
        console.log("Images");
        console.log(images);
        let imgCopy = images.slice(); //creates the clone of the state
        // Cache images into memery
        this.setState({
          displayProductPictures: imgCopy,
        });
        this.setState({
          imagesLoaded: false,
          displayImages: true,
        });
      }
      this.props.selectEditMode(false);
    }
    this.props.updateDisplayEditImages(this.state.displayProductPictures);
  }

  static propTypes = {
    displayProductPictures: PropTypes.array.isRequired,
    updateProductPictures: PropTypes.func.isRequired,
    updateSavedEditImages: PropTypes.func.isRequired,
  };

  pictureSelectedHandler = (event) => {
    if (event.target.files) {
      console.log(event.target.files);
      // Switch from upload to display
      this.setState({
        displayImages: true,
      });
      // Display Images
      /* Get files in array form */
      const files = Array.from(event.target.files);

      var displayArr = this.state.displayProductPictures;
      /* Map each file to a promise that resolves to an array of image URI's */
      Promise.all(
        files.map((file) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.addEventListener("load", (ev) => {
              resolve(ev.target.result);
            });
            reader.addEventListener("error", reject);
            reader.readAsDataURL(file);
          });
        })
      ).then(
        (images) => {
          /* Once all promises are resolved, update state with image URI array */
          console.log(images);
          images.forEach(image=>{
            displayArr.push(image);
          })
          this.setState({
            displayProductPictures: displayArr
          })
          this.props.updateProductPictures(files);
          console.log("New Image Added");
          console.log(files);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  };

  pictureDeleteHandler = (element) => {
    // Get index of element + remove
    const tempPics = this.state.displayProductPictures;
    console.log("Length of index");
    console.log(tempPics.length);
    if (tempPics.length < 2) {
      const index = tempPics.indexOf(element);
      console.log("Temp Pics");
      console.log(tempPics);
      console.log("Index");
      console.log(index);
      if (index > -1) {
        tempPics.splice(index, 1);
      }
      console.log(tempPics);
      this.setState({
        displayProductPictures: tempPics,
      });
    } else {
      var tempCopy = tempPics.filter((array) => {
        // If an element is an array get the first index
        if (Array.isArray(array)) {
          if (array[0] != element) {
            return array;
          }
        } else {
          // Get the values of url
          if (array != element) {
            return array;
          }
        }
      });
      console.log("Temp copy");
      console.log(tempCopy);
      this.setState({
        displayProductPictures: tempCopy,
      });
    }
  };

  render() {
    return (
      <div>
        {!this.state.displayImages ||
        this.state.displayProductPictures.length == 0 ||
        this.state.displayProductPictures == undefined ? (
          <div className="newProdTopFields">
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
                  <label htmlFor="new-prod-upload-photos">Upload Images</label>
                  <input
                    type="file"
                    onChange={this.pictureSelectedHandler}
                    id="new-prod-upload-photos"
                    accept="image/x-png,image/gif,image/jpeg"
                    multiple
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="newProdImageUploadCont">
            <div className="addProdTempImageCont">
              <div className="addProdTempImageIcon">
                <input
                  type="file"
                  onChange={this.pictureSelectedHandler}
                  id="new-prod-add-photos"
                  accept="image/x-png,image/gif,image/jpeg"
                  multiple
                />
                <label htmlFor="new-prod-add-photos">
                  <span className="material-icons">add_photo_alternate</span>
                </label>
              </div>
            </div>

            {this.state.displayProductPictures.map((imageUrl) => (
              <div
                key={this.state.displayProductPictures.indexOf(imageUrl)}
                className="newProdTempImageCont"
              >
                <img src={imageUrl} />
                <div
                  className="newProdImageCloseCont"
                  onClick={() => this.pictureDeleteHandler(imageUrl)}
                >
                  <span className="material-icons">close</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  savedProductPictures: state.products.savedProductPictures,
  displayProductPictures: state.products.displayProductPictures,
  editNewProductPictures: state.products.editNewProductPictures,
  mode_select_edit: state.products.mode_select_edit,
});

export default connect(mapStateToProps, {
  updateProductPictures,
  updateSavedEditImages,
  updateDisplayEditImages,
  updateNewEditImages,
  selectEditMode,
})(NewProductImage);
