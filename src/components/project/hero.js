import React, {Component} from 'react';
import classNames from 'classnames';
import style from './style.scss';

const Hero = ({title, bg, logo, url, roles, className, children}) => {
	const classes    = classNames("hero", style.hero, {
		[style.noCover]: !bg,
	}, className);
	const coverStyle = {
		backgroundImage: 'url(' + bg + ')',
	};
	const logoStyle  = {
		maxWidth: logo.width ? logo.width : '80px',
	};
	
	return (
		<div className={classes}>
			<div style={coverStyle} className={style.cover}>
				<img src={logo.src} style={logoStyle}/>
			</div>
			<div className={style.fold}>
				{children}
			</div>
		</div>
	);
	
};

export default Hero;
