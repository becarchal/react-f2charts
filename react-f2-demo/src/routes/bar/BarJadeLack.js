import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import F2charts from "react-f2charts";
// import F2charts from "./../../components/F2charts/index";
import Page from './../../components/common/web-ui/Page';
import { size } from './../../utils/util';
import styles from './../style.less';

class BarJadeLack extends Component {
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
      { time: '周一', tem: 6.9, city: 'tokyo' },
      { time: '周二', tem: 9.5, city: 'tokyo' },
      { time: '周三', tem: 14.5, city: 'tokyo' },
      { time: '周四', tem: 18.2, city: 'tokyo' },
      { time: '周五', tem: 21.5, city: 'tokyo' },
      { time: '周六', tem: 25.2, city: 'tokyo' },
      { time: '周日', tem: 26.5, city: 'tokyo' },
      { time: '周一', tem: 0.8, city: 'newYork' },
      { time: '周二', tem: 5.7, city: 'newYork' },
      { time: '周三', tem: 11.3, city: 'newYork' },
      { time: '周四', tem: 17, city: 'newYork' },
      { time: '周五', tem: 22, city: 'newYork' },
      { time: '周六', tem: 24.8, city: 'newYork' },
      { time: '周日', tem: 24.1, city: 'newYork' },
      { time: '周一', tem: 0.6, city: 'berlin' },
      { time: '周二', tem: 3.5, city: 'berlin' },
      { time: '周三', tem: 8.4, city: 'berlin' },
      { time: '周四', tem: 13.5, city: 'berlin' },
      { time: '周五', tem: 17, city: 'berlin' },
      { time: '周六', tem: 18.6, city: 'berlin' },
      { time: '周日', tem: 17.9, city: 'berlin' }
    ];
    this.setState({
      data,
      option : `
        var data = ${JSON.stringify(data)};
        chart.coord('polar', {
          transposed: true,
          endAngle: Math.PI
        });
      
        chart.source(data, {
          tem: {
            tickCount: 5
          }
        });
        /* 配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px) */
        chart.axis('time', {
          label: {
            fontSize: 14
          },
          grid: null,
          line: false
        });
        chart.axis('tem', false);
        chart.interval().position('time*tem').
          color('city')
          .adjust('dodge');
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
export default BarJadeLack;

