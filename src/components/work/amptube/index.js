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
				description="Amptube is a discovery tool that allows up and coming creators the opportunity to earn featured placement on an established creator’s page by sharing videos with their social networks."
				contribution="Food truck pour-over microdosing, four dollar toast messenger bag pug flexitarian flannel church-key etsy. Mustache tattooed art party small batch narwhal, live-edge green juice pickled pug offal meh ugh. Mlkshk VHS skateboard, chambray meh PBR&B fixie lyft coloring book typewriter gastropub neutra hell of live-edge taxidermy."
				bg={`${assetUrl}/amptube/hero.png`}
				logo={{src: `${assetUrl}/amptube/mark.svg`, width: false}}>
			
			</Project>
		</div>
	);
};

export default Amptube;
