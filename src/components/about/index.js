import React, {Component} from 'react';
import {ButtonOutline} from 'rebass';
import {browserHistory} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import ReactAudioPlayer from 'react-audio-player';
import classNames from 'classnames';
import a from '../../utils/analytics';
import style from './style.scss';
import isMobile from '../../utils/isMobile';

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
	
	const handleOff = () => {
		off();
	};
	
	const handleRoar = () => {
		on();
		a.track('Clicked Roar');
	};
	return (
		<div className='about-blurb'>
			<p> Hi, I'm David. </p>
			<p> I'm a&nbsp;
			<strong>product&nbsp;designer</strong>&nbsp;&&nbsp;
			<strong>front&nbsp;end&nbsp;engineer</strong>.
			</p>
			<p> I develop innovative, creative solutions by combining a unique visual identity with sustained emotional resonance. </p>
			<p> I define success as a&nbsp;
			<span className="a" onClick={() => handleRoar()}><span>roar</span></span>, audible through the noise of now.
			</p> {active ?
			<ReactAudioPlayer
				autoPlay
				controls={false}
				src={`${assetUrl}/base/roar.mp3`}
				onEnded={() => handleOff()}
				style={{position: 'absolute', visibility: 'hidden'}}
			/> : false}
		</div>
	)
});

const About = ({}, context) => {
	const classes      = classNames("about", style.root, {
		[style.isMobile]: isMobile(),
	});
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
