import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import F2charts from "react-f2charts";
// import F2charts from "./../../components/F2charts/index";
import Page from './../../components/common/web-ui/Page';
import { size } from './../../utils/util';
import styles from './../style.less';
// import scatterdata from './scatter.json';

class PointBasic extends Component {
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
      {"time": '2016-08-08 00:00:00',"tem": 10},
      {"time": '2016-08-08 00:10:00',"tem": 22},
      {"time": '2016-08-08 00:30:00',"tem": 20},
      {"time": '2016-08-09 00:35:00',"tem": 26},
      {"time": '2016-08-09 01:00:00',"tem": 20},
      {"time": '2016-08-09 01:20:00',"tem": 26},
      {"time": '2016-08-10 01:40:00',"tem": 28},
      {"time": '2016-08-10 02:00:00',"tem": 20},
      {"time": '2016-08-10 02:20:00',"tem": 28}
    ];
    this.setState({
      data,
      option : `
        var data = ${JSON.stringify(data)};
        var defs = {
          time: {
            type: 'timeCat',
            tickCount: 3
          },
          tem: {
            tickCount: 5,
            min: 0
          }
        };
        /* 配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px) */
        chart.axis('tem', {
          label: {
            fontSize: 14
          }
        });
        chart.axis('time', {
          label: {
            fontSize: 14
          }
        });
        chart.source(data, defs);
        chart.point().position('time*tem');
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
export default PointBasic;

