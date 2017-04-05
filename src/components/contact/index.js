import React, {Component} from 'react';
import ReactModal from 'react-modal';
import {ButtonCircle} from 'rebass';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';
import {Email} from '../icon';

import {compose, withState, withHandlers} from 'recompose';

const withActive = compose(
	withState('active', 'setActive', false),
	withHandlers({
		on:     props => () => props.setActive(true),
		off:    props => () => props.setActive(false),
		toggle: props => () => props.setActive(a => !a),
	})
);

const ContactButton = withActive(({active, on, off, toggle}) => {
	const classes        = classNames("contact", style.contactRoot);
	const getParent      = () => {return document.querySelector('#root');};
	const onRequestClose = () => {
		off();
		mixpanel.track("Contact Modal Close");
	};
	const afterOpen      = () => {
		mixpanel.track("Contact Modal Open");
	};
	const handleEmail    = () => {
		mixpanel.track("Email Address Clicked");
	};
	return (
		<div className={classes}>
			<ButtonCircle
				backgroundColor="white"
				color="white"
				onClick={toggle}>
				<Email className={style.icon} color="#a57f5f"/>
			</ButtonCircle>
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
							<a href="mailTo:hello@davidvictor.me"
							   onClick={() => handleEmail()}>hello<span>@</span>davidvictor.me</a>
						</Box>
					</Flex>
				</div>
			</ReactModal>
		</div>
	);
});

export default ContactButton;
