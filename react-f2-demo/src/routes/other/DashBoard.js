import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
// import F2charts from "react-f2charts";
import F2charts from "./../../components/F2charts/index";
import Page from './../../components/common/web-ui/Page';
import { size } from './../../utils/util';
import styles from './../style.less';

class DashBoard extends Component {
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
      { time: '2016-08-08 00:00:00', tem: 10 },
      { time: '2016-08-08 00:10:00', tem: 22 },
      { time: '2016-08-08 00:30:00', tem: 20 },
      { time: '2016-08-09 00:35:00', tem: 26 },
      { time: '2016-08-09 01:00:00', tem: 20 },
      { time: '2016-08-09 01:20:00', tem: 26 },
      { time: '2016-08-10 01:40:00', tem: 28 },
      { time: '2016-08-10 02:00:00', tem: 20 },
      { time: '2016-08-10 02:20:00', tem: 40 }
    ];
    this.setState({
      data,
      option : `
      var Shape = F2.Shape;
      var G = F2.Graphic;
      var data = [{pointer: '当前收益',value: 5, length:2,y:1.05}];
      /* 自定义绘制数据的的形状 */
      Shape.registerShape('point', 'dashBoard', {
        getPoints:function(cfg){
          var x = cfg.x;
          var y = cfg.y;
    
          return [
            {x: x, y: y},
            {x: x, y: 0.5}
          ];
        },
        draw: function(cfg, canvas){
          var point1 = cfg.points[0];
          var point2 = cfg.points[1];
          point1 = this.parsePoint(point1);
          point2 = this.parsePoint(point2);
    
          G.drawLines([point1, point2], canvas, {
            stroke: '#18b7d6',
            lineWidth: 2
          });
    
          var text = cfg.origin._origin.value.toString();
          G.drawText(text+'%', cfg.center, canvas, {
            fillStyle: '#f75b5b',
            font:'30px Arial',
            textAlign: 'center',
            textBaseline: 'bottom'
          });
    
          G.drawText(cfg.origin._origin.pointer, cfg.center, canvas, {
            fillStyle: '#ccc',
            textAlign: 'center',
            textBaseline: 'top'
          });
        }
      });
      chart.source(data, {
        'value': {
          type: 'linear',
          min: 0,
          max: 15,
          ticks: [0, 5, 7.5, 10, 15],
          nice: false
        },
        'length': {type: 'linear',min: 0,max: 10},
        y: {type: 'linear',min: 0, max: 1}
      });
    
      chart.coord('polar',{
        inner: 0,
        startAngle: -1.25 * Math.PI,
        endAngle: 0.25 * Math.PI
      });
    
      /* 配置value轴刻度线 */
      chart.axis('value', {
        tickLine: {
          strokeStyle: '#b9e6ef',
          lineWidth: 2,
          value: -5
        },
        label: null,
        grid: null,
        line: null
      });
    
      chart.axis('y', false);
    
      /* 绘制仪表盘辅助元素 */
      chart.guide().arc([0,1.05],[4.8,1.05],{
        strokeStyle: '#18b7d6',
        lineWidth:5,
        lineCap: 'round'
      });
      chart.guide().arc([5.2,1.05],[9.8,1.05],{
        strokeStyle: '#ccc',
        lineWidth:5,
        lineCap: 'round'
      });
      chart.guide().arc([10.2,1.05],[15,1.05],{
        strokeStyle: '#ccc',
        lineWidth:5,
        lineCap: 'round'
      });
      chart.guide().arc([0,1.2],[15,1.2],{
        strokeStyle: '#ccc',
        lineWidth:1
      });
    
      chart.guide().text([-0.5,1.3], '0.00%', {
        fillStyle: '#ccc',
        font:'18px Arial',
        textAlign: 'center'
      });
      chart.guide().text([7.5,0.7], '7.50%', {
        fillStyle: '#ccc',
        font:'18px Arial',
        textAlign: 'center'
      });
      chart.guide().text([15.5,1.3], '15.00%', {
        fillStyle: '#ccc',
        font:'18px Arial',
        textAlign: 'center'
      });
    
      chart.point().position('value*y').size('length').color('#18b7d6').shape('dashBoard');
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
export default DashBoard;

