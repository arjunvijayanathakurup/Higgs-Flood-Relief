import React  from 'react';
import axios from 'axios';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import VolunteerRegistration from './components/volunteer/VolunteerRegistration';
import Rescueneeded from './components/rescuneeded/Rescueneeded';
import NewAnnouncment from './components/announcment/NewAnnouncment';
import Home from './components/home/Home';
import About from './components/home/About';
import './App.css';
import Signin from './components/auth/Signin';
import Admin from './components/admin/Admin';
import Help from './components/help/Help';
import dashboard from './components/dashboard/dashboard';
import add_police from './components/add_data/add_police';
import add_hospital from './components/add_data/add_hospital';
import add_camp from './components/add_data/add_camp';
import {AuthProvider} from './auth';
import PrivateRoute from './components/admin/PrivateRoute';

function App(){
	return(
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route  exact path='/' component = {Home} />
					<Route  path='/volunteer' component = {VolunteerRegistration} />
					<Route  path='/rescue' component = {Rescueneeded} />
					<Route  path='/about' component = {About} />
					<Route  path='/newannouncement' component = {NewAnnouncment} />
					<Route  path='/helpneeded' component = {Help} />
					<Route 	path='/dashboard' component={dashboard} />
					<Route 	path='/add_police' component={add_police} />
					<Route 	path='/add_hospital' component={add_hospital} />
					<Route 	path='/add_camp' component={add_camp} />
					<AuthProvider>
						<Route  path='/signin' component = {Signin} />
						<PrivateRoute 	exact path='/admin' component={Admin} />
					</AuthProvider>
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App;
