import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Accordion extends Component {
  static defaultProps = {
    transitionName: 'slide',
  }

  constructor(props) {
    super(props);
    this.state = {
      showContent: false,
      headerOpacity: 1,
    };
  }

  handleClick() {
    this.setState({
      showContent: !this.state.showContent,
      headerOpacity: this.state.showContent ? 1 : 0.4,
    });
  }

  render() {
    const { children, header, transitionName } = this.props;
    const content = this.state.showContent ? children : false;
    return (
      <div>
        <div onClick={this.handleClick.bind(this)}>
          <div
            style={{
              opacity: this.state.headerOpacity,
              transition: 'opacity .3s',
            }}
          >{ header }</div>
        </div>
        <ReactCSSTransitionGroup
          transitionName={transitionName}
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={0}
        >
          {content}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Accordion;
