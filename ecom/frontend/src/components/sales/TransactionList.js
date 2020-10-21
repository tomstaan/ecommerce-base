import React, { Component } from "react";

// CSS
import "./../style/transactions.css";
// Modules
import TransactionHeader from "./TransactionHeader";

export default class TransactionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TransactionList: [],
    };
  }

  componentDidMount() {
    this.setState({
      TransactionList: [
        {
          id: "23kj4n4n",
          product_name: "Iphone 11",
          customer_email: "johndoe123@gmail.com",
          date: "13:45 08/11/2020",
          quantity: 1,
          price: "699.00",
          status: "Processed",
        },
        {
          id: "dkjfn09f",
          product_name: "Samsung S10",
          customer_email: "johndoe321@gmail.com",
          date: "16:35 06/12/2020",
          quantity: 1,
          price: "599.00",
          status: "Processed",
        },
        {
          id: "sd09jc0sd",
          product_name: "Apple Watch",
          customer_email: "johndoe9238@gmail.com",
          date: "13:33 01/12/2019",
          quantity: 1,
          price: "499.00",
          status: "Processed",
        },
      ],
    });
  }

  componentDidUpdate() {
    console.log(this.state.TransactionList);
  }

  render() {
    return (
      <div>
        <div className="transactionBackground">
          <TransactionHeader />
          <div className="transactionListCont">
            {this.state.TransactionList.map((Transaction) => (
              <div className="transactionElement" key={Transaction.id}>
                <div className="transactionSelectCont">
                  <div className="transactionSelectBack">
                    <input className="transactionSelectBox" type="checkbox" />
                    <span className="transactionSelectCheck" />
                  </div>
                </div>
                <div className="transactionElementId">
                  <h4>{Transaction.id}</h4>
                </div>
                <div className="transactionElementName">
                  <h4>{Transaction.product_name}</h4>
                </div>
                <div className="transactionElementCustomer">
                  <h4>{Transaction.customer_email}</h4>
                </div>
                <div className="transactionElementDate">
                  <h4>{Transaction.date}</h4>
                </div>
                <div className="transactionElementQuantity">
                  <h4>{Transaction.quantity}</h4>
                </div>
                <div className="transactionElementAmount">
                  <h4>€{Transaction.price}</h4>
                </div>
                <div className="transactionElementStatus">
                  <h4 className="transactionElementStatusProcessed">
                    {Transaction.status}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
