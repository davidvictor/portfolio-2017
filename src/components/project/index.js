import React, {Component} from 'react';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		const {children} = this.props;
		const classes    = classNames("app", style.root);
		return (
			<div className={classes}>
				<Flex p={2} align='center'>
					<Box px={2} flexAuto>
					
					</Box>
				</Flex>
			</div>
		);
	}
}

export default App;
