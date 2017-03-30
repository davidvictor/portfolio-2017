import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	IndexRoute,
	Link
} from 'react-router-dom';
import App from '../components/app';
import Home from '../components/home';
import Work from '../components/work';

export default (
	<Route path="/" component={App}>
		<Route path="/home" component={Home}/>
		<Route path="/work" component={Work}/>
	</Route>
);
