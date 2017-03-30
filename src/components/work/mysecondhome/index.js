import React, {Component} from 'react';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';

class MSH extends Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		const classes    = classNames("mysecondhome", style.root);
		return (
			<div className={classes}>
					my second home
			</div>
		);
	}
}

export default MSH;
