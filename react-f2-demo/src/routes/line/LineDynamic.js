import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import F2charts from "react-f2charts";
// import F2charts from "./../../components/F2charts/index";
import Page from './../../components/common/web-ui/Page';
import { size } from './../../utils/util';
import styles from './../style.less';

class LineDynamic extends Component {
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
      { time: '周一', tem: 10, city: 'beijing' },
      { time: '周二', tem: 22, city: 'beijing' },
      { time: '周三', tem: 20, city: 'beijing' },
      { time: '周四', tem: 26, city: 'beijing' },
      { time: '周五', tem: 20, city: 'beijing' },
      { time: '周六', tem: 26, city: 'beijing' },
      { time: '周日', tem: 28, city: 'beijing' },
      { time: '周一', tem: 5, city: 'newYork' },
      { time: '周二', tem: 12, city: 'newYork' },
      { time: '周三', tem: 26, city: 'newYork' },
      { time: '周四', tem: 20, city: 'newYork' },
      { time: '周五', tem: 28, city: 'newYork' },
      { time: '周六', tem: 26, city: 'newYork' },
      { time: '周日', tem: 20, city: 'newYork' }
    ];
    this.setState({
      data,
      option : `
      var data = [];
      /* 添加数据，模拟数据，可以指定当前时间的偏移的秒 */
      function getRecord(offset) {
        offset = offset || 0;
        return {
          time: new Date().getTime() + offset * 1000,
          value: Math.random() + 10
        };
      }
    
      data.push(getRecord(-2));
      data.push(getRecord(-1));
      data.push(getRecord());
    
      var defs = {
        time: {
          type: 'timeCat',
          mask: 'hh:mm:ss',
          tickCount: 5,
          range: [ 0, 1 ]
        },
        value: {
          tickCount: 5,
          min: 8
        }
      };
      /* 配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px) */
      chart.axis('value', {
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
      chart.line().position('time*value');
      chart.render();
    
      setInterval(function() {
        data.push(getRecord());
        chart.changeData(data);
      }, 2000);`,
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
export default LineDynamic;

