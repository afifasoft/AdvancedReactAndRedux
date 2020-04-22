import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {

  onSubmit = (formProps) => {
    console.log(formProps);
    this.props.signin(formProps);
  }

  renderInput = ({ input, label, meta, type }) => {
    return (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} type={type} autoComplete="off"/>
        </div>
      </div>
    );
  }


  render () {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field name="email" type="text" component={this.renderInput} label="Email"/>
          <Field name="password" type="password" component={this.renderInput} label="Password" />
          <div>
            {this.props.errorMessage }
          </div>
          <button>Sign In</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { errorMessage : state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({
    form: "signin"
  })
)(Signin);
