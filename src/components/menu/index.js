import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';

class Menu extends Component {
	render() {
		const classes = classNames("menu", style.root);
		return (
			<Box px={1} className={classes}>
				<Flex justify='flex-start' wrap={false} flexColumn>
					<Box py={1}>
						<NavLink to="/work/amptube" activeClassName={style.selected}>Amptube</NavLink>
					</Box>
					<Box py={1}>
						<NavLink to="/work/vetondemand" activeClassName={style.selected}>VetOnDemand</NavLink>
					</Box>
					<Box py={1}>
						<NavLink to="/work/lifeisbeautiful" activeClassName={style.selected}>Life is Beautiful</NavLink>
					</Box>
					<Box py={1}>
						<NavLink to="/work/esc" activeClassName={style.selected}>ESC Lab Sciences</NavLink>
					</Box>
					<Box py={1}>
						<NavLink to="/work/mysecondhome" activeClassName={style.selected}>My Second Home</NavLink>
					</Box>
					<Box py={1}>
						<NavLink to="/work/archive" activeClassName={style.selected}>Archive</NavLink>
					</Box>
				</Flex>
			</Box>
		);
	}
}

export default Menu;
