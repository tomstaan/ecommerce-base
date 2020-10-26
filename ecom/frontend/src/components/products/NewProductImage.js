import React, { Component } from "react";
import PropTypes, { element, func } from "prop-types";
import { connect, Provider } from "react-redux";
import "./../style/newproduct.css";

//Images
import GalleryIcon from "./../style/images/pic.png";
import AddImageIcon from "./../style/images/addImages.png";
import TestImage from "./../../../../media/product_images/63c39c97-fe7e-46c4-bf7c-b78750206b23/71EoGntO5bL._SX466_.jpg";

import { updateProductPictures } from "../../actions/products";
import { isEmptyObject } from "jquery";

export class NewProductImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayProductPictures: [],
      savedProductPictures: [],
      displaySavedProductPictures: [],
      displayImages: false,
    };
  }

  //
  // Match urls from saved images and display product pictures
  //

  static propTypes = {
    displayProductPictures: PropTypes.array.isRequired,
    updateProductPictures: PropTypes.func.isRequired,
  };
  
  pictureSelectedHandler = (event) => {
    if (event.target.files) {
      console.log(event.target.files)
      // Switch from upload to display
      this.setState({
        displayImages: true,
      });
      // Display Images
      /* Get files in array form */
      const files = Array.from(event.target.files);

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
          if (this.state.displayProductPictures.length < 1) {
            this.setState({
              displayProductPictures: images
            });
          } else {
            this.setState({
              displayProductPictures: [
                ...this.state.displayProductPictures,
                images
              ]
            });
          }
          console.log(this.state.displayProductPictures)
          this.props.updateProductPictures(files);
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
    const index = tempPics.indexOf(element);
    if (index > -1) {
      tempPics.splice(index, 1);
    }
    this.setState({
      displayProductPictures: tempPics,
    });
    this.props.updateProductPictures(tempPics);
  };

  render() {
    return (
      <div>
        {(!this.state.displayImages) ||
        (this.state.displayProductPictures.length == 0) ||
        (this.state.displayProductPictures == undefined) ? (
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
  displayProductPictures: state.products.displayProductPictures,
  savedProductPictures: state.products.savedProductPictures,
});

export default connect(mapStateToProps, {
  updateProductPictures,
})(NewProductImage);
