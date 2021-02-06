import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// CSS
import "./../style/transactions.css";
// Modules
import TransactionHeader from "./TransactionHeader";

import { getSales } from "../../actions/sales";

export class TransactionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TransactionList: [],
      sales: [],
    };
  }

  static propTypes = {
    sales: PropTypes.array.isRequired,
    getSales: PropTypes.func.isRequired,
    filteredSales: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getSales();
  }

  handleDate(unixDate) {
    var date = new Date(unixDate * 1000);
    // Year
    var year = date.getFullYear();
    // Month
    var month = date.getMonth();
    // Day
    var day = date.getDate();
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    var fullDate = hours + ":" + minutes + " " + day + "/" + month + "/" + year;
    return fullDate;
  }

  render() {
    return (
      <div>
        <div className="transactionBackground">
          <TransactionHeader />
          <div className="transactionListCont">
            <Fragment>
              {this.props.filteredSales.map((Transaction) => (
                <div key={Transaction.date} className="transactionElement">
                  <div className="transactionElementId">
                    <h4>{Transaction.product_details.order_id}</h4>
                  </div>
                  <div className="transactionElementName">
                    <h4>{Transaction.name}</h4>
                  </div>
                  <div className="transactionElementCustomer">
                    <h4>{Transaction.customer_email}</h4>
                  </div>
                  <div className="transactionElementDate">
                    <h4>{this.handleDate(Transaction.date)}</h4>
                  </div>
                  <div className="transactionElementQuantity">
                    <h4>1</h4>
                  </div>
                  <div className="transactionElementAmount">
                    <h4>€{Transaction.price/100}</h4>
                  </div>
                  <div className="transactionElementStatus">
                    {Transaction.status == "succeeded" ? (
                    <h4 className="transactionElementStatusProcessed">
                      Succeeded
                    </h4>) : (
                      <h4 className="transactionElementStatusRefunded">
                      {Transaction.status}
                    </h4>
                    )}
                  </div>
                </div>
              ))}
            </Fragment>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sales: state.sales.sales,
  filteredSales: state.sales.filteredSales,
});

export default connect(mapStateToProps, {
  getSales,
})(TransactionList);
