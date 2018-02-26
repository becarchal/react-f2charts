import React, { Component } from 'react';
import { Container, F2charts } from './components'

export default class App extends Component {
  render() {
    return (
      <Container width={this.props.width}>
        <F2charts {...this.props} />
      </Container>
    );
  }
}
