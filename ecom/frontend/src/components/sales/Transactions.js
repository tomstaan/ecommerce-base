import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import "./../style/transactions.css";
import "./../style/dashboard.css";
//import Options from "./Options";
//import ProductList from "./ProductList";
import Options from "./Options";
import TransactionList from "./TransactionList";
import { Fragment } from "react";
import Header from "./../layout/Header"

export class Transactions extends Component {
  render() {
    return (
      <div>
        <Header />
        <div
          className={
            this.props.tranLoadingScreen
              ? "loadingBackground"
              : "loadingBackgroundHidden"
          }
        >
          <div className="loadingBox">
            <Fragment>
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </Fragment>
          </div>
        </div>
        <Options />
        <TransactionList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tranLoadingScreen: state.sales.tranLoadingScreen,
});

export default connect(mapStateToProps, {})(Transactions);
