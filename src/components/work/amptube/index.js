import React, {Component} from 'react';
import Hero from '../../project/hero';
import Deets from '../../project/deets';
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
				<Hero
					bg="/images/amptube/at-bg.png"
					logo="/images/amptube/mark.svg">
					<Deets title="Amptube"/>
				</Hero>
			</div>
		);
	}
}

export default Amptube;
