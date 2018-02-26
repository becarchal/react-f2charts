/**
 * Created by jf on 15/12/10.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {  routerRedux } from 'dva/router';
import { connect } from 'dva';
import styles from './Page.less';

class Page extends React.Component {
  render() {
    const { className, children, style } = this.props;
    const pageChildren = classNames(styles.page__bd, className);
    return (
      <div className={pageChildren} style={style}>
        <div className={styles.titleBar}>
          <button className={styles.index_back} onClick={() => this.props.dispatch(routerRedux.go(-1))}><p>&#60;</p></button>
          <div className={styles.titleCtn}>{this.props.title}</div>
        </div>
        <div className={styles.react_f2}>react-f2</div>
        {children}
      </div>
    );
  }
}
Page.propTypes = {
  className: PropTypes.string
};
Page.defaultProps = {
  className: styles.page
};
export default connect(state => state.index)(Page);
