import React, {Component} from 'react';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';

class Amptube extends Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		const classes    = classNames("amptube", style.root);
		return (
			<div className={classes}>
					amptube
			</div>
		);
	}
}

export default Amptube;
