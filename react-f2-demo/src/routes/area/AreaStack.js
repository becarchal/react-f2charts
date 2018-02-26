import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import F2charts from "react-f2charts";
// import F2charts from "./../../components/F2charts/index";
import Page from './../../components/common/web-ui/Page';
import { size } from './../../utils/util';
import styles from './../style.less';

class AreaStack extends Component {
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
      { month: 1, tem: 6.9, city: 'Tokyo' },
      { month: 2, tem: 9.5, city: 'Tokyo' },
      { month: 3, tem: 14.5, city: 'Tokyo' },
      { month: 4, tem: 18.2, city: 'Tokyo' },
      { month: 5, tem: 21.5, city: 'Tokyo' },
      { month: 6, tem: 25.2, city: 'Tokyo' },
      { month: 7, tem: 26.5, city: 'Tokyo' },
      { month: 8, tem: 23.3, city: 'Tokyo' },
      { month: 9, tem: 18.3, city: 'Tokyo' },
      { month: 10, tem: 13.9, city: 'Tokyo' },
      { month: 11, tem: 9.6, city: 'Tokyo' },
      { month: 12, tem: 7, city: 'Tokyo' },
      { month: 1, tem: 0.8, city: 'New York' },
      { month: 2, tem: 5.7, city: 'New York' },
      { month: 3, tem: 11.3, city: 'New York' },
      { month: 4, tem: 17, city: 'New York' },
      { month: 5, tem: 22, city: 'New York' },
      { month: 6, tem: 24.8, city: 'New York' },
      { month: 7, tem: 24.1, city: 'New York' },
      { month: 8, tem: 20.1, city: 'New York' },
      { month: 9, tem: 14.1, city: 'New York' },
      { month: 10, tem: 8.6, city: 'New York' },
      { month: 11, tem: 2.5, city: 'New York' },
      { month: 12, tem: 0, city: 'New York' },
      { month: 1, tem: 0.6, city: 'Berlin' },
      { month: 2, tem: 3.5, city: 'Berlin' },
      { month: 3, tem: 8.4, city: 'Berlin' },
      { month: 4, tem: 13.5, city: 'Berlin' },
      { month: 5, tem: 17, city: 'Berlin' },
      { month: 6, tem: 18.6, city: 'Berlin' },
      { month: 7, tem: 17.9, city: 'Berlin' },
      { month: 8, tem: 14.3, city: 'Berlin' },
      { month: 9, tem: 9, city: 'Berlin' },
      { month: 10, tem: 3.9, city: 'Berlin' },
      { month: 11, tem: 1, city: 'Berlin' },
      { month: 12, tem: 2, city: 'Berlin' }
    ];
    this.setState({
      data,
      option : `
        var data = ${JSON.stringify(data)};
        chart.source(data, {
          month: {
            tickCount: 12
          },
          tem: {
            tickCount: 5,
            min: 0
          }
        });
        chart.axis('month', {
          label(text, index, total) {
            const textCfg = {};
            if (index === 0) {
              textCfg.textAlign = 'left';
            }
            if (index === total - 1) {
              textCfg.textAlign = 'right';
            }
            return textCfg;
          }
        });
        chart.legend(false);
        chart.tooltip({
          showCrosshairs: true,
        });
        chart.area().position('month*tem').color('city')
          .shape('smooth')
          .adjust('stack');
        chart.line().position('month*tem').color('city')
          .shape('smooth')
          .adjust('stack');
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
export default AreaStack;

