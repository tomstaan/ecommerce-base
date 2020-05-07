import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./../style/newcategory.css";
import TopRoute from "./TopRoute";

//Images
import Arrow from "./../style/images/return.png";
//Other imports
import { getCategory, addCategory } from "../../actions/category";

export class NewCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      cat_name: "",
      description: "",
      redirect: false,
    };
  }

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
    const { cat_name, description } = this.state;
    const newCat = {
      cat_name,
      description
    };
    this.props.addCategory(newCat);
    this.setState({
      cat_name: "",
      description: "",
      redirect: true,
    });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect push to="/products" />;
    }
    const { cat_name, description } = this.state;
    return (
      <div className="NewCatBack">
        <div className="col-lg-12">
          <TopRoute />
          <div className="newCatTitle">
            <h3>New Category</h3>
          </div>
          <form onSubmit={this.onSubmit}>
            <div className="newCatTopFields">
              <div className="newCatField">
                <input
                  className=""
                  type="text"
                  name="cat_name"
                  id="label-title"
                  placeholder="Category Name"
                  onChange={this.onChange}
                  value={cat_name}
                />
              </div>
              <div className="newCatField">
                <textarea
                  name="description"
                  id="categoryDesc"
                  placeholder="Category Description"
                  onChange={this.onChange}
                  value={description}
                />
              </div>
              <div className="newCatLeftButton">
                <Link to="/products">
                  <button>Cancel</button>
                </Link>
              </div>
              <div className="newCatRightButton">
                <button type="submit">Create Category</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  category: state.category.category
});

export default connect(
  mapStateToProps,
  {
    getCategory,
    addCategory
  }
)(NewCategory);
