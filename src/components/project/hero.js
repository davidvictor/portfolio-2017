import React, {Component} from 'react';
import classNames from 'classnames';
import style from './style.scss';

const Hero = ({bg, logo, logoWidth, children}) => {
	const classes = classNames("hero", style.hero, {
		[style.noCover]: !bg,
	});
	const cover   = {
		backgroundImage: 'url(' + bg + ')',
	};
	const imageStyle = {
		maxWidth: logoWidth ? logoWidth : '80px',
	};
	return (
		<div className={classes}>
			<div className={style.fold}>
				{children}
			</div>
			<div style={cover} className={style.cover}/>
			<img src={logo} style={imageStyle}/>
		</div>
	);
};

export default Hero;
