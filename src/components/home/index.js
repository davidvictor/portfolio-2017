import React, {Component} from 'react';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		const classes = classNames("home", style.root);
		return (
			<div className={classes}>
				<div className={style.inner}>
					<div className={style.about}>
						<p>My name is David Victor. I am a&nbsp;
							<a href="#"><strong>full stack designer</strong></a> and&nbsp;
							<a href="#"><strong>front end engineer</strong></a> living in Venice, California. I believe in the&nbsp;
							<a href="#">holistic approach</a> to product design.
						</p>
						<p className="small">
							<a href="#">LinkedIn</a>&nbsp;
							<a href="#">GitHub</a>&nbsp;
							<a href="#">Resume</a>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
