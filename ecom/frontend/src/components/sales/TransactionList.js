import React, { Component } from 'react'

// CSS
import "./../style/transactions.css";
// Modules
import TransactionHeader from "./TransactionHeader";

export default class TransactionList extends Component {
    render() {
        return (
            <div>
                <TransactionHeader/>
            </div>
        )
    }
}
