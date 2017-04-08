import React, {Component} from 'react';
import Sidebar from './sidebar';
import {Button, ButtonOutline} from 'rebass';
import {browserHistory} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';

import {assetUrl, resume} from 'config';

const Experience = ({role, company, location, date, children}) => {
	const classes = classNames("experience", style.experience);
	return (
		<div className={classes}>
			<Flex align="baseline">
				<Box>
					<h2>{role}</h2>
				</Box>
			</Flex>
			<Flex align="baseline">
				<Box>
					<h3>{company}</h3>
				</Box>
				<Box>
					<h4>{location}</h4>
				</Box>
				<Box flexAuto style={{textAlign: 'right'}}>
					<h6>{date}</h6>
				</Box>
			</Flex>
			<Flex align="baseline" mt={1}>
				<Box col={12}>
					{children}
				</Box>
			</Flex>
		</div>
	);
};

const Success = ({title, description, date}) => {
	const classes = classNames(style.success);
	return (
		<div className={classes}>
			<p className="text-light"><strong>{title}</strong> <span className="text-light">{description}</span> <span className="text-muted">{date}</span></p>
		</div>
	);
};

const Resume = () => {
	const classes = classNames("resume", style.resume);
	const experience = resume.experience;
	const additionalExperience = resume.additionalExperience;
	return (
		<div className={classes}>
			<Flex className={style.wrapper} wrap>
				<Box className={style.sidebar}>
					<Sidebar/>
				</Box>
				<Box className={style.main}>
					{experience.map((ex, idx) =>
						<Experience role={ex.role}
						            company={ex.company}
						            location={ex.location}
						            date={ex.date}>
							{ex.success.map((su, idx) =>
								<Success title={su.title}
								         description={su.description}/>
							)}
						</Experience>
					)}
					<hr/>
					{additionalExperience.map((ex, idx) =>
						<Experience role={ex.role}
						            company={ex.company}
						            location={ex.location}
						            date={ex.date}>
							{ex.success.map((su, idx) =>
								<Success title={su.title}
								         description={su.description}/>
							)}
						</Experience>
					)}
				</Box>
			</Flex>
		</div>
	);
};


Resume.contextTypes = {
	rebass: React.PropTypes.object,
	router: React.PropTypes.object,
};

export default Resume;
