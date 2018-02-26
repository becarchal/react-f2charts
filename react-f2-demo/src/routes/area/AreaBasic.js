import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import F2charts from "react-f2charts";
// import F2charts from "./../../components/F2charts/index";
import Page from './../../components/common/web-ui/Page';
import { size } from './../../utils/util';
import styles from './../style.less';

class AreaBasic extends Component {
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
      { time: '2016-08-08 00:00:00', tem: 10, city: 'beijing' },
      { time: '2016-08-08 00:10:00', tem: 22, city: 'beijing' },
      { time: '2016-08-08 00:30:00', tem: 16, city: 'beijing' },
      { time: '2016-08-09 00:35:00', tem: 26, city: 'beijing' },
      { time: '2016-08-09 01:00:00', tem: 12, city: 'beijing' },
      { time: '2016-08-09 01:20:00', tem: 26, city: 'beijing' },
      { time: '2016-08-10 01:40:00', tem: 18, city: 'beijing' },
      { time: '2016-08-10 02:00:00', tem: 26, city: 'beijing' },
      { time: '2016-08-10 02:20:00', tem: 12, city: 'beijing' },
      { time: '2016-08-08 00:00:00', tem: 28, city: 'newYork' },
      { time: '2016-08-08 00:10:00', tem: 16, city: 'newYork' },
      { time: '2016-08-08 00:30:00', tem: 26, city: 'newYork' },
      { time: '2016-08-09 00:35:00', tem: 12, city: 'newYork' },
      { time: '2016-08-09 01:00:00', tem: 26, city: 'newYork' },
      { time: '2016-08-09 01:20:00', tem: 20, city: 'newYork' },
      { time: '2016-08-10 01:40:00', tem: 29, city: 'newYork' },
      { time: '2016-08-10 02:00:00', tem: 16, city: 'newYork' },
      { time: '2016-08-10 02:20:00', tem: 22, city: 'newYork' }
    ];
    this.setState({
      data,
      option : `
        var data = ${JSON.stringify(data)};
        chart.source(data, {
          time: {
            type: 'timeCat',
            tickCount: 3,
            range: [ 0, 1 ]
          },
          tem: {
            tickCount: 5,
            min: 0
          }
        });
          /* 配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px) */
        chart.axis('tem', {
          label: {
            fontSize: 14
          }
        });
          /* 配置time刻度文字样式 */
        const label = {
          fill: '#979797',
          font: '14px san-serif',
          offset: 6
        };
        chart.axis('time', {
          label(text, index, total) {
            const cfg = label;
              /* 第一个点左对齐，最后一个点右对齐，其余居中，只有一个点时左对齐 */
            if (index === 0) {
              cfg.textAlign = 'start';
            }
            if (index > 0 && index === total - 1) {
              cfg.textAlign = 'end';
            }
            return cfg;
          }
        });
        chart.area().position('time*tem')
          .color('city')
          .shape('smooth')
          .style({
            opacity: 0.6
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
export default AreaBasic;

