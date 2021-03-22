import React, { Component } from "react";
import MainRouter from "./MainRouter";
import { ToastContainer, toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";
export class App extends Component {
	state = {
		user: null,
	};

	componentDidMount() {
		let getJWToken = localStorage.getItem("jwtToken");

		console.log(getJWToken);
		if (getJWToken) {
			const currentTime = Date.now() / 1000;
			console.log(currentTime);
			let decodedJWToken = jwtDecode(getJWToken);
			console.log(decodedJWToken);

			// if(currentTime > decodedJWToken.exp){}
			if (decodedJWToken.exp < currentTime) {
				this.handleUserLogout();
			} else {
				this.handleUserLogin(decodedJwtToken);
			}
		}
	}

	handleUserLogout = () => {
		this.setState({
			user: null,
		});
	};

	handleUserLogin = (user) => {
		this.setState({
			user: {
				email: user.email,
			},
		});
	};
	render() {
		return (
			<>
				<ToastContainer />
				<MainRouter
					user={this.state.user}
					handleUserLogin={this.handleUserLogin}
					handleUserLogout={this.handleUserLogout}
				/>
			</>
		);
	}
}
// Only one Export Default for each file
export default App;
