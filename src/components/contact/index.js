import React, {Component} from 'react';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';

class Contact extends Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		const classes = classNames("contact", style.root);
		return (
			<div className={classes}>
				Contact
			</div>
		);
	}
}

export default Contact;
