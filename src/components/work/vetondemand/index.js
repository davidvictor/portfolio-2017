import React, {Component} from 'react';
import Hero from '../../project/hero';
import Deets from '../../project/deets';
import Branding from './branding';
import Insight from './insight';
import Marketing from './marketing';
import Mobile from './mobile';
import Overview from './overview';
import Research from './research';
import Web from './web';
import classNames from 'classnames';
import style from './style.scss';

class VetOnDemand extends Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		const classes = classNames("vetondemand", style.root);
		return (
			<div className={classes}>
				<Hero
					bg="/images/vetondemand/brand/overlay-brand-secondary.jpg"
					logo="/images/vetondemand/brand/logo-mark-white.svg">
						<Deets title="Vet On Demand"/>
				</Hero>
				<div className={style.section}>
					<Overview/>
				</div>
				<div className={style.section}>
					<Research/>
				</div>
				<div className={style.section}>
					<Insight/>
				</div>
				<div className={style.section}>
					<Branding/>
				</div>
				<div className={style.section}>
					<Mobile/>
				</div>
				<div className={style.section}>
					<Web/>
				</div>
				<div className={style.section}>
					<Marketing/>
				</div>
			</div>
		);
	}
}

export default VetOnDemand;
