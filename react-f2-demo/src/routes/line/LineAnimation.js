import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import F2charts from "react-f2charts";
// import F2charts from "./../../components/F2charts/index";
import Page from './../../components/common/web-ui/Page';
import { size } from './../../utils/util';
import styles from './../style.less';

class LineAnimation extends Component {
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
      { time: '2016-08-08 00:00:00', tem: 4, city: 'hangzhou' },
      { time: '2016-08-08 00:10:00', tem: 3, city: 'hangzhou' },
      { time: '2016-08-08 00:30:00', tem: 6, city: 'hangzhou' },
      { time: '2016-08-09 00:35:00', tem: -12, city: 'hangzhou' },
      { time: '2016-08-09 01:00:00', tem: 1, city: 'hangzhou' },
      { time: '2016-08-09 01:20:00', tem: 9, city: 'hangzhou' },
      { time: '2016-08-10 01:40:00', tem: 13, city: 'hangzhou' },
      { time: '2016-08-10 02:00:00', tem: -3, city: 'hangzhou' },
      { time: '2016-08-10 02:20:00', tem: 11, city: 'hangzhou' }
    ];
    this.setState({
      data,
      option : `
        var data = ${JSON.stringify(data)};
        chart.source(data, {
          time: {
            type: 'timeCat',
            tickCount: 3,
            mask: 'hh:mm',
            range: [ 0, 1 ]
          },
          tem: {
            tickCount: 3,
            formatter(item) {
              return item + '%';
            }
          }
        });
        chart.axis('tem', {
          grid(text) {
            if (text === '0%') {
              return {
                stroke: '#efefef'
              };
            }
            return {
              stroke: '#f7f7f7'
            };
      
          },
          label: {
            fontSize: 14
          }
        });
        chart.axis('time', {
          line: null,
          label: {
            fontSize: 14
          }
        });
        /* 添加辅助元素 */
        var point = [ '2016-08-10 02:20:00', 12 ];
        chart.guide().html(point, "<div style='border-radius: 12px;border: none;width: 22px;height: 22px;background-color: rgba(102, 182, 241, 0.5);'></div>", { align: 'cc' });
        chart.guide().html(point, "<div style='border-radius: 7px;border: none;width: 12px;height: 12px;background-color: rgb(15, 141, 232);'></div>", { align: 'cc' });
        chart.line().position('time*tem')
          .color('city')
          .size(3)
          .shape('city', function(city) {
            if (city === 'beijing') {
              return 'line';
            }
            if (city === 'hangzhou') {
              return 'dash';
            }
          });
        /* 水平方向的平铺动画 */
        chart.animate({
          type: 'waveh'
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
export default LineAnimation;

