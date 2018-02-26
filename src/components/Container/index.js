import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div style={{ width: this.props.width, display: "flex", flexDirection: 'row' }}>
        {this.props.children}  
      </div>
    );
  }
}
