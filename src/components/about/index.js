import React, {Component} from 'react';
import {ButtonOutline} from 'rebass';
import {browserHistory} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import ReactAudioPlayer from 'react-audio-player';
import classNames from 'classnames';
import style from './style.scss';
import ReactGA from 'react-ga';
import isMobile from '../../utils/isMobile';
import {assetUrl} from 'config';

class Blurb extends Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		const handleRoar = () => {
			this.rap.audioEl.play();
			ReactGA.event({
				category: 'Engagement',
				action:   'Clicked Roar',
			});
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
				</p>
				<ReactAudioPlayer
					ref={c => this.rap = c }
					preload="auto"
					controls={false}
					src={`${assetUrl}/base/roar.mp3`}
					style={{position: 'absolute', visibility: 'hidden', height: '0', width: '0'}}
				/>
			</div>
		)
	}
}

const About = ({}, context) => {
	const classes      = classNames("about", style.root, {
		[style.isMobile]: isMobile(),
	});
	const handleButton = () => {
		context.router.history.push({pathname: '/work/vetondemand'});
		ReactGA.event({
			category: 'Navigation',
			action:   'Clicked See My Work',
		});
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
