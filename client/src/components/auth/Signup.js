import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {


  renderInput = ({ input, label, meta, type }) => {
    return (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} type={type} autoComplete="off"/>
        </div>
      </div>
    )
  }

  onSubmit = (formProps) => {
    console.log(formProps);
    this.props.signup(formProps, () => {
      this.props.history.push('/feature');
    });

  };

  render() {
    // this is provided by redux form
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            name="email"
            type="text"
            component={this.renderInput}
            label="Email"
            autoComplete="none"
            />
          <Field
            name="password"
            type="password"
            component={this.renderInput}
            label="Password"
            autoComplete="none"
            />
        <div>
          { this.props.errorMessage }
        </div>
        <button>Sign Up!</button>
      </form>
    );
  }

}

function mapStateToProps (state) {
  return { errorMessage: state.auth.errorMessage };
}

// inside compose we can pass many Higher Order Component (HOC)
export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })

)(Signup);
