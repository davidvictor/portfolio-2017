import React, {Component} from 'react';
import Hero from '../../project/hero';
import Deets from '../../project/deets';
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
				<Hero
					bg="/images/archive/lib-11-sm.jpg"
					logo="">
					<Deets title="Life is Beautiful"/>
				</Hero>
			</div>
		);
	}
}

export default  LifeisBeautiful;
