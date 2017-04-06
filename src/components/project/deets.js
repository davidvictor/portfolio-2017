import React, {Component, PropTypes} from 'react';
import Headroom from 'react-headroom';
import {Flex, Box} from 'reflexbox';
import {Button,ButtonOutline} from 'rebass';
import classNames from 'classnames';
import style from './style.scss';

const Deets = ({title,roles, url}, context) => {
	const classes  = classNames("deets", style.deets);
	const openLink = (url) => {
		if (url) {
			const win = window.open(url, '_blank');
			win.focus();
		}
	};
	const wrapperStyle = {};
	return (
		<Headroom wrapperStyle={wrapperStyle} disableInlineStyles>
			<div className={classes}>
				<Flex wrap={false} align="center">
					<Box pl={2} pr={4}>
						<label className={style.label}>Project</label>
						<h1>{title}</h1>
					</Box>
					<Box>
						<label className={style.label}>Roles</label>
						<h2>{roles}</h2>
					</Box>
				</Flex>
			</div>
		</Headroom>
	);
};

Deets.propTypes = {
//	roles: PropTypes.arrayOf(PropTypes.oneOf(['branding', 'creator'])),
};

Deets.contextTypes = {
	rebass: React.PropTypes.object
};

export default Deets;

//
//<Box pl={2} pr={2}>
//	<Flex justify='center' flexColumn>
//		<Box>
//			{url ?
//				<ButtonOutline
//					color={context.rebass.colors.gold}
//					onClick={() => openLink(url)}>
//					VISIT
//				</ButtonOutline> : false}
//		</Box>
//	</Flex>
{/*</Box>*/}
