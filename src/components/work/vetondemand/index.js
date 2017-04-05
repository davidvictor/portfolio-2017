import React, {Component} from 'react';
import Hero from '../../project/hero';
import Deets from '../../project/deets';
import About from '../../project/about';
import classNames from 'classnames';
import style from './style.scss';

import {assetUrl} from 'config';

const VetOnDemand = () => {
	const classes = classNames("vetondemand", style.root);
	return (
		<div className={classes}>
			<Hero
				bg={`${assetUrl}/vetondemand/hero.jpg`}
				logo={`${assetUrl}/vetondemand/logo-mark-white.svg`}>
				<Deets title="Vet On Demand" url='http://vetondemand.com'/>
			</Hero>
			<About description="Vet On Demand is the first mobile application to provide personalized, real time access to veterinary advice and recommendations through the power of live video conferencing." roles="COFOUNDER / DESIGN / UI+UX / FRONTEND"/>
		</div>
	);
};

export default VetOnDemand;
