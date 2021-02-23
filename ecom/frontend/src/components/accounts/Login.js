import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import "./../style/auth.css";

export class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to={this.props.redirectUrl} />;
    }
    const { username, password } = this.state;
    return (
      <div>
        <div className="loginBackground">
          <div className="loginCardBack">
            <div className="loginTextBox">
              <h3>Login</h3>
              <form onSubmit={this.onSubmit}>
                <div className="formFieldBox">
                  <input
                    type="text"
                    name="username"
                    onChange={this.onChange}
                    value={username}
                    placeholder="Username"
                  />
                </div>
                <div className="formFieldBox">
                  <input
                    type="password"
                    name="password"
                    onChange={this.onChange}
                    value={password}
                    placeholder="Password"
                  />
                </div>

                <div className="formFieldBtn">
                  <button type="submit">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  redirectUrl: state.auth.redirectUrl,
});

export default connect(mapStateToProps, { login })(Login);
