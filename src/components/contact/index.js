import React, {Component} from 'react';
import ReactModal from 'react-modal';
import {ButtonCircle} from 'rebass';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';
import {Email} from '../icon';
import ReactGA from 'react-ga';

import {compose, withState, withHandlers} from 'recompose';

const withActive = compose(
	withState('active', 'setActive', false),
	withHandlers({
		on:     props => () => props.setActive(true),
		off:    props => () => props.setActive(false),
		toggle: props => () => props.setActive(a => !a),
	})
);

const ContactButton = withActive(({active, on, off, toggle, anchor}) => {
	const classes        = classNames("contact", style.contactRoot);
	const getParent           = () => {return document.querySelector('#root');};
	const onRequestClose = () => {
		off();
	};
	const afterOpen      = () => {
		ReactGA.modalview('contact');
	};
	const handleEmail    = () => {
		ReactGA.event({
			category: 'Engagement',
			action: 'Clicked Contact Email'
		});
		off();
	};
	return (
		<div className={classes}>
			{anchor ? <a
					onClick={toggle}>
					<span> Contact </span>
				</a> : <ButtonCircle
					backgroundColor="transparent"
					color="white"
					size={36}
					onClick={toggle}
					style={{display: 'block'}}>
					<Email className={style.icon} color="#a57f5f"/>
				</ButtonCircle> }
			<ReactModal
				isOpen={active}
				onRequestClose={() => onRequestClose()}
				className={style.modal}
				overlayClassName={style.modalOverlay}
				portalClassName="👅"
				contentLabel="Contact David"
				parentSelector={getParent}
				shouldCloseOnOverlayClick={true}
				onAfterOpen={afterOpen}>
				<div className={style.emailMe}>
					<Flex justify='center' align='center' wrap={false}>
						<Box>
							<a href="mailTo:hello@davidvictor.me?subject=Hi%20David!"
							   onClick={() => handleEmail()}>hello<span>@</span>davidvictor.me</a>
						</Box>
					</Flex>
				</div>
			</ReactModal>
		</div>
	);
});

export default ContactButton;
