import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import F2charts from "react-f2charts";
// import F2charts from "./../../components/F2charts/index";
import Page from './../../components/common/web-ui/Page';
import { size } from './../../utils/util';
import styles from './../style.less';

class PiePolar extends Component {
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
        { country: '中国', cost: 96 },
        { country: '德国', cost: 121 },
        { country: '美国', cost: 100 },
        { country: '日本', cost: 111 },
        { country: '韩国', cost: 102 },
        { country: '法国', cost: 124 },
        { country: '意大利', cost: 123 },
        { country: '荷兰', cost: 111 }
    ];
    this.setState({
      data,
      option : `
        var data = ${JSON.stringify(data)};
        chart.source(data, {
            'cost': {
              min: 0
            }
          });
          chart.coord('polar');
          chart.legend({
            position: 'right'
          });
          chart.tooltip({
            offsetY: -20
          });
          chart.axis('cost', {
            label: {
              top: true
            },
            grid(text, index) {
              if (text === '140') {
                return {
                  lineDash: null
                };
              }
            },
            line: {
              top: false
            }
          });
          chart.interval()
            .position('country*cost')
            .color('country')
            .style({
              lineWidth: 1,
              stroke: '#fff'
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
export default PiePolar;

