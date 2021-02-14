import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style/Background.css";
import Feed from "./layout/Feed.js";
//
//Redux
import { Provider } from "react-redux";
//Provider store
import store from "../store";
import { Fragment } from "react";
import { loadUser } from "../actions/auth";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <div className="appContent">
            <Feed />
          </div>
        </Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
