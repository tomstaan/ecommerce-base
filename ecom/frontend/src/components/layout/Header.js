import React, { Component } from 'react';
import './../style/header.css';

//Images
import logo from "./../style/images/headlogo.png";

export default class Header extends Component {
    render() {
        return (
            <div className="headerCont">
                <header>
                    <div className="headerLmt">
                        <div className="col-lg-12">
                            <div className="headerLogo">
                                <img src={logo} alt="Logo" title="Logo" />
                            </div>
                            <div className="headerUserMenu">
                                <ul>
                                    <li>
                                        <div className="userMenuProfile">
                                            
                                        </div>
                                    </li>
                                    <li>
                                        <div className="userMenuMessage">
                                            <div className="userMenuMessageAlert"></div>
                                        </div>
                                    </li>
                                </ul>
                                
                            </div>
                            <div className="mainSearchCont">
                                <div className="mainSearchBar">
                                    <div className="mainSearchIcon">
                                        <div className="mainSearchImg"></div>
                                    </div>
                                    <input type="search" name="mainsearch" id="mainsearch" autocomplete="off" />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="headerLower">

                </div>
            </div>
        )
    }
}
