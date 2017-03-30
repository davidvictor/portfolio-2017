import React, {Component, PropTypes} from 'react';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';

const Deets = ({title, date}) => {
	const classes = classNames("deets", style.deets);
	return (
		<div className={classes}>
			<Flex wrap={false}>
				<Box pr={2} flex>
					<Flex justify='center' flexColumn >
						<Box>
							<span className={style.label}>Project</span>
						</Box>
						<Box>
							<h1>{title}</h1>
						</Box>
					</Flex>
				</Box>
				<Box flexAuto flex>
				
				</Box>
				<Box pl={2} pr={4} flex>
					<Flex justify='center' flexColumn>
						<Box>
							<span className={style.label}>Stuff</span>
						</Box>
						<Box>
							<h2>Branding | UI/UX | FrontEnd</h2>
						</Box>
					</Flex>
				</Box>
			</Flex>
			
		</div>
	);
};

Deets.propTypes = {
	roles: PropTypes.arrayOf(PropTypes.oneOf(['branding', 'creator'])),
};

export default Deets;


