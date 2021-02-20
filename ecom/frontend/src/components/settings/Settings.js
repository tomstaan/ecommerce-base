import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import "./../style/settings.css";

import Header from "../layout/Header";
import GalleryIcon from "./../style/images/pic.png";

export class Settings extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="settingsBack">
          <h3>Settings</h3>
          <div className="settingsCont">
            <div className="changePassBtn">
              <h4>Change Password</h4>
            </div>
            <div className="settingsImageCont">
              <div className="settingsImage">
                <div className="settingsImageBox">
                  <img
                    src={GalleryIcon}
                    alt="profilepicholder"
                    title="profilepicholder"
                  />
                </div>
              </div>
              <div className="newProfileImageBtn">
                <label htmlFor="new-profile-img">Upload Image</label>
                <input
                  type="file"
                  onChange={this.pictureSelectedHandler}
                  id="new-profile-img"
                  accept="image/x-png,image/gif,image/jpeg"
                />
              </div>
            </div>
            <form>
              <div className="settingTextField">
                <input
                  type="text"
                  name="username"
                  id="label-title"
                  placeholder="Username"
                />
              </div>
              <div className="settingTextField">
                <input
                  type="text"
                  name="store name"
                  id="label-title"
                  placeholder="Store Name"
                />
              </div>
              <div className="settingsSubmitBtn">
                  <button type="submit">Save Changes</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  /*dashLoadingScreen: state.dashboard.dashLoadingScreen,*/
});

export default connect(mapStateToProps, {})(Settings);
