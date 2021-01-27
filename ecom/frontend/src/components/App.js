import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./style/Background.css";
import Header from "./layout/Header";
import Feed from "./layout/Feed.js";
//
//Redux
import { Provider } from "react-redux";
//Provider store
import store from "../store";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="appContent">
            <Header />
            <Feed />
          </div>
        </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
