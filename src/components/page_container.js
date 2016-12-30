import React, { Component } from 'react';

export default class PageContainer extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
      //This will display nested routes in the children props
    );
  }
}