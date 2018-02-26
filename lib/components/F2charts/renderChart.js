'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = renderChart;

var _f = require('@antv/f2');

var _f2 = _interopRequireDefault(_f);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function renderChart(props, el) {
  var height = props.height || 400;
  var width = props.width ? props.width : 'auto';
  var padding = props.padding ? props.padding : [30, 30, 30, 30];
  // eslint-disable-next-line
  var chart = new _f2['default'].Chart({
    el: el,
    width: width,
    height: height,
    padding: padding,
    pixelRatio: window.devicePixelRatio
  });
  // eslint-disable-next-line
  eval(props.option);
  // + `myChart.on('click', function(params) {
  //   var seen = [];
  //   var paramsString = JSON.stringify(params, function(key, val) {
  //     if (val != null && typeof val == "object") {
  //       if (seen.indexOf(val) >= 0) {
  //         return;
  //       }
  //       seen.push(val);
  //     }
  //     return val;
  //   });
  //   window.postMessage(paramsString);
  // });`
  return chart;
}