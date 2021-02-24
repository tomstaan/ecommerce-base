import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider as AlertProvider } from "react-alert"
import AlertTemplate from "react-alert-template-basic"
import "./style/Background.css";
import Feed from "./layout/Feed.js";
//Redux
import { Provider } from "react-redux";
//Provider store
import store from "../store";
import { Fragment } from "react";
import { loadUser } from "../actions/auth";
import Alerts from "./layout/Alerts";

// optional configuration
const alertOptions = {
  // you can also just use 'bottom center'
  position: 'top center',
  timeout: 3000,
  containerStyle: {
    zIndex: 500
  }
}

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Fragment>
          <div className="appContent">
            <Alerts />
            <Feed />
          </div>
        </Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
