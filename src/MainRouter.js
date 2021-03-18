import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { Home } from "./component/Home";
import { Login } from "./component/Login/Login";
import { SignUp } from "./component/SignUp/SignUp";
import { AuthMovieHome } from "./component/AuthMovieHome/AuthMovieHome";

import Navbar from "./component/Navbar/Navbar";

const MainRouter = (props) => {
	console.log(props);
	return (
		<div>
			<Router>
				{/* <Route exact path="/" component={Home} />
				<Route exact path="/sign-up" component={SignUp} /> */}
				<Navbar user={props.user} />
				<Switch>
					<Route path="/movie-home" component={AuthMovieHome} />

					<Route path="/sign-up/" component={SignUp} />
					<Route
						path="/login/"
						// component={Login}
						render={(routerProps) => (
							<Login
								{...routerProps}
								handleUserLogin={props.handleUserLogin}
							/>
						)}
					/>

					<Route path="/" component={Home} />
				</Switch>
			</Router>
		</div>
	);
};

export default MainRouter;
