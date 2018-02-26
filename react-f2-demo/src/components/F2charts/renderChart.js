import F2 from '@antv/f2';

export default function renderChart(props, el) {
  const height = props.height || 400;
  const width = props.width ? props.width : 'auto';
  const padding = props.padding ? props.padding : [ 30, 30, 30, 30 ];
  // eslint-disable-next-line
  const chart = new F2.Chart({
    el,
    width,
    height,
    padding,
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
