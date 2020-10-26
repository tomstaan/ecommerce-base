import React, { Component } from "react";
import "./../style/transactions.css";
//import Options from "./Options";
//import ProductList from "./ProductList";
import Options from "./Options";
import TransactionList from "./TransactionList";

export default class Transactions extends Component {x
  render() {
    return (
      <div>
         <Options/>
         <TransactionList/>
        </div>
    );
  }
}