import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';

const Menu = ({off}) => {
	const classes      = classNames("menu", style.root);
	const handleToggle = () => {
		off();
	};
	return (
		<Box px={1} className={classes}>
			<Flex justify='flex-start' wrap={false} flexColumn>
				<Box>
					<NavLink to="/work/amptube"
					         onClick={() => handleToggle()}
					         activeClassName={style.selected}>
						Amptube
					</NavLink>
				</Box>
				<Box>
					<NavLink to="/work/vetondemand"
					         onClick={() => handleToggle()}
					         activeClassName={style.selected}>
						VetOnDemand
					</NavLink>
				</Box>
				<Box>
					<NavLink to="/work/lifeisbeautiful"
					         onClick={() => handleToggle()}
					         activeClassName={style.selected}>
						Life is Beautiful
					</NavLink>
				</Box>
				<Box>
					<NavLink to="/work/esc"
					         onClick={() => handleToggle()}
					         activeClassName={style.selected}>
						ESC Lab Sciences
					</NavLink>
				</Box>
				<Box>
					<NavLink to="/work/archive"
					         onClick={() => handleToggle()}
					         activeClassName={style.selected}>
						Additional Work
					</NavLink>
				</Box>
			</Flex>
		</Box>
	);
};

export default Menu;
