import React, {Component} from 'react';
import {Button, ButtonOutline} from 'rebass';
import {browserHistory} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import MobileDetect from 'mobile-detect';
import Sound from 'react-sound';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import a from '../../utils/analytics';
import style from './style.scss';

import {assetUrl} from 'config';

import {compose, withState, withHandlers} from 'recompose';

const withActive = compose(
	withState('active', 'setActive', false),
	withHandlers({
		on:     props => () => props.setActive(true),
		off:    props => () => props.setActive(false),
		toggle: props => () => props.setActive(a => !a),
	})
);

const Blurb = withActive(({active, on, off, toggle}) => {
	const handleRoar  = () => {
		on();
		a.track('Clicked Roar');
	};
	const isMobile = () => {
		const md = new MobileDetect(window.navigator.userAgent);
		return md.mobile();
	};
	return (
		<div>
			<p> Hi, I'm David. </p>
			<p> I'm a&nbsp;
			<strong>product&nbsp;designer</strong>&nbsp;&&nbsp;
			<strong>front&nbsp;end&nbsp;engineer</strong>.
			</p>
			<p> I develop innovative, creative solutions by combining a unique visual identity with sustained emotional resonance. </p>
			<p> I define success as a&nbsp;
			{isMobile() ? 'roar' : <a onClick={() => handleRoar()}><span>roar</span></a>}, audible through the noise of now.
			</p> {active ?
			<Sound
				url={`${assetUrl}/base/roar.wav`}
				playStatus={Sound.status.PLAYING}
				onFinishedPlaying={() => off()}/> : false}
		</div>
	)
});

const About = ({}, context) => {
	const classes      = classNames("about", style.root);
	const handleButton = () => {
		context.router.history.push({pathname: '/work/vetondemand'});
		a.track('Clicked See My Work')
	};
	const bgImage      = 'url(' + assetUrl + '/base/dv-headshot.jpg)';
	return (
		<div className={classes}>
			<div className={style.me} style={{backgroundImage: bgImage}}/>
			<div className={style.about}>
				<Blurb/>
				<MediaQuery minWidth={961}>
					<ButtonOutline
						color={context.rebass.colors.gold}
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

//
//<p> I'm a&nbsp;
//<strong>Product Designer</strong>
//</p>
