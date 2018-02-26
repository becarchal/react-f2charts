import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {  routerRedux } from 'dva/router';
import { connect } from 'dva';
import { size } from './../utils/util';
import styles from './style.less';

const routes = [
	'/',
	'/PointBasic',
	// '/PointBubble',
	// '/PointColor',
	'/LineBasic',
	'/LineSmooth',
	'/LineDynamic',
	'/LineAnimation',
	'/AreaBasic',
	'/AreaNeg',
	'/AreaShade',
	'/AreaStack',
	// '/AreaStackLine',
	'/BarBasic',
	'/BarJadeLack',
	'/BarType',
	'/BarAnimation',
	'/PieBasic',
	'/PieAnnular',
	// '/PiePolar',
	'/RadarBasic',
	'/RadarZone',
	// '/DashBoard',
	'/DoubleY',
]
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option : '',
      data: [],
    };
  }
  componentWillMount() {
  }
  componentDidMount() {
	}
	goPage = (page) => {
		this.props.dispatch(routerRedux.push({ pathname: page }));
		this.props.dispatch({ type: 'index/setState', title: page.replace('/', '')})
	}
  renderF2 = () => {
		return routes.map((item, index) => (
			<div className={styles.routes_item} key={index} onClick={() => this.goPage(item)}>{item.replace('/', '')}</div>
		));
  }
  render() {
    return (
			<div>
				<Helmet>
						<meta charSet="utf-8" />
						<title>{this.props.title}</title>
				</Helmet>
				<div className={styles.react_f2}>react-f2</div>
				<div className={styles.index} style={{ height: size.height - 100, width: size.width }}>
					{this.renderF2()}
				</div>
			</div>
    );
  }
}
export default connect(state => state.index)(Index);

