import React, {Component} from 'react';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';

class Archive extends Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		const classes    = classNames("archive", style.root);
		return (
			<div className={classes}>
					archive
			</div>
		);
	}
}

export default Archive;
