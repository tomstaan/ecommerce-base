import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import "./../style/newproduct.css";

//Images
import GalleryIcon from "./../style/images/pic.png";

export default class NewProductImage extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}
