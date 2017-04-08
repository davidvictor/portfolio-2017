import React, {Component} from 'react';
import {Button, ButtonOutline} from 'rebass';
import {browserHistory} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';

import _ from 'lodash';

import {assetUrl, resume} from 'config';

const Identity = () => {
	const classes = classNames('sidebar-identity', style.identity);
	return (
		<div className={classes}>
			<img src={`${assetUrl}/base/dv-headshot.jpg`} className={style.headshot}/>
			<img src={`${assetUrl}/base/davidvictor.svg`} className={style.logo}/>
		</div>
	);
};

const About = () => {
	const classes = classNames('sidebar-about', style.about);
	return (
		<div className={classes}>
			<p>A&nbsp;
			<strong>product designer</strong>. I develop innovative, creative solutions by combining a unique visual identity with sustained emotional resonance. I define success as a roar, audible through the noise of now.
			</p>
			<p>I live in&nbsp;
			<strong>Venice, California</strong>.</p>
		</div>
	);
};

const Contact = () => {
	const classes = classNames('sidebar-contact', style.contact);
	return (
		<div className={classes}>
			<Flex wrap className={style.links}>
				<Box col={12} md={12} lg={12}>
					<p className={style.linksEmail}><span><strong>email: </strong></span>hi@davidvictor.me</p>
				</Box>
				<Box col={12} md={12} lg={12}>
					<p className={style.linksWeb}><span><strong>website: </strong></span>davidvictor.me</p>
				</Box>
			</Flex>
		</div>
	);
};

const Expertise = () => {
	const classes = classNames('sidebar-expertise', style.expertise);
	const areas   = resume.expertise;
	return (
		<div className={classes}>
			<h5>Expertise</h5>
			<ul>
				{areas.map((area, idx) =>
					<li key={_.uniqueId('expertise_')}>{area}</li>
				)}
			</ul>
		</div>
	);
};

const Technology = () => {
	const classes = classNames('sidebar-technology', style.technology);
	const techs   = resume.technology;
	return (
		<div className={classes}>
			<h5>Technology</h5>
			<ul>
				{techs.map((tech, idx) =>
					<li key={_.uniqueId('technology_')}>{tech}</li>
				)}
			</ul>
		</div>
	);
};

const Tools = () => {
	const classes = classNames('sidebar-tools', style.tools);
	const tools   = resume.tools;
	return (
		<div className={classes}>
			<h5>Tools</h5>
			<ul>
				{tools.map((tool, idx) =>
					<li key={_.uniqueId('tools_')}>{tool}</li>
				)}
			</ul>
		</div>
	);
};

const Platforms = () => {
	const classes = classNames('sidebar-platforms', style.platforms);
	const platforms   = resume.platforms;
	return (
		<div className={classes}>
			<h5>Platforms</h5>
			<ul>
				{platforms.map((platform, idx) =>
					<li key={_.uniqueId('platforms_')}>{platform}</li>
				)}
			</ul>
		</div>
	);
};

const Education = () => {
	const classes = classNames('sidebar-education', style.education);
	return (
		<div className={classes}>
			<span className={style.college}>University of Colorado <span>2010</span></span>
			<span className={style.school}>School of Journalism & Mass Communication</span>
			<span className={style.degree}>
				<span>BS </span>Advertising Art Direction
			</span>
			<span className={style.degree}>
				<span>BFA </span>Creative Writing
			</span>
		</div>
	);
};

const Sidebar = () => {
	const classes = classNames('sidebar-inner', style.sidebarInner);
	return (
		<div className={classes}>
			<Identity/>
			<About/>
			<hr/>
			<Contact/>
			<hr/>
			<Expertise/>
			<Technology/>
			<Tools/>
			<Platforms/>
			<hr/>
			<Education/>
			<hr className={style.showMobile}/>
		</div>
	);
};

Sidebar.contextTypes = {
	rebass: React.PropTypes.object,
	router: React.PropTypes.object,
};

export default Sidebar;
