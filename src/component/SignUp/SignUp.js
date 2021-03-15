import React, { Component } from "react";
import "./SignUp.css";
export class SignUp extends Component {
	render() {
		return (
			<div className="form-body">
				<main className="form-signin">
					<form>
						<h1 className="h3 mb-3 fw-normal">Please sign in</h1>
						<label htmlFor="inputEmail" className="visually-hidden">
							Email address
						</label>
						<input
							type="email"
							id="inputEmail"
							className="form-control"
							placeholder="Email address"
							required
							autoFocus
						/>
						<label
							htmlFor="inputPassword"
							className="visually-hidden"
						>
							Password
						</label>
						<input
							type="password"
							id="inputPassword"
							className="form-control"
							placeholder="Password"
							required
						/>
						<button
							className="w-100 btn btn-lg btn-primary"
							type="submit"
						>
							Sign in
						</button>
					</form>
				</main>
				;
			</div>
		);
	}
}
export default SignUp;
