import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from 'kingdoms/App';
import Login from 'kingdoms/Login';
import Logout from 'kingdoms/Logout';
import Signup from 'kingdoms/Signup';
import Home from 'kingdoms/Home';
import Privacy from 'kingdoms/Privacy';
import Terms from 'kingdoms/Terms';
import Jobs from 'kingdoms/Jobs';
import Video from 'kingdoms/Video';
import Profile from 'kingdoms/Profile';
import Oops from 'kingdoms/Oops';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="login" component={Login}/>
		<Route path="logout" component={Logout}/>
		<Route path="signup" component={Signup}/>
		<Route path="home" component={Home}/>
		<Route path="privacy" component={Privacy}/>
		<Route path="terms" component={Terms}/>
		<Route path="jobs" component={Jobs}/>
		<Route path="video">
			<IndexRoute component={Video}/>
			<Route path=":videoId" component={Video}/>
		</Route>
		<Route path="profile">
			<IndexRoute component={Profile} />
			<Route path=":userId" component={Profile} />
		</Route>
		<Route path="*" component={Oops}/>
	</Route>
);
