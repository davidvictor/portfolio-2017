import React, {Component} from 'react';
import {withRouter} from 'react-router';
import a from '../../utils/analytics';

class PageShit extends Component {
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0);
			a.track(window.location.pathname);
		}
	}
	
	render() {
		return false
	}
}

export default withRouter(PageShit)
