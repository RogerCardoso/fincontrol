import React, { Component } from 'react';

import './fincontrol.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import logo from './logo.svg';

import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import AccountPage from './pages/account/account.component';
import SignOrRegisterPage from './pages/sign-in/sign-in.component';
import { auth } from './firebase/firebase.utils'; 

import HOMEPAGE_DATA from './pages/homepage/homepage.data';

class FinControl extends Component {
	constructor(props) {
		super(props);

		this.state = HOMEPAGE_DATA;
		this.state.currentUser = null;
	}

	componentDidMount() {
		auth.onAuthStateChanged(user => {
			this.setState({ currentUser: user });

			console.log(user);
		})
	}

	render() {
		return(
			<Router>
				<Route 
					exact
					path='/sign-in' 
					render={(props) => <SignOrRegisterPage />}
				/>
				<Route
					exact
					path='/account' 
					render={(props) => <AccountPage />}
				/>
				<Route
					path='/' 
					render={(props) => <HomePage bills={ this.state.bills } payday={ this.state.payday } />}
				/>
			</Router>
		)
	}
}

export default FinControl;
