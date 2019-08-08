import React, { Component } from 'react';
import "./../style/products.css";

import Options from './Options'

export default class Products extends Component {
    render() {
        return (
            <div className="productLimit">
                <div className="col-lg-12">
                    <Options />
                </div>
            </div>
        )
    }
}
