import React, {Component} from 'react';
import { withRouter } from 'react-router';

class PageShit extends Component {
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0);
			mixpanel.track(window.location.pathname);
		}
	}
	
	render() {
		return false
	}
}

export default withRouter(PageShit)
