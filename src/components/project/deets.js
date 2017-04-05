import React, {Component, PropTypes} from 'react';
import Headroom from 'react-headroom';
import {Flex, Box} from 'reflexbox';
import {Button,ButtonOutline} from 'rebass';
import classNames from 'classnames';
import style from './style.scss';

const Deets = ({title, url}, context) => {
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
				
				<Flex wrap={false}>
					<Box pr={2} flex>
						<Flex justify='center' flexColumn>
							<Box>
								<label className={style.label}>Project</label>
							</Box>
							<Box>
								<h1>{title}</h1>
							</Box>
						</Flex>
					</Box>
					<Box flexAuto flex>
					
					</Box>
					<Box pl={2} pr={2} flex>
						<Flex justify='center' flexColumn>
							<Box>
								{url ?
									<ButtonOutline
									        color={context.rebass.colors.primary}
									        onClick={() => openLink(url)}>
										VISIT
									</ButtonOutline> : false}
							</Box>
						</Flex>
					</Box>
				</Flex>
			
			</div>
		</Headroom>
	);
};

Deets.propTypes = {
	roles: PropTypes.arrayOf(PropTypes.oneOf(['branding', 'creator'])),
};

Deets.contextTypes = {
	rebass: React.PropTypes.object
};

export default Deets;


