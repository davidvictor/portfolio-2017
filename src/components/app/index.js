import React, {Component} from 'react';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';

class App extends Component {
	render() {
		const classes = classNames("app", style.root);
		return (
			<div className={classes}>
				<Flex p={2} align='center'>
					<Box px={2}>Box A</Box>
					<Box px={2} flexAuto>
						<div style={{textAlign:'center'}}>Sup</div>
					</Box>
				</Flex>
			</div>
		);
	}
}

export default App;
