import React, { Component } from "react";
import PropTypes, { element, func } from "prop-types";
import { connect, Provider } from "react-redux";
import "./../style/newproduct.css";

//Images
import GalleryIcon from "./../style/images/pic.png";

import {
  updateProductPictures
} from "../../actions/products";

export class NewProductImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayProductPictures: [],
      displayImages: false,
    };
  }

  static propTypes = {
    displayProductPictures: PropTypes.array.isRequired,
    updateProductPictures: PropTypes.func.isRequired
  }
  
  pictureSelectedHandler = (event) => {
    if (event.target.files) {
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
          this.setState({
            displayProductPictures: images
          });
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

const mapStateToProps = state => ({
  displayProductPictures: state.products.displayProductPictures
})

export default connect(
  mapStateToProps,
  {
    updateProductPictures
  }
)(NewProductImage);
