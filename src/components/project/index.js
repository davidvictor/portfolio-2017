import React, {Component} from 'react';
import Hero from './hero';
import Roles from './roles';
import Headroom from 'react-headroom';
import {Flex, Box} from 'reflexbox';
import {Button, ButtonOutline} from 'rebass';
import classNames from 'classnames';
import style from './style.scss';
import ReactGA from 'react-ga';

const Deets = ({title, url, live}, context) => {
	const classes      = classNames("deets", style.deets, {
		[style.isLive]: live,
	});
	const wrapperStyle = {};
	return (
		<Headroom wrapperStyle={wrapperStyle} disableInlineStyles>
			<div className={classes}>
				<Flex wrap={false} align="center">
					<Box pl={2} pr={4}>
						<label className={style.label}>Project</label>
						<h1>{title}</h1>
					</Box> {url ?
					<Box pl={2} pr={2} flexAuto style={{textAlign: 'right'}}>
						{live ?
							<ReactGA.OutboundLink
								eventLabel="Clicked View Project"
								to={url}
								target="_blank">
								<Button
									inverted
									px={3}
									py={2}
									color={context.rebass.colors.white}
									backgroundColor={context.rebass.colors.red}> Live </Button>
							</ReactGA.OutboundLink>
							:
							<ReactGA.OutboundLink
								eventLabel="Clicked View Project"
								to={url}
								target="_blank">
								<ButtonOutline
									px={3}
									py={2}
									color={context.rebass.colors.primary}> Visit </ButtonOutline>
							</ReactGA.OutboundLink>}
					</Box> : false}
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

const About = ({title, roles, description, contribution}) => {
	const classes = classNames("about", style.about);
	return (
		<div className={classes}>
			<Flex justify="center" wrap={false}>
				<Box col={12} px={2}>
					<label>Disciplines</label>
					<Roles roles={roles}/>
					<label>About {title ? title : 'the project'}</label>
					<p className={style.description}>{description}</p>
					<label>My Contribution</label>
					<p className={style.contribution}>{contribution}</p>
				</Box>
			</Flex>
		</div>
	);
};

class Project extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		const {
			      live,
			      title,
			      bg,
			      logo,
			      url,
			      roles,
			      description,
			      contribution,
			      children
		      }              = this.props;
		const classes        = classNames("project", style.root);
		const contentClasses = classNames("project-content", style.content);
		return (
			<div className={classes}>
				<Hero {...this.props}>
					<Deets title={title} url={url} roles={roles} live={live}/>
				</Hero>
				<div className={contentClasses}>
					<About title={title} roles={roles} description={description} contribution={contribution}/> {children}
				</div>
			</div>
		);
	}
}

export default Project;
