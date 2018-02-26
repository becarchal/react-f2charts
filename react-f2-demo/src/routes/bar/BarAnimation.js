import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import F2charts from "react-f2charts";
// import F2charts from "./../../components/F2charts/index";
import Page from './../../components/common/web-ui/Page';
import { size } from './../../utils/util';
import styles from './../style.less';

class BarAnimation extends Component {
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
      { tem: 500, month: '3月' },
      { tem: -50, month: '4月' },
      { tem: 450, month: '5月' },
      { tem: -40, month: '6月' },
      { tem: 690, month: '7月' },
      { tem: 346, month: '8月' }
    ];
    this.setState({
      data,
      option : `
        var data = ${JSON.stringify(data)};
        chart.source(data, {
          tem: {
            tickCount: 5
          }
        });
        chart.axis('month', {
          label: {
            font: 'sans-serif '
          },
          line: null,
          grid: null
        });
        chart.axis('tem', {
          label: null,
          grid: {
            stroke: '#f8f8f8'
          }
        });
        chart.interval().position('month*tem').color('tem*month', function(tem, month) {
          if (month === '8月') {
            return '#f5623a';
          }
          if (tem >= 0) {
            return '#f8bdad';
          }
          if (tem < 0) {
            return '#99d6c0';
          }
        });
        /* y轴方向的缩放动画 */
        chart.animate({
          type: 'scaley'
        });
        /* 辅助元素 */
        data.forEach(function(obj, index) {
          /* 文字部分 */
          var offsetY = obj.tem > 0 ? -16 : 14;
          chart.guide().html([ obj.month, obj.tem ], "<div style='color: #999999;'><span>" + obj.tem + "</span></div>", {
            align: 'cc',
            offset: [ 0, offsetY ]
          });
          /* 背景部分 */
          var offset = 0.25;
          chart.guide().rect([ index - offset, 'max' ], [ index + offset, 'min' ], { fill: '#f8f8f8' });
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
export default BarAnimation;

