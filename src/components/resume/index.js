import React, {Component} from 'react';
import ReactModal from 'react-modal';
import {Close, Button, ButtonOutline, ButtonCircle} from 'rebass';
import {Flex, Box} from 'reflexbox';
import Headroom from 'react-headroom';
import a from '../../utils/analytics';
import classNames from 'classnames';
import style from './style.scss';
import ResumeContent from './resume';
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

const ContactButton = withActive(({active, on, off, toggle}) => {
	const classes             = classNames("resume", style.root);
	const modalClasses        = classNames("resume-modal", style.modal);
	const modalContentClasses = classNames("resume-modal-content", style.modalContent);
	const buttonClasses       = classNames(style.backButton);
	const buttonLargeClasses  = classNames(style.backButton, style.backButtonLarge);
	const getParent           = () => {return document.querySelector('#root');};
	const getScrollParent     = () => {return document.querySelector('.resume-modal-content');};
	const onRequestClose      = () => {
		off();
	};
	const afterOpen           = () => {
		ReactGA.modalview('resume');
	};
	const onDownload          = () => {
		ReactGA.event({
			category: 'Engagement',
			action: 'Resume Downloaded'
		});
		onRequestClose();
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
				portalClassName="🕶"
				contentLabel="David's Resume"
				parentSelector={getParent}
				shouldCloseOnOverlayClick={true}
				onAfterOpen={afterOpen}>
				<div className={modalContentClasses}>
					<Headroom disableInlineStyles parent={getScrollParent}>
						<div className={style.modalHeader}>
							<Flex align="center">
								<Box style={{textAlign: 'right'}}>
									<button onClick={() => onRequestClose()}
									        className={buttonClasses}>back
									</button>
								</Box>
								<Box flexAuto style={{textAlign: 'right'}} className={style.downloadButton}>
									<Button href="https://d1x0bq6kwb2k3o.cloudfront.net/resume/davidvictor-resume-public.pdf"
									        target="_blank"
									        onClick={() => onDownload()}
									        backgroundColor={`rgb(165, 127, 95)`}
									        px={3}
									        py={2}> download pdf </Button>
								</Box>
							</Flex>
						</div>
					</Headroom>
					<div className={style.modalInnerContent}>
						<ResumeContent/>
					</div>
					<button onClick={() => onRequestClose()}
					        className={buttonLargeClasses}>
						back
					</button>
				</div>
			</ReactModal>
		</div>
	);
});

export default ContactButton;
