import React, {Component} from 'react';
import ContactButton from '../contact';
import {ButtonCircle} from 'rebass';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';

import {assetUrl} from 'config';

import {Github, LinkedIn, Resume} from '../icon';

const IconButtons = ({off, left}) => {
	const classes  = classNames(style.iconButtons);
	const openLink = (url) => {
		if (url) {
			if (off) {
				off();
			}
			window.open(url);
		}
	};
	return (
		<Flex justify={left ? 'flex-start' : 'flex-end'} align='center' wrap={false} className={classes}>
			<Box className={style.iconButtonWrap} flex>
				<ButtonCircle
					backgroundColor="transparent"
					color="white"
					size={36}
					onClick={() => openLink('https://github.com/davidvictor')}>
					<Github className={style.icon}/>
				</ButtonCircle>
			</Box>
			<Box className={style.iconButtonWrap} flex>
				<ButtonCircle
					backgroundColor="transparent"
					color="white"
					size={36}
					onClick={() => openLink('https://www.linkedin.com/in/dvictor')}>
					<LinkedIn className={style.icon}/>
				</ButtonCircle>
			</Box>
		
			<Box className={style.iconButtonWrap} flex>
				<ContactButton/>
			</Box>
		</Flex>
	)
};

export default IconButtons;

//<Box className={style.iconButtonWrap} flex>
//	<ButtonCircle
//		backgroundColor="transparent"
//		color="white"
//		href='https://www.dropbox.com/s/bkzc5ki6jaj1khs/davidvictor-resume-public.pdf'
//		target="_blank">
//		<Resume className={style.icon} color="rgb(35, 31, 32)"/>
//	</ButtonCircle>
//</Box>
