import React, { Component } from 'react';
import Page from './../../components/common/web-ui/Page';
import Page404Div from './../../components/common/page-404/Page404';
import { size } from './../../utils/util';
import styles from './Page404.css';

export default class Developing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Page className={styles.pageStyle} style={{ height: size.height }}>
        <Page404Div loading />
      </Page>
    );
  }
}
