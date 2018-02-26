import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { touchConflict } from './../../../utils/util';

class FsCell extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.cellInstance = null;
    this.cellDom = null;
  }
  componentDidMount() {
    this.cellDom = ReactDOM.findDOMNode(this.cellInstance);
    touchConflict(this.cellDom, 'y');
  }
  componentWillUnmount() {
    this.cellDom = null;
    this.cellInstance = null;
  }
  render() {
    const { style, className } = this.props;
    return (
      <div
        style={style}
        className={className}
        ref={i => (this.cellInstance = i)}
      >
        {this.props.children}
      </div>
    );
  }
}

FsCell.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string
};
FsCell.defaultProps = {};
export default FsCell;
