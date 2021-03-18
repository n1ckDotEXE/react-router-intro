import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { Home } from "./component/Home";
import { Login } from "./component/Login/Login";
import { SignUp } from "./component/SignUp/SignUp";

import Navbar from "./component/Navbar/Navbar";

const MainRouter = () => {
	return (
		<div>
			<Router>
				{/* <Route exact path="/" component={Home} />
				<Route exact path="/sign-up" component={SignUp} /> */}
				<Navbar />
				<Switch>
					<Route path="/sign-up/" component={SignUp} />
					<Route path="/login/" component={Login} />

					<Route path="/" component={Home} />
				</Switch>
			</Router>
		</div>
	);
};

export default MainRouter;
