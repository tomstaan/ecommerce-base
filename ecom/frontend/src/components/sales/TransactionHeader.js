import React, { Component } from 'react'

// CSS
import "./../style/transactions.css";

export default class TransactionHeader extends Component {
    render() {
        return (
            <div>
                <div className="transactionBackground">
                    <div className="transactionHeader">
                        <div className="transactionHeaderSpace"></div>
                        <div className="transactionHeaderId">
                            <h3>ID</h3>
                        </div>
                        <div className="transactionHeaderName">
                            <h3>Product Name</h3>
                        </div>
                        <div className="transactionHeaderCustomer">
                            <h3>Customer</h3>
                        </div>
                        <div className="transactionHeaderDate">
                            <h3>Date</h3>
                        </div>
                        <div className="transactionHeaderQuantity">
                            <h3>Quantity</h3>
                        </div>
                        <div className="transactionHeaderAmount">
                            <h3>Amount</h3>
                        </div>
                        <div className="transactionHeaderStatus">
                            <h3>Status</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
