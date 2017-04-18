import React, {Component} from 'react';
import {ButtonCircle} from 'rebass';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';
import ReactGA from 'react-ga';
import {assetUrl} from 'config';
import {Github, LinkedIn, Dribbble, Twitter} from '../icon';

const IconButtons = ({off, left}) => {
	const classes  = classNames(style.iconButtons);
	return (
		<Flex justify={left ? 'flex-start' : 'flex-end'} align='center' wrap={false} className={classes}>
			<Box className={style.iconButtonWrap} flex>
				<ReactGA.OutboundLink
					eventLabel={`Clicked Twitter`}
					to={`https://twitter.com/davidvictor`}
					target="_blank">
					<ButtonCircle
						backgroundColor="transparent"
						color="white"
						size={32}
						onClick={() => off()}>
						<Twitter className={style.icon}/>
					</ButtonCircle>
				</ReactGA.OutboundLink>
			</Box>
			<Box className={style.iconButtonWrap} flex>
				<ReactGA.OutboundLink
					eventLabel={`Clicked Dribbble`}
					to={`https://dribbble.com/davidvictor`}
					target="_blank">
					<ButtonCircle
						backgroundColor="transparent"
						color="white"
						size={32}
						onClick={() => off()}>
						<Dribbble className={style.icon}/>
					</ButtonCircle>
				</ReactGA.OutboundLink>
			</Box>
			<Box className={style.iconButtonWrap} flex>
				<ReactGA.OutboundLink
					eventLabel={`Clicked GitHub`}
					to={`https://github.com/davidvictor`}
					target="_blank">
					<ButtonCircle
						backgroundColor="transparent"
						color="white"
						size={32}
						onClick={() => off()}>
						<Github className={style.icon}/>
					</ButtonCircle>
				</ReactGA.OutboundLink>
			</Box>
			<Box className={style.iconButtonWrap} flex>
				<ReactGA.OutboundLink
					eventLabel={`Clicked LinkedIn`}
					to={`https://www.linkedin.com/in/dvictor`}
					target="_blank">
					<ButtonCircle
						backgroundColor="transparent"
						color="white"
						size={32}
						onClick={() => off()}>
						<LinkedIn className={style.icon}/>
					</ButtonCircle>
				</ReactGA.OutboundLink>
			</Box>
		</Flex>
	)
};

export default IconButtons;
