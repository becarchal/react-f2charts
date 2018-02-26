import React, { Component } from 'react';
import PureChart from './PureChart';

export default class App extends Component {

  render() {
    const { height, width } = this.props;
    return (
      <div style={{flex: 1, height: height || 400,}}>
        {this.props.datasource.length > 0
          ? <PureChart
            ref={i => (this.ChartRef = i)}
            {... this.props}
          />
          : (this.props.placeholder ||
            <div style={{
            height: height || 400,
            width, display: "flex", justifyContent: "center",
            alignItems: "center" }}>暂无数据</div>)
        }
      </div>
    );
  }
}
