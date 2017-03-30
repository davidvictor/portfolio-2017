import React, {Component} from 'react';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';

class LifeisBeautiful extends Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		const classes    = classNames("lifeisbeautiful", style.root);
		return (
			<div className={classes}>
				life is beautiful
			</div>
		);
	}
}

export default  LifeisBeautiful;
