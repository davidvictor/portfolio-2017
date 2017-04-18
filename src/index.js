import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import App from './components/app';
import ReactGA from 'react-ga';

const history = createHistory();

ReactGA.initialize('UA-96838381-1',{
	debug: process.env.NODE_ENV !== 'production',
	titleCase: true,
});

if ((location.hostname == 'localhost') || (location.hostname == 'beta.davidvictor.me')) {
	ReactGA.set({ 'sendHitTask': null });
}

if (window.performance) {
	const timeSincePageLoad = Math.round(performance.now());
	ReactGA.timing({
		category: 'React',
		variable: 'render',
		value: timeSincePageLoad,
		label: 'root'
	});
}

const app = (
	<Router history={history}>
		<App/>
	</Router>
);

ReactDOM.render(
	app,
	document.getElementById('root')
);
