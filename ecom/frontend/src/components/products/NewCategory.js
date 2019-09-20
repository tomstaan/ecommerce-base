import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import "./../style/newcategory.css";

//Images
import Arrow from "./../style/images/return.png";
//Other imports
import { getCategory } from "../../actions/category";

export class NewCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    };
  }

  state = {
    productName: ""
  };

  static propTypes = {
    category: PropTypes.array.isRequired,
    getCategory: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getCategory();
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { productName } = this.state;
    const product = {
      productName
    };
    //this.props.addTask(task);
    this.setState({
      productName: ""
    });
  };
  render() {
    const {
      productName
    } = this.state;
    return <div><h3>New category</h3></div>;
  }
}

const mapStateToProps = state => ({
  category: state.category.category
});

export default connect(
  mapStateToProps,
  {
    getCategory
  }
)(NewCategory);
