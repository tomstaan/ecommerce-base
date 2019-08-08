import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style/Background.css";
import Header from "./layout/Header";
import Feed from './layout/Feed.js';

class App extends Component {
  render() {
    return(
      <div className="appContent">
        <Header />
        <Feed />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
