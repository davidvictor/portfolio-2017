import React, {Component} from 'react';
import classNames from 'classnames';
import style from './style.scss';
import MobileDetect from 'mobile-detect';
import a from '../../utils/analytics';

import {assetUrl} from 'config';

class Pyramid extends Component {
	constructor(props) {
		super(props);
		this.state         = {
			initialized: false,
			playing:     false,
		};
		this.createPolygon = this.createPolygon.bind(this);
		this.animate       = this.animate.bind(this);
		this.interval      = null;
	}
	
	createPolygon(obj, sides, startDeg) {
		/** the degree of the start position */
		startDeg = (
			typeof startDeg === undefined ? 0 : startDeg);
		
		/** generate group to embed other group */
		let group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
		
		/** the polygon you want to create */
		let polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
		
		/** an array for storing points of this regular polygon */
		let pos = [];
		
		/** the radius of the given circle */
		const radius = this.refs['pyramid'].clientWidth / 2;
		
		for (let i = 0; i < sides; i++) {
			const deg = 360 / sides * i + startDeg;
			const x   = radius * (
				1 - Math.sin(deg * Math.PI / 180));
			const y   = radius * (
				1 - Math.cos(deg * Math.PI / 180));
			
			pos.push(x + ',' + y);
		}
		
		polygon.setAttribute('points', pos.join(' '));
		group.appendChild(polygon);
		obj.appendChild(group);
		
		/** set up the origin position of your transformation */
		group.style.transformOrigin = radius + 'px ' + radius + 'px';
		
		/** return the group so that we can create multinested elements recursively */
		return group;
	}
	
	animate() {
		const sides = this.props.sides;
		let parent  = this.refs['pyramid'];
		
		const stepT = this.props.stepT;
		const dur   = this.props.dur;
		const num   = this.props.num;
		
		let theta = 0;
		let dir   = 1;
		
		if (!this.state.initialized) {
			for (let i = 0; i < num; i++) {
				parent = this.createPolygon(parent, sides, this.props.startDeg);
				parent.setAttribute('class', 'polygon' + (
					i + 1));
				//parent.setAttribute('stroke-width', (
				//(i + 1) * .75) + 'px');
			}
			this.setState({
				initialized: true,
			})
		}
		
		this.interval = setInterval(function () {
			theta += stepT * dir;
			
			const innerCornerDeg = Math.round(360 / sides);
			
			if (Math.abs(theta) > innerCornerDeg) {
				//dir *= -1; //alternate direction
				theta = (
					Math.abs(theta) - innerCornerDeg) * dir;
			}
			
			const thetaValue = Math.abs(theta) * Math.PI / 180;
			const scaleRatio = Math.sin((
					180 - innerCornerDeg) * Math.PI / 180) / (
				Math.sin(thetaValue) + Math.sin(innerCornerDeg * Math.PI / 180 - thetaValue));
			
			for (let i = 1; i < num; i++) {
				let el = document.querySelector('.polygon' + (
					i + 1));
				el.style.transform = 'scale(' + scaleRatio + ') rotate(' + theta + 'deg)';
				el.style.strokeWidth = (i * .5) / scaleRatio + 'px';
			}
		}, dur);
		
		a.track("Pyramid Hovered");
		
	}
	
	isMobile = () => {
		const md = new MobileDetect(window.navigator.userAgent);
		return md.mobile();
	};
	
	componentWillMount = () => {
		this.setState({
			isMobile: this.isMobile()
		})
	};
	
	startAnimation = (e) => {
		if (!this.state.playing) {
			this.setState({
				playing: true,
			}, this.animate());
		}
	};
	
	stopAnimation = (e) => {
		if (this.state.playing) {
			this.setState({
				playing: false,
			}, clearInterval(this.interval));
		}
	};
	
	handleMouseOver = () => {
		if (!this.state.initialized) {
			this.props.preloadImages.forEach((src) => {
				const img = document.createElement('img');
				img.src   = src;
			});
		}
		this.startAnimation();
	};
	
	handleMouseLeave = () => {
		this.stopAnimation();
	};
	
	render() {
		const classes        = classNames(style.container, {
			[style.playing]: this.state.playing,
		});
		const pyramidClasses = classNames("pyramid", style.pyramid);
		const geoClasses     = classNames("geo", style.geo);
		return this.state.isMobile ? (
				<div className={classes}>
					<svg className={pyramidClasses} ref="pyramid"/>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 56" className={geoClasses} ref="geo">
						<g fill="#333" fillRule="evenodd">
							<path d="M1.782 54.803h61.872L32.72 1.183 1.78 54.803zm62.942.62H.712L32.72-.057l32.004 55.48z"/>
							<path d="M17.85 28.466l14.87 25.768 14.866-25.768H17.85zm14.87 27.006L16.78 27.848h31.877l-15.94 27.624z"/>
							<path d="M33.026 54.853h-.618V.563h.618v54.29z"/>
							<path d="M1.448 55.347l-.403-.472 31.47-26.955.403.472-31.47 26.955z"/>
							<path d="M63.987 55.347l-31.47-26.955.4-.472 31.47 26.955-.4.472z"/>
						</g>
					</svg>
				</div>
			) :
			<div className={classes} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
				<svg className={pyramidClasses} ref="pyramid"/>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 56" className={geoClasses} ref="geo">
					<g fill="#333" fillRule="evenodd">
						<path d="M1.782 54.803h61.872L32.72 1.183 1.78 54.803zm62.942.62H.712L32.72-.057l32.004 55.48z"/>
						<path d="M17.85 28.466l14.87 25.768 14.866-25.768H17.85zm14.87 27.006L16.78 27.848h31.877l-15.94 27.624z"/>
						<path d="M33.026 54.853h-.618V.563h.618v54.29z"/>
						<path d="M1.448 55.347l-.403-.472 31.47-26.955.403.472-31.47 26.955z"/>
						<path d="M63.987 55.347l-31.47-26.955.4-.472 31.47 26.955-.4.472z"/>
					</g>
				</svg>
			</div>;
	}
}

Pyramid.defaultProps = {
	stepT:    1,
	dur:      16,
	num:      4,
	sides:    3,
	startDeg: 0,
	playing:  false,
};

Pyramid.propTypes = {
	stepT:    React.PropTypes.number,
	dur:      React.PropTypes.number,
	num:      React.PropTypes.number,
	sides:    React.PropTypes.number,
	startDeg: React.PropTypes.number,
	//preloadImages: React.PropTypes.array.required,
};
export default Pyramid;
