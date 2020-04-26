import React from 'react';
import RegistrationLayout from './Layout/RegistrationLayout';
import UserDashboardLayout from './Layout/UserDashboardLayout';
import './App.css';
import DriverDashboard from './Layout/DriverDashboard';

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoggedIn: true,
			userType: "driver",
			userID: "5ea56278cf0ac452a58090a5"
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
		if (this.state.userType === "driver") {
			return <DriverDashboard userID={this.state.userID}/>
		}
	}

	signIn() {
		this.setState({
			isLoggedIn: true
		})
	}
}
