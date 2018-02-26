import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
// import F2charts from "react-f2charts";
import F2charts from "./../../components/F2charts/index";
import Page from './../../components/common/web-ui/Page';
import { size } from './../../utils/util';
import styles from './../style.less';

class PieAnnular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option : '',
      data: []
    };
  }
  componentWillMount() {
  }
  componentDidMount() {
  }
  getData = () => {
    const data = [
      {a: '1', b: 0.3, c: '1'},
      {a: '1', b: 0.3, c: '2'},
      {a: '1', b: 0.4, c: '3'}
    ];
    this.setState({
      data,
      option : `
        var data = ${JSON.stringify(data)};
        chart.source(data);
      
        chart.coord('polar', {
          transposed: true,
          inner: 0.6
        });
      
        chart.axis(false);
        chart.interval().position('a*b').color('c').adjust('stack');
        chart.animate({
          type: 'wavec'
        });
        chart.render();`,
    })
  }
  render() {
    const { option, data } = this.state;
    return (
      <Page className={styles.pageStyle} style={{ height: size.height }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{}</title>
        </Helmet>
        <button className={styles.button} onClick={this.getData}><p>Get Datasource!!</p></button>
        <F2charts option={option}  height={300} width={330} datasource={data}/>
      </Page>
    );
  }
}
export default PieAnnular;

