import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import classNames from 'classnames';
import style from './style.scss';

const Hero = ({title, bg, logo, url, roles, className, children}) => {
	const classes    = classNames("hero", style.hero, {
	}, className);
	const coverStyle = {
		backgroundImage: 'url(' + bg.src + ')',
	};
	const coverStyleMobile = {
		backgroundImage: 'url(' + bg.mobile + ')',
	};
	const logoStyle  = {
		maxWidth: logo.width ? logo.width : '80px',
	};
	
	return (
		<div className={classes}>
			<MediaQuery minWidth={961}>
				<div style={coverStyle} className={style.cover}>
					<img src={logo.src} style={logoStyle}/>
				</div>
			</MediaQuery>
			<MediaQuery maxWidth={960}>
				<div style={coverStyleMobile} className={style.cover}>
					<img src={logo.src} style={logoStyle}/>
				</div>
			</MediaQuery>
			<div className={style.fold}>
				{children}
			</div>
		</div>
	);
	
};

export default Hero;
