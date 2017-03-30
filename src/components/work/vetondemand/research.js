import React, {Component} from 'react';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';

class Research extends Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		const classes    = classNames("Research", style.section);
		return (
			<div className={classes}>
					vet on demand
			</div>
		);
	}
}

export default Research;
