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
		<Flex justify='flex-start' wrap={false} flexColumn className={classes}>
			<Box>
				<NavLink to="/work/vetondemand"
				         onClick={() => handleToggle()}
				         activeClassName={style.selected}><span> Vet On Demand </span></NavLink>
			</Box>
			<Box>
				<NavLink to="/work/lifeisbeautiful"
				         onClick={() => handleToggle()}
				         activeClassName={style.selected}><span> Life is Beautiful</span>
				</NavLink>
			</Box>
			<Box>
				<NavLink to="/work/amptube"
				         onClick={() => handleToggle()}
				         activeClassName={style.selected}><span> Amptube</span>
				</NavLink>
			</Box>
			<Box>
				<NavLink to="/work/esc"
				         onClick={() => handleToggle()}
				         activeClassName={style.selected}>
					<span>ESC Lab Sciences </span></NavLink>
			</Box>
			<Box flexAuto>
				<NavLink to="/work/archive"
				         onClick={() => handleToggle()}
				         activeClassName={style.selected}><span> Additional Work</span>
				</NavLink>
			</Box>
		</Flex>
	
	);
};

export default Menu;
