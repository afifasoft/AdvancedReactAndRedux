import React, { Component } from 'react';

// HOC scaffold or Boilerplate
export default (ChildComponent) => {
  class ComposedComponent extends Component {
    render() {
      return (
        <ChildComponent />
      );
    }
  }
  return ComposedComponent;
};
