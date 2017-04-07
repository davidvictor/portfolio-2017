import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import IconButtons from './iconButtons';
import Headroom from 'react-headroom';
import BodyClass from 'react-body-classname';
import Menu from '../menu';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';

import {assetUrl} from 'config';

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
	const handleToggle = () => {
		off();
	};
	return (
		<div className={classes}>
			<Flex justify='flex-start' align='center' wrap={false}>
				<Box >
					<img src={`${assetUrl}/geo/geo-29.svg`} className={style.geo}/>
				</Box>
				<Box flexAuto style={{textAlign:'center'}}>
					<NavLink to="/about"
					         onClick={() => handleToggle()}
					         activeClassName={style.selected}
										style={{display:'none'}}>
						about me
					</NavLink>
				</Box>
				<Box>
					<IconButtons off={off}/>
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
		'noverflow': active,
	});
	return (
		<div className={classes}>
			<Flex flexColumn wrap={false} flex className={style.inner} >
				<Box px={2}>
					<Header off={off}/>
				</Box>
				<Box flexAuto flex>
					<Menu off={off}/>
				</Box>
				<Box px={2}>
					<Footer off={off}/>
				</Box>
			</Flex>
			<Headroom disableInlineStyles>
				<div className={style.menuToggle}>
					<button onClick={toggle} className={buttonClasses}>{!active ? 'menu' : 'close'}</button>
				</div>
			</Headroom>
			<BodyClass className={bodyClasses}/>
		</div>
	);
});

export default Sidebar;
