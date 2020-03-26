import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { reduxForm, Field } from "redux-form";

// import { Container } from './styles';

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field name="name" component="input"></Field>
          <Field name="month" component="input"></Field>
          <Field name="year" component="input"></Field>
        </div>
        <div className="box-footer">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default reduxForm({ form: "billingCycleForm" })(BillingCycleForm);
