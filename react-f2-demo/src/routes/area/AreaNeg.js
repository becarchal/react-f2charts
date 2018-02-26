import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import F2charts from "react-f2charts";
// import F2charts from "./../../components/F2charts/index";
import Page from './../../components/common/web-ui/Page';
import { size } from './../../utils/util';
import styles from './../style.less';

class AreaNeg extends Component {
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
      { month: 'Jan', value: 6.06 },
      { month: 'Feb', value: 82.2 },
      { month: 'Mar', value: -22.11 },
      { month: 'Apr', value: 21.53 },
      { month: 'May', value: -21.74 },
      { month: 'Jun', value: 73.61 },
      { month: 'Jul', value: 53.75 },
      { month: 'Aug', value: 60.32 }
    ];
    this.setState({
      data,
      option : `
        var data = ${JSON.stringify(data)};
        chart.source(data, {
          month: {
            range: [ 0, 1 ]
          },
          value: {
            tickCount: 5
          }
        });
          /* 配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px) */
        chart.axis('value', {
          label: {
            fontSize: 14
          }
        });
          /* 配置time刻度文字样式 */
        var label = {
          fill: '#979797',
          font: '14px san-serif',
          offset: 6
        };
        chart.axis('month', {
          line: null,
          label(text, index, total) {
            var cfg = label;
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
        chart.area({
          startOnZero: true /* X 轴从 0 开始 */
        }).position('month*value')
          .color('#FE6384')
          .style({
            opacity: 0.45
          });
        chart.line()
          .position('month*value')
          .color('#FE6384')
          .size(4);
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
export default AreaNeg;

