import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";


export class NewProduct extends Component {
  render() {
    return (
      <div>
        <button>Back</button>
        <h3>New Product</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(NewProduct);
