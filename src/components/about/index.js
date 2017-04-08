import React, {Component} from 'react';
import {Button, ButtonOutline} from 'rebass';
import {browserHistory} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import a from '../../utils/analytics';
import style from './style.scss';

import {assetUrl} from 'config';

const About = ({}, context) => {
	
	const classes      = classNames("about", style.root);
	const handleClick  = (type) => {
		a.track('Clicked About Link', {
			type: type
		})
	};
	const handleButton = () => {
		context.router.history.push({pathname: '/work/vetondemand'});
		a.track('Clicked See My Work')
	};
	const bgImage      = 'url(' + assetUrl + '/base/dv-headshot.jpg)';
	return (
		<div className={classes}>
			<div className={style.me} style={{backgroundImage: bgImage}}/>
			<div className={style.about}>
				<p> Hi, I'm David. </p>
				<p> I'm a&nbsp;
					<a href="https://medium.com/fullstack-design-by-xpos-it/the-rise-of-the-full-stack-designer-and-the-tools-he-uses-3daf015eb3fc"
					   target="_blank"
					   onClick={() => handleClick('Full Stack Designer')}><span><strong>full&nbsp;stack&nbsp;designer</strong></span></a> &&nbsp;
					<a href="http://f2em.com/" target="_blank" onClick={() => handleClick('Front End Engineer')}><span><strong>front&nbsp;end&nbsp;engineer</strong></span></a>
				</p>
				<p> I develop innovative, creative solutions by combining a unique visual identity with sustained emotional resonance. </p>
				<p> I define success as a roar, audible through the noise of now. </p>
				<MediaQuery minWidth={961}>
					<ButtonOutline
						color={context.rebass.colors.gold}
						//backgroundColor={context.rebass.colors.gold}
						inverted
						big
						py={4}
						px={5}
						mt={6}
						style={{display: 'block'}}
						className={style.button}
						onClick={() => handleButton()}> See my Work </ButtonOutline>
				</MediaQuery>
				<MediaQuery maxWidth={960}>
					<ButtonOutline
						color={context.rebass.colors.gold}
						py={3}
						px={4}
						mt={5}
						style={{display: 'block'}}
						className={style.button}
						onClick={() => handleButton()}> See my Work </ButtonOutline>
				</MediaQuery>
			</div>
			<div className={style.venice}>Made&nbsp;with&nbsp; 🌴&nbsp;&nbsp;in Venice,&nbsp;California</div>
		</div>
	);
};

About.contextTypes = {
	rebass: React.PropTypes.object,
	router: React.PropTypes.object,
};

export default About;
