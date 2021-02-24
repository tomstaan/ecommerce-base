import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import axios from "axios";
import store from "../../store";
import "./../style/settings.css";

import { tokenConfig, changeUsername } from "../../actions/auth";

import Header from "../layout/Header";
import GalleryIcon from "./../style/images/pic.png";
import TopRoute from "./TopRoute";

import { getSettings } from "../../actions/settings";

export class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      newpassword: "",
    };
  }

  componentDidMount() {
    console.log("mounted");
  }

  render() {
    const { password, newpassword } = this.state;
    return (
      <div>
        <Header />
        <div className="settingsPassBack">
          <TopRoute />
          <div className="changePasswordTitle">
            <h4>Change Password</h4>
          </div>
          <div className="changePasswordForm">
            <form>
              <div className="settingTextField">
                <input
                  type="text"
                  name="password"
                  id="label-title"
                  placeholder="Password"
                />
              </div>
              <div className="settingTextField">
                <input
                  type="text"
                  name="newpassword"
                  id="label-title"
                  placeholder="New Password"
                />
              </div>
              <div className="settingTextField">
                <input
                  type="text"
                  name="confirmnewpassword"
                  id="label-title"
                  placeholder="Confirm New Password"
                />
              </div>
              <div className="settingsSubmitBtn">
                <button type="submit">Change Password</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  /*profile_pic: state.settings.profile_pic,*/
});

export default connect(mapStateToProps, {})(ChangePassword);
