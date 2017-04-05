import React, {Component} from 'react';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';
import style from './style.scss';

import {assetUrl} from 'config';

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		const classes = classNames("home", style.root);
		const bgImage = 'url(' + assetUrl + '/base/lionhouse-poster.jpg)';
		const handleClick = (type) => {
			mixpanel.track('Clicked Home Link', {
				type: type
			})
		};
		return (
			<div className={classes}>
				<div className={style.inner} style={{backgroundImage: bgImage}}>
					<div className={style.about}>
						<p>
							A&nbsp;
							<a href="https://medium.com/fullstack-design-by-xpos-it/the-rise-of-the-full-stack-designer-and-the-tools-he-uses-3daf015eb3fc"
							   target="_blank"
							   onClick={()=>handleClick('Full Stack Designer')}><span><strong>full&nbsp;stack&nbsp;designer</strong></span></a> and&nbsp;
							<a href="http://f2em.com/"
							   target="_blank"
							   onClick={()=>handleClick('Front End Engineer')}><span><strong>front&nbsp;end&nbsp;engineer</strong></span></a> living in Venice,&nbsp;California. I believe in the&nbsp;
							<a href="http://www.triplepundit.com/2011/11/yves-behars-7-principles-holistic-product-design/#"
							   target="_blank"
							   onClick={()=>handleClick('Holistic Approach')}><span>holistic&nbsp;approach</span></a> to&nbsp;product&nbsp;design.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
