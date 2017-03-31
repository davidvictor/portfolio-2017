import React, {Component} from 'react';
import ContactButton from '../contact';
import {Link} from 'react-router-dom';
import Menu from '../menu';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';

import {compose, withState, withHandlers} from 'recompose';

const withActive = compose(
	withState('active', 'setActive', false),
	withHandlers({
		on:     props => () => props.setActive(true),
		off:    props => () => props.setActive(false),
		toggle: props => () => props.setActive(a => !a),
	})
);

const Header = () => {
	const classes = classNames("header", style.header);
	return (
		<div className={classes}>
			<Flex justify='flex-start' wrap={false}>
				<Box col={12}>
					<Link to="/" className={style.logoLink}>
						<img src="/images/base/davidvictor.svg" className={style.logoImg}/>
					</Link>
				</Box>
			</Flex>
		</div>
	)
};

const Footer = () => {
	const classes        = classNames("footer", style.footer);
	return (
		<div className={classes}>
			<Flex justify='flex-start' align='center' wrap={false}>
				<Box flexAuto>
					<img src="/images/geo/geo-29.svg" className={style.geo}/>
				</Box>
				<Box>
					<ContactButton/>
				</Box>
			</Flex>
		</div>
	)
};

const Sidebar = withActive(({active, on, off, toggle}) => {
	const classes = classNames("sidebar", style.root, {
		[style.active] : active,
	});
	const buttonClasses = classNames(style.mobileButton,{
		[style.buttonActive] : !active,
	});
	return (
		<div className={classes}>
			<button onClick={toggle} className={buttonClasses}>Menu</button>
			<Flex flexColumn wrap={false} flex className={style.inner} px={3}>
				<Box>
					<Header/>
				</Box>
				<Box flexAuto>
					<Menu/>
				</Box>
				<Box>
					<Footer/>
				</Box>
			</Flex>
		</div>
	);
});

export default Sidebar;
