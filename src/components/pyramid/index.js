import React, {Component} from 'react';
import classNames from 'classnames';
import style from './style.scss';
//import EventListener, {withOptions} from 'react-event-listener';

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
			}
			this.setState({
				initialized: true,
			})
		}
		
		this.interval = setInterval(function () {
			theta += stepT * dir;
			
			const innerCornerDeg = Math.round(360 / sides);
			
			if (Math.abs(theta) > innerCornerDeg) {
				//dir *= -1;
				theta = (
					Math.abs(theta) - innerCornerDeg) * dir;
			}
			
			const thetaValue = Math.abs(theta) * Math.PI / 180;
			const scaleRatio = Math.sin((
					180 - innerCornerDeg) * Math.PI / 180) / (
				Math.sin(thetaValue) + Math.sin(innerCornerDeg * Math.PI / 180 - thetaValue));
			
			for (let i = 1; i < num; i++) {
				document.querySelector('.polygon' + (
					i + 1)).style.transform = 'scale(' + scaleRatio + ') rotate(' + theta + 'deg)';
			}
		}, dur);
	}
	
	startAnimation = (e) => {
		if (!this.state.playing) {
			this.setState({
				playing:     true,
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
		return (
			<div className={classes} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
				<svg className={pyramidClasses} ref="pyramid">
				
				</svg>
				<img src={`${assetUrl}/geo/geo-29.svg`} className={geoClasses} ref="geo"/>
			</div>
		);
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
