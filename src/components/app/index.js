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
import MSH from '../work/mysecondhome';
import Archive from '../work/archive';

import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			//authenticated: auth.loggedIn();
		};
	}
	
	render() {
		const {children} = this.props;
		const classes    = classNames("app", style.root);
		return (
			<div className={classes}>
				<Flex align='flex-start'>
					<Box px={3}>
						<Sidebar/>
					</Box>
					<Box flexAuto className={style.content}>
						<Route exact path="/" component={Home}/>
						<Route exact path="/work/amptube" component={Amptube}/>
						<Route exact path="/work/vetondemand" component={VOD}/>
						<Route exact path="/work/lifeisbeautiful" component={LIB}/>
						<Route exact path="/work/esc" component={ESC}/>
						<Route exact path="/work/mysecondhome" component={MSH}/>
						<Route exact path="/work/archive" component={Archive}/>
					</Box>
				</Flex>
			</div>
		);
	}
}

export default App;
