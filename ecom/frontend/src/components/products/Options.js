import React, { Component } from 'react';
import './../style/products.css';

//Images
import Filter from './../style/images/filter.png';
import Actions from './../style/images/options.png';
import Add from './../style/images/plus.png';

export default class Options extends Component {
    render() {
        return (
            <div className="productOptions">   
                <div className="selectBox">
                    <div className="selectFrame">
                        <div className="selectCube"></div>
                    </div>
                    <div className="selectText">
                        <h2>Select All</h2>
                    </div>
                </div>
                <div className="filterBox">
                    <img src={Filter} alt="Filter" title="Filter"/>
                    <div className="actionText">
                        <h2>Filter</h2>
                    </div>
                </div>
                <div className="actionBox">
                    <img src={Actions} alt="Actions" title="Actions" />
                    <div className="actionText">
                        <h2>Actions</h2>
                    </div>
                </div>
                <div className="AddProdBtn">
                    <img src={Add} alt="Add" title="Add"/>
                    <div className="AddProdText">
                        <h2>Add Product</h2>
                    </div>
                </div>
                <div className="AddProdCatBtn">
                    <img src={Add} alt="Add" title="Add" />
                    <div className="AddProdCatText">
                        <h2>Add Product Category</h2>
                    </div>
                </div>
            </div>
        )
    }
}
