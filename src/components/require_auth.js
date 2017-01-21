import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  class Authentication extends Component {
    render() {
      return <ComposedComponent {...this.props} />
    }
  }
  function mapStateToProps({auth}) {
    return { auth };
  }
  return connect(mapStateToProps)(Authentication);
}
