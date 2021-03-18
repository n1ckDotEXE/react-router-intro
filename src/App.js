import React, { Component } from "react";
import MainRouter from "./MainRouter";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
export class App extends Component {
	state = {
		user: null,
	};

	handleUserLogin = (user) => {
		console.log(13, "from app");
		console.log(user);
	};
	render() {
		return (
			<>
				<ToastContainer />
				<MainRouter
					user={this.state.user}
					handleUserLogin={this.state.handleUserLogin}
				/>
			</>
		);
	}
}
// Only one Export Default for each file
export default App;
