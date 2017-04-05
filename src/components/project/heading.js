import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import style from './style.scss';

const Heading = ({title, subtitle, icon}, context) => {
	const classes = classNames("heading", style.heading);
	return (
		<div className={classes}>
			<img src={icon}/>
			<h2 className={style.title}>{title}</h2>
			<h5 className={style.subtitle}>{subtitle}</h5>
		</div>
	);
};

Heading.propTypes = {};

Heading.contextTypes = {
	rebass: React.PropTypes.object
};

export default Heading;


