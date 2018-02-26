import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import F2charts from "react-f2charts";
// import F2charts from "./../../components/F2charts/index";
import Page from './../../components/common/web-ui/Page';
import { size } from './../../utils/util';
import styles from './../style.less';

class BarBasic extends Component {
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
      { tem: 10, city: 'tokyo' },
      { tem: 4, city: 'newYork' },
      { tem: 3, city: 'berlin' }
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
        /* 配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px) */
        chart.axis('city', {
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
        chart.interval().position('city*tem').color('city');
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
export default BarBasic;

