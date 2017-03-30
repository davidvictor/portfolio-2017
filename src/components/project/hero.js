import React, {Component} from 'react';
import classNames from 'classnames';
import style from './style.scss';

const Hero = ({bg, logo, children}) => {
	const classes = classNames("hero", style.hero);
	const cover   = {
		backgroundImage: 'url(' + bg + ')',
	};
	return (
		<div className={classes}>
			<div className={style.fold}>
				{children}
			</div>
			<div style={cover} className={style.cover}/>
			<img src={logo}/>
		</div>
	);
};

export default Hero;
