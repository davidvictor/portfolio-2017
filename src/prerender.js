import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import App from './components/app';
//import './index.scss';

const history = createHistory();

const app = (
	<Router history={history}>
		<App/>
	</Router>
);

exports.prerender = function () {
	return ReactDOMServer.renderToString(
		<App/>)
};
