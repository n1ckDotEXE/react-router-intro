import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	NavLink,
} from "react-router-dom";

import { Home } from "./component/Home";
import { Login } from "./component/Login";
import { SignUp } from "./component/SignUp";
export class App extends Component {
	render() {
		return (
			<Router>
				{/* <Route exact path="/" component={Home} />
				<Route exact path="/sign-up" component={SignUp} /> */}
				<nav>
					<NavLink exact activeStyle={{ color: "red" }} to="/">
						Home
					</NavLink>
					<NavLink activeStyle={{ color: "red" }} to="/sign-up">
						Sign Up
					</NavLink>
					<NavLink activeStyle={{ color: "red" }} to="/login">
						Login
					</NavLink>
				</nav>

				<Switch>
					<Route path="/sign-up" component={SignUp} />
					<Route path="/login" component={Login} />
					<Route path="/" component={Home} />
				</Switch>
			</Router>
		);
	}
}

export default App;
