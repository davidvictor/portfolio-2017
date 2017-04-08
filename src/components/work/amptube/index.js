import React, {Component} from 'react';
import Project from '../../project';
import classNames from 'classnames';
import style from './style.scss';

import {assetUrl} from 'config';

const Amptube = () => {
	const classes = classNames("amptube", style.root);
	return (
		<div className={classes}>
			<Project
				live
				title="Amptube"
				url="https://amptu.be"
				roles={['strategy','branding','ui','ux','code']}
				description="Amptube is a discovery tool that allows up and coming creators the opportunity to earn featured placement on an established creator’s page by sharing videos with their social networks."
				contribution="Building Amptube made me the engineer I am today. It was during this effort that my skills behind the keyboard became equal to those behind the mouse. As a cofounder, I was instrumental in everything from business strategy to product development to the fundraising effort. The path from a designer to and engineer is long and fought with seemingly insurmountable obstacles. Overcoming them seems impossible until it isn't. This experience has made me not only a better designer, but a better person. Combining design thinking with an engineers skepticism is as solid of a problem solving paradigm as I've ever seen. Blast off."
				bg={{src:`${assetUrl}/hero/at-hero.jpg`,mobile:`${assetUrl}/hero/at-hero-mobile.jpg`}}
				logo={{src: `${assetUrl}/amptube/lockup-horizontal-white.svg`, width: '260px'}}>
			
			</Project>
		</div>
	);
};

export default Amptube;
