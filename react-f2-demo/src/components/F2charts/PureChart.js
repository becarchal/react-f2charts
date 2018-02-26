import React, { Component } from 'react';
import renderChart from './renderChart';

export default class App extends Component {
  componentDidMount() {
    this.chart = renderChart(this.props, this.ChartRef);
  }
  componentDidUpdate(prevProps, prevState) {
    const newChart = renderChart(prevProps, this.ChartRef);
    if (this.chart !== newChart)
    this.chart = newChart;
  }
  componentWillUnmount() {
    this.chart.destroy();
    this.ChartRef = null;
  }

  render() {
    const { height, backgroundColor } = this.props;
    return (
      <div style={{flex: 1, height: height || 400,}}>
        <canvas
          ref={i => (this.ChartRef = i)}
          style={{
            height: height || 400,
            backgroundColor: backgroundColor || 'transparent'
          }}
        />
      </div>
    );
  }
}
