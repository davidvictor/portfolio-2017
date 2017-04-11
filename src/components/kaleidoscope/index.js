import React, {Component} from 'react';
import ReactModal from 'react-modal';
import Graphemescope from '../../utils/graphemescope';
import {Close, Button, ButtonOutline, ButtonCircle} from 'rebass';
import {Flex, Box} from 'reflexbox';
import a from '../../utils/analytics';
import log from '../../utils/log';
import classNames from 'classnames';
import style from './style.scss';
import EventListener, {withOptions} from 'react-event-listener';
import MobileDetect from 'mobile-detect';
import {Motion, spring} from 'react-motion';
//import ReactAccelerometer from 'react-accelerometer'
//import { Motion, spring } from 'react-motion'
//import Khole from "./kscope";
import Pyramid from '../pyramid';
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
		this.state = {
			cX:         window.innerWidth,
			cY:         window.innerHeight,
			mX:         0.04,
			mY:         0.9,
			index:      0,
			reachedEnd: false,
			x:          null,
			y:          null,
			z:          null,
			rotation:   null,
			landscape:  false,
			sX:         1,
			sY:         1,
			
		};
		
		this.container = null;
		this.interval  = null;
		this.container = null;
		this.scope     = null;
	}
	
	handleOff = () => {
		this.props.off();
	};
	
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
		
		this.scope.radiusFactor = 1;
		
		this.scope.zoomFactor  = 2.0;
		this.scope.angleFactor = 1.0;
		
		this.scope.ease        = 0.15;
		this.scope.easeEnabled = this.state.isMobile;
		
		this.scope.alphaFactor = 1.0;
		this.scope.alphaTarget = 1.0;
	};
	
	changePicture = () => {
		this.scope.setImage(this.props.images[this.state.index]);
		this.setState({
			index:      (
			            this.state.index + 1) % this.props.images.length,
			reachedEnd: (
			            this.state.index + 1) > (
			this.props.images.length - 1),
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
				mY: event.clientY / this.getWindowHeight(),
			}, this.doMouseShit())
		}
	};
	
	handleScroll = (e) => {
		//log('scroll',e);
		//log('scroll', e);
		if (!this.state.isMobile) {
			this.setState({
				sY: 1 - (
				e.srcElement.scrollTop / (
				e.srcElement.scrollHeight / 2)),
				sX: 1 - (
				e.srcElement.scrollLeft / (
				e.srcElement.scrollWidth / 2))
			}, this.doScrollShit());
		}
	};
	
	doScrollShit = () => {
		this.scope.radiusFactor = this.state.sY.toFixed(2);
		this.scope.resizeHandler();
	};
	
	doMouseShit = () => {
		this.scope.angleTarget = this.state.mX;
		this.scope.zoomTarget  = .5 + 0.75 * this.state.mY;
	};
	
	doMotionShit = () => {
		this.scope.angleTarget = 0.5 * this.state.x;
		this.scope.zoomTarget  = 1 + 0.35 * this.state.y;
	};
	
	handleResize = () => {
		const size = {x: window.innerWidth, y: window.innerHeight};
		log('Resize', size);
		this.setState({
			cX: this.getWindowWidth(),
			cY: this.getWindowHeight()
		});
		this.scope.resizeHandler();
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
	
	handleClick = () => {
		if (this.state.reachedEnd) {
			this.handleOff();
		} else {
			this.changePicture();
			a.track("Kaleidoscope Clicked", {
				index: this.state.index,
			});
		}
	};
	
	componentWillMount = () => {
		this.setState({
			isMobile: this.isMobile()
		});
	};
	
	componentDidMount = () => {
		//this.handleOrientation();
		
		if (this.state.isMobile) {
			window.addEventListener('devicemotion', this.handleAcceleration);
			//window.addEventListener('orientationchange', this.handleOrientation);
		}
		
		this.setContainer();
		this.setScope();
		log(this.state.index);
		//this.interval = setInterval(this.changePicture, 3000);
		this.changePicture();
		//this.scope.resizeHandler();
	};
	
	componentWillUnmount = () => {
		//window.removeEventListener('scroll', this.handleScroll);
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
		const Debug  = () => {
			return this.props.debug ? (
					<div className={style.debug}>
						<Flex flexColumn>
							<Box>
								<span>i: </span>{this.state.index}
							</Box>
							<Box>
								<span>images: </span>{this.props.images.length}
							</Box>
							<Box>
								<span>reachedEnd: </span>{this.state.reachedEnd ? 'true' : 'false'}
							</Box>
						</Flex>
						<Flex flexColumn>
							<Box>
								<span>X: </span>{!this.state.isMobile ? this.state.mX : this.state.x}
							</Box>
							<Box>
								<span>Y: </span>{!this.state.isMobile ? this.state.mY : this.state.y}
							</Box>
						</Flex>
						<Flex flexColumn>
							<Box>
								<span>sY: </span>{this.state.sY}
							</Box>
							<Box>
								<span>sX: </span>{this.state.sX}
							</Box>
						</Flex>
					</div>
				) : false
		};
		
		const classes = classNames("k", style.k);
		
		return (
			<div>
				<div className={classes} style={kStyle}/>
				
				<Debug />
				<EventListener
					target="window"
					onResize={this.handleResize}
					onScroll={withOptions(this.handleScroll, {passive: true, capture: true})}
				/>
				<EventListener
					target="document"
					onMouseMove={this.handleMouseMove}
					onClick={() => this.handleClick()}
				/>
			</div>
		)
	}
}

KHole.defaultProps = {
	multiplier: 0.2,
	useGravity: true,
	images:     [`${assetUrl}/archive/cherub6.jpg`]
};

const Kaleidoscope = withActive(({active, on, off, toggle}) => {
	const images         = [
		`${assetUrl}/archive/cherub6.jpg`,
		`${assetUrl}/archive/huntridge1.jpg`,
		`${assetUrl}/archive/mimosa.jpg`,
		`${assetUrl}/archive/classic-2.jpg`,
		`${assetUrl}/archive/medicine-man2.jpg`,
	];
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
	const Scroller       = () => {
		return (
			<div className={style.scroll}>
				<div className={style.inner}/>
			</div>
		)
	};
	return (
		<div className={classes}>
			<Button onClick={toggle} backgroundColor='transparent'>
				<Pyramid preloadImages={images}/>
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
				<div>
					<KHole debug={process.env.NODE_ENV !== 'production'} images={images} off={onRequestClose}/>
					<Scroller/>
				</div>
			</ReactModal>
		</div>
	);
});

export default Kaleidoscope;
