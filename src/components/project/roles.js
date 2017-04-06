import React, {Component, PropTypes} from 'react';
import ReactModal from 'react-modal';
import {Flex, Box} from 'reflexbox';
import {Button, ButtonOutline, Close} from 'rebass';
import classNames from 'classnames';
import style from './style.scss';
import R from 'ramda';

import {assetUrl} from 'config';

import {compose, withState, withHandlers} from 'recompose';

const withActive = compose(
	withState('active', 'setActive', false),
	withHandlers({
		on:     props => () => props.setActive(true),
		off:    props => () => props.setActive(false),
		toggle: props => () => props.setActive(a => !a),
	})
);

const Role = withActive(({label, active, on, off, toggle, children, context}) => {
	const classes        = classNames(style.role);
	const getParent      = () => {return document.querySelector('#root');};
	const onRequestClose = () => {off()};
	const afterOpen      = () => {
		//mixpanel.track("Contact Modal Open");
	};
	return (
		<div className={classes}>
			<ButtonOutline
				color={context.rebass.colors.gold}
				onClick={toggle}
				pill
				py={2}
				px={3}
				style={{display: 'block'}}
				className={style.roleButton}>
				{label}
			</ButtonOutline>
			<ReactModal
				isOpen={active}
				onRequestClose={() => onRequestClose()}
				className={style.modal}
				overlayClassName={style.modalOverlay}
				contentLabel={`${label} Details`}
				parentSelector={getParent}
				shouldCloseOnOverlayClick={true}
				onAfterOpen={afterOpen}>
				<div className={style.modalContent}>
					{children}
					<Button onClick={() => off()}
					        backgroundColor="white"
					        color="transparent"
					        style={{display: 'block'}}
					        py={4}
					        px={6}>Close</Button>
				</div>
			</ReactModal>
		</div>
	);
});

const Roles = ({roles}, context) => {
	const classes = classNames("roles", style.roles);
	
	const roleData    = [
		{
			id:          'strategy',
			name:        "Strategy",
			icon:        `${assetUrl}/lionhouse/strategy.svg`,
			description: "Lyft skateboard master cleanse chambray. Food truck pour-over microdosing, four dollar toast messenger bag pug flexitarian flannel church-key etsy. Mustache tattooed art party small batch narwhal, live-edge green juice pickled pug offal meh ugh. Mlkshk VHS skateboard, chambray meh PBR&B fixie lyft coloring book typewriter gastropub neutra hell of live-edge taxidermy. "
		}, {
			id:          'creative',
			name:        "Creative Direction",
			icon:        `${assetUrl}/lionhouse/content.svg`,
			description: "Lyft skateboard master cleanse chambray. Food truck pour-over microdosing, four dollar toast messenger bag pug flexitarian flannel church-key etsy. Mustache tattooed art party small batch narwhal, live-edge green juice pickled pug offal meh ugh. Mlkshk VHS skateboard, chambray meh PBR&B fixie lyft coloring book typewriter gastropub neutra hell of live-edge taxidermy. "
		}, {
			id:          'branding',
			name:        "Branding",
			icon:        `${assetUrl}/lionhouse/content.svg`,
			description: "Lyft skateboard master cleanse chambray. Food truck pour-over microdosing, four dollar toast messenger bag pug flexitarian flannel church-key etsy. Mustache tattooed art party small batch narwhal, live-edge green juice pickled pug offal meh ugh. Mlkshk VHS skateboard, chambray meh PBR&B fixie lyft coloring book typewriter gastropub neutra hell of live-edge taxidermy. "
		}, {
			id:          'design',
			name:        "Design",
			icon:        `${assetUrl}/lionhouse/design.svg`,
			description: "Lyft skateboard master cleanse chambray. Food truck pour-over microdosing, four dollar toast messenger bag pug flexitarian flannel church-key etsy. Mustache tattooed art party small batch narwhal, live-edge green juice pickled pug offal meh ugh. Mlkshk VHS skateboard, chambray meh PBR&B fixie lyft coloring book typewriter gastropub neutra hell of live-edge taxidermy. "
		}, {
			id:          'ui',
			name:        "UI",
			icon:        `${assetUrl}/lionhouse/interface.svg`,
			description: "Lyft skateboard master cleanse chambray. Food truck pour-over microdosing, four dollar toast messenger bag pug flexitarian flannel church-key etsy. Mustache tattooed art party small batch narwhal, live-edge green juice pickled pug offal meh ugh. Mlkshk VHS skateboard, chambray meh PBR&B fixie lyft coloring book typewriter gastropub neutra hell of live-edge taxidermy. "
		}, {
			id:          'ux',
			name:        "UX",
			icon:        `${assetUrl}/lionhouse/scope.svg`,
			description: "Lyft skateboard master cleanse chambray. Food truck pour-over microdosing, four dollar toast messenger bag pug flexitarian flannel church-key etsy. Mustache tattooed art party small batch narwhal, live-edge green juice pickled pug offal meh ugh. Mlkshk VHS skateboard, chambray meh PBR&B fixie lyft coloring book typewriter gastropub neutra hell of live-edge taxidermy. "
		}, {
			id:          'code',
			name:        "Code",
			icon:        `${assetUrl}/lionhouse/develop.svg`,
			description: "Lyft skateboard master cleanse chambray. Food truck pour-over microdosing, four dollar toast messenger bag pug flexitarian flannel church-key etsy. Mustache tattooed art party small batch narwhal, live-edge green juice pickled pug offal meh ugh. Mlkshk VHS skateboard, chambray meh PBR&B fixie lyft coloring book typewriter gastropub neutra hell of live-edge taxidermy. "
		}
	];
	const filteredRoles = R.filter(R.compose(R.flip(R.contains)(roles), R.prop('id')), roleData);
	return roles ? (
		<div className={classes}>
			<Flex wrap align="center">
				{filteredRoles.map((role, idx) =>
					<Box key={idx}>
						<Role label={role.name} context={context}>
							<img src={role.icon} alt={role.name}/>
							<h1>{role.name}</h1>
							<p>{role.description}</p>
						</Role>
					</Box>
				)}
			</Flex>
		</div>
	) : false;
};

Roles.propTypes = {
	//	roles: PropTypes.arrayOf(PropTypes.oneOf(['branding', 'creator'])),
};

Roles.contextTypes = {
	rebass: React.PropTypes.object
};

export default Roles;



