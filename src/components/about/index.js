import React, {Component} from 'react';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';

class About extends Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		const classes = classNames("about", style.root);
		return (
			<div className={classes}>
				About
			</div>
		);
	}
}

export default About;
