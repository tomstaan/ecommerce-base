import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import { BrowserRouter, Link, withRouter, Router } from "react-router-dom";
import axios from "axios";
import store from "../../store";
import "./../style/settings.css";

import { tokenConfig, changeUsername } from "../../actions/auth";

import Header from "../layout/Header";
import GalleryIcon from "./../style/images/pic.png";

import {
  getSettings,
  createSettings,
  updateSettings,
} from "../../actions/settings";

export class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settingsId: 0,
      profile_pic: "",
      profile_pic_url: "",
      username: "",
      storename: "",
      exists: "",
    };
  }

  componentDidMount() {
    this.props.getSettings();
    this.getSettingsUpdate();
    this.setState({
      username: this.props.user.username,
    });
    store.subscribe(() => {
      if (this.subscribed == true) {
        this.setState({
          profile_pic: store.getState().products.profile_pic,
          profile_pic_url: store.getState().products.profile_pic_url,
          storename: store.getState().products.storename,
          exists: store.getState().products.exists,
          username: store.getState().auth.user.username,
        });
      }
    });
  }

  componentWillUnmount() {
    this.subscribed = false;
  }

  getSettingsUpdate() {
    axios
      .get(
        `http://127.0.0.1:8000/api/store/settings/`,
        tokenConfig(store.getState)
      )
      .then((response) => {
        this.setState({
          settingsId: response.data.id,
          profile_pic: response.data.profile_pic,
          storename: response.data.store_name,
        });
      })
      .catch((err) => console.log(err));
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
        (image) => {
          /* Once all promises are resolved, update state with image URI array */
          this.setState({
            profile_pic: image,
            profile_pic_url: files,
          });
          console.log("Exists" + this.props.exists);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  };

  onSubmit = (e) => {
    //console.log("Pictures = "+this.state.newProductPictures);
    // --------------
    e.preventDefault();

    const { storename, profile_pic_url, settingsId, username } = this.state;

    // Update username
    const username_data = {
      username,
    };
    this.props.changeUsername(username_data, this.props.user.id);

    // add profile image to send
    var newSettings = new FormData();
    if (profile_pic_url != "") {
      newSettings.append(
        "profile_pic",
        profile_pic_url[0],
        profile_pic_url[0].name
      );
    }
    newSettings.append("store_name", storename);

    // If the settings object exists edit it else create a new one
    if (this.props.exists) {
      console.log(this.props.id);
      this.props.updateSettings(newSettings, settingsId);
    } else {
      this.props.createSettings(newSettings);
    }
  };

  render() {
    const { profile_pic, username, storename } = this.state;
    return (
      <div>
        <Header />
        <div className="settingsBack">
          <h3>Settings</h3>
          <div className="settingsCont">
            <Link to="/settings/password">
              <div>
                <div className="changePassBtn">
                  <h4>Change Password</h4>
                </div>
              </div>
            </Link>
            <div className="settingsImageCont">
              <div className="settingsImage">
                {profile_pic == "" ? (
                  <div className="settingsImageBox">
                    <img
                      src={GalleryIcon}
                      alt="profilepicholder"
                      title="profilepicholder"
                    />
                  </div>
                ) : (
                  <div className="settingsImageBoxUser">
                    <img
                      src={profile_pic}
                      alt="profilepicholder"
                      title="profilepicholder"
                    />
                  </div>
                )}
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
            <form onSubmit={this.onSubmit}>
              <div className="settingTextField">
                <input
                  type="text"
                  name="username"
                  id="label-title"
                  placeholder="Username"
                  onChange={this.onChange}
                  value={username}
                />
              </div>
              <div className="settingTextField">
                <input
                  type="text"
                  name="storename"
                  id="label-title"
                  placeholder="Store Name"
                  onChange={this.onChange}
                  value={storename}
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
  profile_pic: state.settings.profile_pic,
  profile_pic_url: state.settings.profile_pic_url,
  storename: state.settings.storename,
  exists: state.settings.exists,
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  getSettings,
  createSettings,
  updateSettings,
  changeUsername,
})(Settings);
