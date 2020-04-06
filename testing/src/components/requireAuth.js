import React, { Component } from 'react';
import { connect } from 'react-redux';

// HOC scaffold or Boilerplate
export default (ChildComponent) => {

  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // called when it receives new set of props
    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }

    render() {
      return (
        <ChildComponent />
      );
    }
  }
  function mapStateToProps(state) {
    return {
      auth: state.auth
    };
  }
  return connect(mapStateToProps)(ComposedComponent);

};
