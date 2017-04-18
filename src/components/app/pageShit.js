import React, {Component} from 'react';
import {withRouter} from 'react-router';
import ReactGA from 'react-ga';

class PageShit extends Component {
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0);
			ReactGA.set({ page: window.location.pathname });
			ReactGA.pageview(window.location.pathname);
		}
	}
	render() {
		return false
	}
}

export default withRouter(PageShit)
