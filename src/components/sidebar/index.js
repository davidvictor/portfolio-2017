import React, {Component} from 'react';
import ReactModal from 'react-modal';
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

const Footer = withActive(({active, on, off, toggle}) => {
	const getParent      = () => {return document.querySelector('#root');};
	const onRequestClose = () => {
		off();
	};
	const afterOpen      = () => {};
	const classes        = classNames("footer", style.footer);
	return (
		<div className={classes}>
			<Flex justify='flex-start' align='center' wrap={false}>
				<Box flexAuto>
					<img src="/images/geo/geo-29.svg" className={style.geo}/>
				</Box>
				<Box>
					<button onClick={toggle}>Contact</button>
				</Box>
				<ReactModal
					isOpen={active}
					onRequestClose={() => onRequestClose()}
					className={style.modal}
					overlayClassName={style.modalOverlay}
					contentLabel="Contact David"
					parentSelector={getParent}
					shouldCloseOnOverlayClick={true}
					onAfterOpen={afterOpen}>
					<div className={style.emailme}>
						<Flex justify='center' align='center' wrap={false}>
							<Box>
								<a href="mailTo:hello@davidvictor.me">hello<span>@</span>davidvictor.me</a>
							</Box>
						</Flex>
					</div>
				</ReactModal>
			</Flex>
		</div>
	)
});

const Sidebar = () => {
	const classes = classNames("sidebar", style.root);
	return (
		<div className={classes}>
			<Flex flexColumn wrap={false} flex className={style.inner}>
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
};

export default Sidebar;
