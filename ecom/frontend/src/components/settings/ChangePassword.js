import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import axios from "axios";
import store from "../../store";
import "./../style/settings.css";

import { tokenConfig, changeUsername } from "../../actions/auth";
import { returnErrors } from "../../actions/messages";

import Header from "../layout/Header";
import GalleryIcon from "./../style/images/pic.png";
import TopRoute from "./TopRoute";

import { changePassword } from "../../actions/auth";
import Alerts from "../layout/Alerts";

export class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      new_password: "",
      confirm_new_password: "",
    };
  }

  componentDidMount() {
    console.log("mounted");
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { password, new_password, confirm_new_password } = this.state;
    console.log("Password = " + password);
    console.log("New Password = " + new_password);
    console.log("Confirm Password = " + confirm_new_password);
    if (password == "" || new_password == "" || confirm_new_password == "") {
      this.props.returnErrors("passwordempty", "enter password");
    } else if (new_password != confirm_new_password) {
      this.props.returnErrors("passwordmatch", "new password's don't match");
    } else {
      const passwords = {
        password: password,
        newpassword: new_password,
      };
      this.props.changePassword(passwords, this.props.user.id);
      this.setState({
        password: "",
        new_password: "",
        confirm_new_password: "",
      });
    }
  };

  render() {
    const { password, new_password, confirm_new_password } = this.state;
    return (
      <div>
        <Header />
        <div className="settingsPassBack">
          <TopRoute />
          <div className="changePasswordTitle">
            <h4>Change Password</h4>
          </div>
          <div className="changePasswordForm">
            <form onSubmit={this.onSubmit}>
              <div className="settingTextField">
                <input
                  type="password"
                  name="password"
                  id="label-title"
                  placeholder="Current Password"
                  onChange={this.onChange}
                  value={password}
                />
              </div>
              <div className="settingTextField">
                <input
                  type="password"
                  name="new_password"
                  id="label-title"
                  placeholder="New Password"
                  onChange={this.onChange}
                  value={new_password}
                />
              </div>
              <div className="settingTextField">
                <input
                  type="password"
                  name="confirm_new_password"
                  id="label-title"
                  placeholder="Confirm New Password"
                  onChange={this.onChange}
                  value={confirm_new_password}
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
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  changePassword,
  returnErrors,
})(ChangePassword);
