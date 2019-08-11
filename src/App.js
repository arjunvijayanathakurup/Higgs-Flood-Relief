import React  from 'react';
import axios from 'axios';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import VolunteerRegistration from './components/volunteer/VolunteerRegistration';
import Rescueneeded from './components/rescuneeded/Rescueneeded';
import './App.css';

function App(){
	return(
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route  path='/volunteer' component = {VolunteerRegistration} />
					<Route  path='/rescue' component = {Rescueneeded} />

				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App;
