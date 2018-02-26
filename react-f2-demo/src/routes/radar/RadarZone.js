import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import F2charts from "react-f2charts";
// import F2charts from "./../../components/F2charts/index";
import Page from './../../components/common/web-ui/Page';
import { size } from './../../utils/util';
import styles from './../style.less';

class RadarZone extends Component {
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
      {name: '张飞',props: '智力', value: 65},
      {name: '张飞',props: '武力', value: 97},
      {name: '张飞',props: '政治', value: 50},
      {name: '张飞',props: '统帅', value: 92},
      {name: '张飞',props: '忠诚', value: 100},
      {name: '关羽',props: '智力', value: 80},
      {name: '关羽',props: '武力', value: 94},
      {name: '关羽',props: '政治', value: 70},
      {name: '关羽',props: '统帅', value: 95},
      {name: '关羽',props: '忠诚', value: 99}
    ];
    this.setState({
      data,
      option : `
        var data = ${JSON.stringify(data)};
        chart.coord('polar');
        chart.source(data, {
          value: {
            min: 0,
            tickInterval: 20
          }
        });
      
      
        /* 配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px) */
        chart.axis('props', {
          label: {
            fontSize: 14
          },
          line: null
        });
        chart.axis('value', {
          label: {
            fontSize: 14
          }
        });
      
        chart.area().position('props*value').color('name').style({
          opacity: 0.6
        });
        /* x和y轴同时缩放的动画 */
        chart.animate({
          type: 'scalexy'
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
export default RadarZone;

