import React, {Component} from 'react';
import Hero from '../../project/hero';
import Deets from '../../project/deets';
import About from '../../project/about';
import classNames from 'classnames';
import style from './style.scss';

import {assetUrl} from 'config';

const Amptube = () => {
	const classes = classNames("amptube", style.root);
	return (
		<div className={classes}>
			<Hero
				bg={`${assetUrl}/amptube/hero.png`}
				logo={`${assetUrl}/amptube/mark.svg`}>
				<Deets title="Amptube" url="//amptu.be"/>
			</Hero>
			
			<About description="Amptube is a discovery tool that allows up and coming creators the opportunity to earn featured placement on an established creator’s page by sharing videos with their social networks." roles="COFOUNDER / DESIGN / UI+UX / FRONTEND"/>
		
		</div>
	);
};

export default Amptube;
