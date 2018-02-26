import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
// import F2charts from "react-f2charts";
import F2charts from "./../../components/F2charts/index";
import Page from './../../components/common/web-ui/Page';
import { size } from './../../utils/util';
import styles from './../style.less';
import scatterdata from './scatter.json';

class PointBubble extends Component {
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
    const data = scatterdata;
    this.setState({
      data,
      option : `
        var data = ${JSON.stringify(data)};
        chart.source(data, {
          LifeExpectancy: {
            alias: '人均寿命（年）',
            tickCount: 5
          },
          GDP: {
            alias: '人均国内生产总值($)'
          },
          Country: {
            alias: '国家/地区'
          }
        });
        chart.axis('GDP', {
          label(value){
            return {
              text: (value / 1000).toFixed(0) + 'k'
            };
          }
        });
        chart.axis('GDP', {
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
        chart.tooltip(false);
        chart.point().position('GDP*LifeExpectancy')
          .size('Population', [ 4, 65 ])
          .color('continent')
          .style({
            fillOpacity: 0.65
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
export default PointBubble;

