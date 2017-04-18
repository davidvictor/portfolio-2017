import React, {Component} from 'react';
import {
	Route
} from 'react-router-dom';
import Sidebar from '../sidebar';
import About from '../about';
import Amptube from '../work/amptube';
import VOD from '../work/vetondemand';
import LIB from '../work/lifeisbeautiful';
import ESC from '../work/esc';
import Archive from '../work/archive';
import PageShit from './pageShit';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';
import '../../styles/global.scss';
import isMobile from '../../utils/isMobile';
import ReactGA from 'react-ga';

import {assetUrl} from 'config';

import {scale, colors, fontSizes} from 'config';

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	static childContextTypes = {
		reflexbox: React.PropTypes.object,
		rebass:    React.PropTypes.object,
	};
	
	getChildContext() {
		return {
			reflexbox: {
				breakpoints: {
					sm: '(min-width: 30em)',
					md: '(min-width: 48em)',
					lg: '(min-width: 60em)'
				}
			},
			rebass:    {
				colors:        colors,
				scale:         scale,
				fontSizes:     fontSizes,
				borderRadius:  3,
				Button:        {
					fontSize:      fontSizes[10],
					fontWeight:    '500',
					letterSpacing: '0.02rem',
					textTransform: 'uppercase',
				},
				ButtonOutline: {
					fontSize:      fontSizes[10],
					fontWeight:    '500',
					letterSpacing: '0.02rem',
					textTransform: 'uppercase',
				},
				Close:         {
					fontSize:   '42px',
					fontWeight: '100',
				}
			}
		}
	}
	
	componentWillMount = () => {
		if (window.performance) {
			const timeSincePageLoad = Math.round(performance.now());
			ReactGA.timing({
				category: 'React',
				variable: 'componentWillMount',
				value: timeSincePageLoad,
				label: 'App'
			});
		}
	};
	
	componentDidMount = () => {
		ReactGA.set({ page: window.location.pathname });
		ReactGA.pageview(window.location.pathname);
		if (window.performance) {
			const timeSincePageLoad = Math.round(performance.now());
			ReactGA.timing({
				category: 'React',
				variable: 'componentDidMount',
				value: timeSincePageLoad,
				label: 'App'
			});
		}
		const images  = isMobile() ?
			[`${assetUrl}/hero/at-hero-mobile.jpg`,
				`${assetUrl}/hero/vod-hero-mobile.jpg`,
				`${assetUrl}/hero/lib-hero-mobile.jpg`,
				`${assetUrl}/hero/esc-hero-mobile.jpg`,
				`${assetUrl}/amptube/lockup-horizontal-white.svg`,
				`${assetUrl}/vetondemand/logo-h-white.svg`,
				`${assetUrl}/lifeisbeautiful/logo-heart-white.png`,
				`${assetUrl}/esc/logo-color.svg`] :
			[`${assetUrl}/hero/at-hero.jpg`,
				`${assetUrl}/hero/vod-hero.jpg`,
				`${assetUrl}/hero/lib-hero.jpg`,
				`${assetUrl}/hero/esc-hero.jpg`,
				`${assetUrl}/amptube/lockup-horizontal-white.svg`,
				`${assetUrl}/vetondemand/logo-h-white.svg`,
				`${assetUrl}/lifeisbeautiful/logo-heart-white.png`,
				`${assetUrl}/esc/logo-color.svg`];
		images.forEach((src) => {
			const img = document.createElement('img');
			img.src   = src;
		});
	};
	
	render() {
		const classes    = classNames("🔥", style.root);
		return (
			<div className={classes}>
				<Flex align='flex-start'>
					<Box>
						<Sidebar/>
					</Box>
					<Box flexAuto className={style.content}>
						<Route exact path="/" component={About}/>
						<Route exact path="/about" component={About}/>
						<Route exact path="/work/amptube" component={Amptube}/>
						<Route exact path="/work/vetondemand" component={VOD}/>
						<Route exact path="/work/lifeisbeautiful" component={LIB}/>
						<Route exact path="/work/esc" component={ESC}/>
						<Route exact path="/work/archive" component={Archive}/>
					</Box>
				</Flex>
				<PageShit/>
			</div>
		);
	}
}

export default App;
