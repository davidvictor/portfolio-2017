import React, {Component} from 'react';
import ReactModal from 'react-modal';
import Graphemescope from '../../utils/graphemescope';
import {Close, Button, ButtonOutline, ButtonCircle} from 'rebass';
import {Flex, Box} from 'reflexbox';
import a from '../../utils/analytics';
import classNames from 'classnames';
import style from './style.scss';
import EventListener, {withOptions} from 'react-event-listener';
import MobileDetect from 'mobile-detect';
//import ReactAccelerometer from 'react-accelerometer'
//import { Motion, spring } from 'react-motion'

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

class KHole extends React.Component {
	constructor(props) {
		super(props);
		this.state     = {
			cX:        window.innerWidth,
			cY:        window.innerHeight,
			mX:        0,
			mY:        0,
			index:     0,
			x:         null,
			y:         null,
			z:         null,
			rotation:  null,
			landscape: false
		};
		this.images    = [
			`${assetUrl}/archive/cherub.jpg`,
			`${assetUrl}/archive/classic-2.jpg`,
			`${assetUrl}/archive/swag-city2.jpg`,
			//`${assetUrl}/archive/fishdicks.jpg`,
		];
		this.container = null;
		this.interval  = null;
		this.container = null;
		this.scope     = null;
	}
	
	isMobile = () => {
		const md = new MobileDetect(window.navigator.userAgent);
		return md.mobile();
	};
	
	getK = () => {return document.querySelector('.k');};
	
	setContainer = () => {
		this.container = this.getK();
	};
	
	setScope = () => {
		this.scope = new Graphemescope(this.container);
		
		this.scope.radiusFactor = 1.0;
		
		this.scope.zoomFactor  = 2.0;
		this.scope.angleFactor = 1.0;
		
		this.scope.ease = 0.05;
		
		this.scope.alphaFactor = 1.0;
		this.scope.alphaTarget = 1.0;
	};
	
	changePicture = () => {
		this.scope.setImage(this.images[this.state.index]);
		this.setState({
			index: (
			       this.state.index + 1) % this.images.length,
		})
	};
	
	getWindowWidth = () => {
		return window.innerWidth;
	};
	
	getWindowHeight = () => {
		return window.innerHeight;
	};
	
	handleMouseMove = (event) => {
		if (!this.state.isMobile) {
			this.setState({
				mX: event.clientX / this.getWindowWidth(),
				mY: event.clientY / this.getWindowHeight()
			}, this.doMouseShit())
		}
	};
	
	doMouseShit = () => {
		this.scope.angleTarget = this.state.mX;
		this.scope.zoomTarget  = 0.75 + 0.75 * this.state.mY;
	};
	
	doMotionShit = () => {
		this.scope.angleTarget = this.state.x;
		this.scope.zoomTarget  = 0.75 + 0.75 * this.state.y;
	};
	
	handleResize = (windowSize) => {
		this.setState({
			cX: windowSize.windowWidth,
			cY: windowSize.windowHeight
		})
	};
	
	handleOrientation = (event) => {
		const {orientation} = window;
		this.setState({landscape: orientation === 90 || orientation === -90})
	};
	
	handleAcceleration = (event) => {
		const {landscape}              = this.state;
		const {useGravity, multiplier} = this.props;
		const acceleration             = useGravity ? event.accelerationIncludingGravity : event.acceleration;
		const rotation                 = event.rotationRate || null;
		const {x, y, z}                = acceleration;
		
		this.setState({
			rotation,
			x: (
				   landscape ? y : x) * multiplier,
			y: (
				   landscape ? x : y) * multiplier,
			z: z * multiplier
		}, this.doMotionShit())
	};
	
	componentWillMount = () => {
		this.setState({
			isMobile: this.isMobile()
		})
	};
	
	componentDidMount = () => {
		this.handleOrientation();
		
		if (this.state.isMobile) {
			window.addEventListener('devicemotion', this.handleAcceleration);
			//window.addEventListener('orientationchange', this.handleOrientation);
		}
		
		this.setContainer();
		this.setScope();
		
		this.interval = setInterval(this.changePicture, 2000);
		this.changePicture();
	};
	
	componentWillUnmount = () => {
		console.log('Unmounted');
		this.scope.enabled = false;
		window.removeEventListener('devicemotion', this.handleAcceleration);
		//window.removeEventListener('orientationchange', this.handleOrientation);
		
		clearInterval(this.interval)
	};
	
	render() {
		const kStyle = {
			height: this.state.cY,
			width:  this.state.cX,
		};
		return (
			<div>
				<div className="k" style={kStyle}/>
				<EventListener
					target="window"
					onResize={this.handleResize}
					onMouseMove={this.handleMouseMove}
				/>
			</div>
		)
	}
}

KHole.defaultProps = {
	multiplier: 0.3,
	useGravity: true
};

const Kaleidoscope = withActive(({active, on, off, toggle}) => {
	const classes        = classNames("kaleidoscope", style.root);
	const modalClasses   = classNames("kaleidoscope-modal", style.modal);
	const getParent      = () => {return document.querySelector('#root');};
	const onRequestClose = () => {
		off();
		a.track("Kaleidoscope Close");
	};
	const afterOpen      = () => {
		a.track("Kaleidoscope Open");
	};
	
	return (
		<div className={classes}>
			<Button onClick={toggle} backgroundColor='transparent'>
				<img src={`${assetUrl}/geo/geo-29.svg`} className={style.geo}/>
			</Button>
			<ReactModal
				id="kaleidoscope-modal"
				isOpen={active}
				onRequestClose={() => onRequestClose()}
				className={modalClasses}
				overlayClassName={style.modalOverlay}
				contentLabel="Kaleidoscope"
				parentSelector={getParent}
				shouldCloseOnOverlayClick={true}
				onAfterOpen={afterOpen}>
				<div onClick={()=>onRequestClose()}>
					<KHole/>
				</div>
			</ReactModal>
		</div>
	);
});

export default Kaleidoscope;
