import React from 'react';
import RegistrationLayout from './Layout/RegistrationLayout';
import UserDashboardLayout from './Layout/UserDashboardLayout';
import './App.css';

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoggedIn: false,
			userType: "user",
			userID: ""
		}
		this.signIn = this.signIn.bind(this);
	}

	render() {
		return (
			<div className="app">
				{!this.state.isLoggedIn ?
					<RegistrationLayout handleLogin={this.signIn}/> :
					this.getDashboard()}
			</div>
		);
	}

	getDashboard() {
		if (this.state.userType === "user") {
			return <UserDashboardLayout userID={this.state.userID}/>;
		}
	}

	signIn() {
		this.setState({
			isLoggedIn: true
		})
	}
}
