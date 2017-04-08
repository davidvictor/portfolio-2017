import React, {Component} from 'react';
import ReactModal from 'react-modal';
import {Close,Button, ButtonOutline, ButtonCircle} from 'rebass';
import {Flex, Box} from 'reflexbox';
import Headroom from 'react-headroom';
import a from '../../utils/analytics';
import classNames from 'classnames';
import style from './style.scss';
import ResumeContent from './resume';

import {compose, withState, withHandlers,withContext} from 'recompose';

const withActive = compose(
	withState('active', 'setActive', false),
	withHandlers({
		on:     props => () => props.setActive(true),
		off:    props => () => props.setActive(false),
		toggle: props => () => props.setActive(a => !a),
	})
);
//
//const provide = (rebass) => withContext(
//	{ rebass: React.PropTypes.object },
//	() => ({ rebass })
//);

const ContactButton = withActive(({active, on, off, toggle}) => {
	const classes         = classNames("resume", style.root);
	const modalClasses    = classNames("resume-modal", style.modal);
	const buttonClasses         = classNames(style.backButton);
	const buttonLargeClasses         = classNames(style.backButton,style.backButtonLarge);
	const getParent       = () => {return document.querySelector('#root');};
	const getScrollParent = () => {return document.querySelector('.resume-modal');};
	const onRequestClose  = () => {
		off();
		a.track("Resume Close");
	};
	const afterOpen       = () => {
		a.track("Resume Open");
	};
	return (
		<div className={classes}>
			<a onClick={toggle}>
				<span> Résumé </span>
			</a>
			<ReactModal
				id="resume-modal"
				isOpen={active}
				onRequestClose={() => onRequestClose()}
				className={modalClasses}
				overlayClassName={style.modalOverlay}
				contentLabel="David's Resume"
				parentSelector={getParent}
				shouldCloseOnOverlayClick={true}
				onAfterOpen={afterOpen}>
				<div className={style.modalContent}>
					<Headroom disableInlineStyles parent={getScrollParent} disable>
						<div className={style.modalHeader}>
							<Flex align="center">
								
								<Box flexAuto style={{textAlign:'right',display:'none'}}>
									<Button onClick={() => onRequestClose()}
									        className={style.closeButton}
									        backgroundColor={`rgb(165, 127, 95)`}
									        px={3} py={2}>
										download
									</Button>
								</Box>
								<Box flexAuto style={{textAlign:'right'}}>
									<button onClick={() => onRequestClose()}
									        className={buttonClasses}>back</button>
								</Box>
								<Box flexAuto style={{textAlign:'right',display:'none'}}>
									<Button onClick={() => onRequestClose()}
									        className={style.closeButton}
									        backgroundColor={`rgb(165, 127, 95)`}
									px={3} py={2}>
										download
									</Button>
								</Box>
							</Flex>
						</div>
					</Headroom>
					<div className={style.modalInnerContent}>
						<ResumeContent/>
					</div>
					<button onClick={() => onRequestClose()}
					        className={buttonLargeClasses}>back</button>
				</div>
			</ReactModal>
		</div>
	);
});
//
//ContactButton.contextTypes = {
//	rebass: React.PropTypes.object
//};

export default ContactButton;
