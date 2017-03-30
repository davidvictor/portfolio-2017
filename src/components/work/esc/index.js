import React, {Component} from 'react';
import Hero from '../../project/hero';
import Deets from '../../project/deets';
import classNames from 'classnames';
import style from './style.scss';

class ESC extends Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		const classes    = classNames("esc", style.root);
		return (
			<div className={classes}>
				<Hero
					bg="/images/archive/lib-11-sm.jpg"
					logo="">
					<Deets title="ESC Lab Sciences"/>
				</Hero>
			</div>
		);
	}
}

export default ESC;
