import React, {Component} from 'react';
import ContactButton from '../contact';
import {ButtonCircle} from 'rebass';
import Headroom from 'react-headroom';
import {Link} from 'react-router-dom';
import BodyClass from 'react-body-classname';
import Menu from '../menu';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';

import {assetUrl} from 'config';

import {Github, LinkedIn} from '../icon';

import {compose, withState, withHandlers} from 'recompose';

const withActive = compose(
	withState('active', 'setActive', false),
	withHandlers({
		on:     props => () => props.setActive(true),
		off:    props => () => props.setActive(false),
		toggle: props => () => props.setActive(a => !a),
	})
);

const Header = ({off}) => {
	const classes      = classNames("header", style.header);
	const handleToggle = () => {
		off();
	};
	return (
		<div className={classes}>
			<Flex justify='flex-start' wrap={false}>
				<Box col={12}>
					<Link to="/" className={style.logoLink} onClick={() => handleToggle()}>
						<img src={`${assetUrl}/base/davidvictor.svg`} className={style.logoImg}/>
					</Link>
				</Box>
			</Flex>
		</div>
	)
};

const Footer = ({off}) => {
	const classes  = classNames("footer", style.footer);
	const openLink = (url) => {
		if (url) {
			off();
			const win = window.open(url, '_blank');
			win.focus();
		}
	};
	
	return (
		<div className={classes}>
			<Flex justify='flex-start' align='center' wrap={false}>
				<Box flexAuto>
					<img src={`${assetUrl}/geo/geo-29.svg`} className={style.geo}/>
				</Box>
				<Box pr={1}>
					<ButtonCircle
						backgroundColor="white"
						color="white"
						onClick={() => openLink('https://www.linkedin.com/in/dvictor')}>
						<LinkedIn className={style.icon}/>
					</ButtonCircle>
				</Box>
				<Box pr={1}>
					<ButtonCircle
						backgroundColor="white"
						color="white"
						onClick={() => openLink('https://github.com/davidvictor')}>
						<Github className={style.icon}/>
					</ButtonCircle>
				</Box>
				<Box>
					<ContactButton/>
				</Box>
			</Flex>
		</div>
	)
};

const Sidebar = withActive(({active, on, off, toggle}) => {
	const classes       = classNames("sidebar", style.root, {
		[style.active]: active,
	});
	const buttonClasses = classNames(style.mobileButton, {
		[style.buttonActive]: !active,
	});
	const bodyClasses   = classNames({
		[style.noverflow]: active,
	});
	return (
		<div className={classes}>
			<Headroom disableInlineStyles>
				<div className={style.menuToggle}>
					<button onClick={toggle} className={buttonClasses}>{!active ? 'menu' : 'close'}</button>
				</div>
			</Headroom>
			<Flex flexColumn wrap={false} flex className={style.inner} px={3}>
				<Box>
					<Header off={off}/>
				</Box>
				<Box flexAuto>
					<Menu off={off}/>
				</Box>
				<Box>
					<Footer off={off}/>
				</Box>
			</Flex>
			<BodyClass className={bodyClasses}/>
		</div>
	);
});

export default Sidebar;
