import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
// import F2charts from "react-f2charts";
import F2charts from "./../../components/F2charts/index";
import Page from './../../components/common/web-ui/Page';
import { size } from './../../utils/util';
import styles from './../style.less';

class DoubleY extends Component {
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
      { time: '周一', tem: 6.9, rain: 10 },
      { time: '周二', tem: 9.5, rain: 13 },
      { time: '周三', tem: 14.5, rain: 14 },
      { time: '周四', tem: 18.2, rain: 10 },
      { time: '周五', tem: 21.5, rain: 12 },
      { time: '周六', tem: 25.2, rain: 16 },
      { time: '周日', tem: 26.5, rain: 13 }
    ];
    this.setState({
      data,
      option : `
        var data = ${JSON.stringify(data)};
        chart.source(data, {
          tem: {
            tickCount: 5,
            max: 30,
            min: 0
          },
          rain: {
            tickCount: 5,
            min: 0,
            max: 30
          }
        });
      
        /* 配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px) */
        chart.axis('time', {
          label: {
            fontSize: 14
          },
          grid: null
        });
        chart.axis('tem', {
          label: {
            fontSize: 14
          }
        });
        chart.axis('rain', {
          label: {
            fontSize: 14
          }
        });
        chart.interval().position('time*tem');
        chart.line().position('time*rain')
          .color('#5ed470')
          .size(2)
          .shape('smooth');
        chart.point().position('time*rain').color('#5ed470');
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
export default DoubleY;

