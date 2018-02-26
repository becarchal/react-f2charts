import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Page404.css';

class Page404 extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.loading !== nextProps.loading) {
      return true;
    }
    return false;
  }
  render() {
    const { loading, src } = this.props;
    if (loading) {
      return (
        <div
          className={styles.mask}
          onClick={event => {
            console.log();
          }}
        >
          <img src={src} alt="" className={styles.img} />
          <h1>数据加载失败</h1>
          <h2>回退后，请稍后再试</h2>
        </div>
      );
    } else {
      return null;
    }
  }
}

Page404.propTypes = {
  loading: PropTypes.bool,
  src: PropTypes.string
};
Page404.defaultProps = {
  src: require('./image/404.png')
};
export default Page404;
