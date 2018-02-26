import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './FsLoading.less';

class FsLoading extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.loading !== nextProps.loading) {
      return true;
    }
    return false;
  }

  render() {
    const { loading, name } = this.props;
    return (
      <div
        className={classnames(styles.loader, {
          [styles.hidden]: !loading,
          [styles.show]: loading
        })}
        onClick={event => {
          event.stopPropagation();
        }}
      >
        <div className={styles.warpper}>
          <div className={styles.inner} />
          <div className={styles.text}>{name}</div>
        </div>
      </div>
    );
  }
}

FsLoading.propTypes = {
  loading: PropTypes.bool,
  name: PropTypes.string
};
FsLoading.defaultProps = {};
export default FsLoading;
