import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'dva/router';
import dynamic from 'dva/dynamic';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import AnimatedSwitch from './components/common/animated-switch/AnimatedSwitch';
import Page404 from './routes/Page404/Page404';
import FsDefaultLoadingComponent from './components/common/fs-default-loading-component/FsDefaultLoadingComponent';

dynamic.setDefaultLoadingComponent(() => {
  // 设置默认loading页面
  return <FsDefaultLoadingComponent />;
});

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/',
      component: dynamic({
        app,
        component: () =>
          import(/* webpackChunkName: "Index" */ './routes/')
      })
    },
    {
      path: '/PointBasic' /* 基础点图 */,
      component: dynamic({
        app,
        // models: () => [
        //   import(/* webpackChunkName: "Models01" */ './'),
        // ],
        component: () =>
          import(/* webpackChunkName: "PointBasic" */ './routes/point/PointBasic.js')
      })
    },
    {
      path: '/PointBubble',
      component: dynamic({
        app,
        component: () =>
          import(/* webpackChunkName: "PointBubble" */ './routes/point/PointBubble.js')
      })
    },
    {
      path: '/PointColor',
      component: dynamic({
        app,
        component: () =>
          import(/* webpackChunkName: "PointColor" */ './routes/point/PointColor.js')
      })
    },
    {
      path: '/LineBasic',
      component: dynamic({
        app,
        component: () =>
          import(/* webpackChunkName: "LineBasic" */ './routes/line/LineBasic.js')
      })
    },
    {
      path: '/LineSmooth',
      component: dynamic({
        app,
        component: () =>
          import(/* webpackChunkName: "LineSmooth" */ './routes/line/LineSmooth.js')
      })
    },
    {
      path: '/LineDynamic',
      component: dynamic({
        app,
        component: () =>
          import(/* webpackChunkName: "LineDynamic" */ './routes/line/LineDynamic.js')
      })
    },
    {
      path: '/LineAnimation',
      component: dynamic({
        app,
        component: () =>
          import(/* webpackChunkName: "LineAnimation" */ './routes/line/LineAnimation.js')
      })
    },
    {
      path: '/AreaBasic',
      component: dynamic({
        app,
        component: () =>
          import(/* webpackChunkName: "AreaBasic" */ './routes/area/AreaBasic.js')
      })
    },
    {
      path: '/AreaNeg',
      component: dynamic({
        app,
        component: () =>
          import(/* webpackChunkName: "AreaNeg" */ './routes/area/AreaNeg.js')
      })
    },
    {
      path: '/AreaShade',
      component: dynamic({
        app,
        component: () =>
          import(/* webpackChunkName: "AreaShade" */ './routes/area/AreaShade.js')
      })
    },
    {
      path: '/AreaStack',
      component: dynamic({
        app,
        component: () =>
          import(/* webpackChunkName: "AreaStack" */ './routes/area/AreaStack.js')
      })
    },
    {
      path: '/AreaStackLine',
      component: dynamic({
        app,
        component: () =>
          import(/* webpackChunkName: "AreaStackLine" */ './routes/area/AreaStackLine.js')
      })
    },
    {
      path: '/BarBasic',
      component: dynamic({
        app,
        component: () =>
          import(/* webpackChunkName: "BarBasic" */ './routes/bar/BarBasic.js')
      })
    },
    {
      path: '/BarJadeLack',
      component: dynamic({
        app,
        component: () =>
          import(/* webpackChunkName: "BarJadeLack" */ './routes/bar/BarJadeLack.js')
      })
    },
    {
      path: '/BarType',
      component: dynamic({
        app,
        component: () =>
          import(/* webpackChunkName: "BarType" */ './routes/bar/BarType.js')
      })
    },
    {
      path: '/BarAnimation',
      component: dynamic({
        app,
        component: () =>
          import(/* webpackChunkName: "BarAnimation" */ './routes/bar/BarAnimation.js')
      })
    },
    {
      path: '/PieBasic',
      component: dynamic({
        app,
        component: () =>
          import(/* webpackChunkName: "PieBasic" */ './routes/pie/PieBasic.js')
      })
    },
    {
      path: '/PieAnnular',
      component: dynamic({
        app,
        component: () =>
          import(/* webpackChunkName: "PieAnnular" */ './routes/pie/PieAnnular.js')
      })
    },
    {
      path: '/PiePolar',
      component: dynamic({
        app,
        component: () =>
          import(/* webpackChunkName: "PiePolar" */ './routes/pie/PiePolar.js')
      })
    },
    {
      path: '/RadarBasic',
      component: dynamic({
        app,
        component: () =>
          import(/* webpackChunkName: "RadarBasic" */ './routes/radar/RadarBasic.js')
      })
    },
    {
      path: '/RadarZone',
      component: dynamic({
        app,
        component: () =>
          import(/* webpackChunkName: "RadarZone" */ './routes/radar/RadarZone.js')
      })
    },
    {
      path: '/DashBoard',
      component: dynamic({
        app,
        component: () =>
          import(/* webpackChunkName: "DashBoard" */ './routes/other/DashBoard.js')
      })
    },
    {
      path: '/DoubleY',
      component: dynamic({
        app,
        component: () =>
          import(/* webpackChunkName: "DoubleY" */ './routes/other/DoubleY.js')
      })
    },
  ];
  return (
    <Router history={history}>
      <Route
        render={({ location }) => (
          <TransitionGroup component="main">
            <AnimatedSwitch key={location.key} location={location}>
              {routes.map(({ path, component }, key) => (
                <Route exact path={path} component={component} key={key} />
              ))}
              <Route component={Page404} />
            </AnimatedSwitch>
          </TransitionGroup>
        )}
      />
    </Router>
  );
}
RouterConfig.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object
};
export default RouterConfig;

