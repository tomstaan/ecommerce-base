import React, { Component } from "react";

// CSS
import "./../style/transactions.css";
// Modules
import TransactionHeader from "./TransactionHeader";

export default class TransactionList extends Component {
  render() {
    return (
      <div>
        <div className="transactionBackground">
          <TransactionHeader />
          <div className="transactionListCont">


            
            <div className="transactionElement">
              <div className="transactionSelectCont">
                <div className="transactionSelectBack">
                  <input
                    className="transactionSelectBox"
                    type="checkbox"
                  />
                  <span className="transactionSelectCheck" />
                </div>
              </div>
              <div className="transactionElementId">
                <h4>2kj3n1kjn</h4>
              </div>
              <div className="transactionElementName">
                <h4>Iphone 11</h4>
              </div>
              <div className="transactionElementCustomer">
                <h4>johndoe123@gmail.com</h4>
              </div>
              <div className="transactionElementDate">
                <h4>13:45 08/11/2020</h4>
              </div>
              <div className="transactionElementQuantity">
                <h4>1</h4>
              </div>
              <div className="transactionElementAmount">
                <h4>€699.00</h4>
              </div>
              <div className="transactionElementStatus">
                <h4 className="transactionElementStatusProcessed">Processed</h4>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    );
  }
}
