# react-f2charts

[![NPM Version](https://img.shields.io/npm/v/react-f2charts.svg?style=flat)](https://www.npmjs.org/package/react-f2charts)
  [![npm](https://img.shields.io/npm/dm/react-f2charts.svg?style=flat)](https://www.npmjs.org/package/react-f2charts)
  [![License](http://img.shields.io/npm/l/react-f2charts.svg?style=flat)](https://raw.githubusercontent.com/becarchal/react-f2charts/master/LICENSE.md)
  
## install

$ npm install react-f2charts --save

## Usage

The Usage is complete consistent with F2charts

component props:

* *option* (object): The option for f2: [Documentation](https://antv.alipay.com/zh-cn/f2/3.x/index.html)。 
* *width* (number): The width of the chart. The default value is the outer container width. 
* *height* (number): The height of the chart. The default value is 400. 


```js
import React, { Component } from 'react';
import F2charts from "react-f2charts";

export default class App extends Component {
  constructor(props) {
    super(props);
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
    this.state = {
      option : `
        var data = ${JSON.stringify(data)};
        var defs = {
          time: {
            type: 'timeCat',
            mask: 'MM/DD',
            tickCount: 3,
            range: [ 0, 1 ]
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
        chart.line().position('time*tem');
        chart.render();`,
      data
    };
  }
  componentWillMount() {
  }
  componentDidMount() {
  }
  render() {
    const { option, data } = this.state;
    return (
      <div style={{ height: window.innerHeight }}>
        <F2charts option={option}  height={300} width={330} datasource={data}/>
      </div>
    );
  }
}

```



##Example

*run demo*

```
cd react-f2-demo
npm install
npm start
```

## License

react-f2charts is released under the MIT license.
