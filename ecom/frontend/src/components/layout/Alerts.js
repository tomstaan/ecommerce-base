import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    console.log("Refreshed")
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name) this.props.alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.email) this.props.alert.error(`Email: ${error.msg.email.join()}`);
      if (error.msg.message) this.props.alert.error(`Message: ${error.msg.message.join()}`);
      if (error.msg.non_field_errors) this.props.alert.error(error.msg.non_field_errors.join());
      if (error.msg.username) this.props.alert.error(`Username: ${error.msg.username.join()}`);
      if (error.msg.password) this.props.alert.error(`Password: ${error.msg.password.join()}`);
    }

    if (message !== prevProps.message) {
      if (message.login) this.props.alert.success(message.login);
      if (message.product) this.props.alert.success(message.product);
      if (message.category) this.props.alert.success(message.category);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));