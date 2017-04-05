import React, {Component, PropTypes} from 'react';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';

const About = ({description, roles}, context) => {
	const classes  = classNames("about", style.about);
	return (
		<div className={classes}>
			<Flex justify="center" wrap={false}>
				<Box sm={12} md={9} lg={6} px={2}>
					<label>PRODUCT</label>
					<p className={style.description}>{description}</p>
					<label>ROLE</label>
					<p className={style.roles}>{roles}</p>
				</Box>
			</Flex>
		
		</div>
	);
};

About.propTypes = {
	//roles: PropTypes.arrayOf(PropTypes.oneOf(['branding', 'creator'])),
};

About.contextTypes = {
	rebass: React.PropTypes.object
};

export default About;


