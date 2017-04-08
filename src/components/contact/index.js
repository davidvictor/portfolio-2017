import React, {Component} from 'react';
import ReactModal from 'react-modal';
import {Button,ButtonCircle} from 'rebass';
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

const ContactButton = withActive(({active, on, off, toggle, anchor}) => {
	const classes        = classNames("contact", style.contactRoot);
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
				contentLabel="Contact David"
				shouldCloseOnOverlayClick={true}
				onAfterOpen={afterOpen}>
				<div className={style.emailMe}>
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
