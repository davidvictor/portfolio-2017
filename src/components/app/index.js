import React, {Component} from 'react';
import {
	Route
} from 'react-router-dom';
import Sidebar from '../sidebar';
import Home from '../home';
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
				colors:    colors,
				scale:     scale,
				fontSizes: fontSizes,
				ButtonOutline:    {
					fontSize:      fontSizes[7],
					letterSpacing: '0.02rem',
				}
			}
		}
	}
	
	render() {
		const {children} = this.props;
		const classes    = classNames("app", style.root);
		return (
			<div className={classes}>
				<Flex align='flex-start'>
					<Box>
						<Sidebar/>
					</Box>
					<Box flexAuto className={style.content}>
						<Route exact path="/" component={Home}/>
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
