import React, { Component } from "react";
import validator from "validator";
var validator = require("validator");

import "./SignUp.css";
export class SignUp extends Component {
	state = {
		// firstName: "",
		// lastName: "",
		// email: "",
		password: "",
		confirmPassword: "",
		isError: false,
		errorMessage: "",
	};

	handleSignup = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleOnPasswordChange = (event) => {
		this.setState(
			{
				[event.target.name]: event.target.value,
			},
			() => {
				if (this.state.password !== this.state.confirmPassword) {
					this.setState({
						isError: true,
						errorMessage: "Your password does not match!",
					});
				} else {
					this.setState({
						isError: false,
						errorMessage: "",
					});
				}
			}
		);
	};

	handleOnSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
	};

	render() {
		const {
			firstName,
			lastName,
			email,
			password,
			confirmPassword,
			isError,
		} = this.state;
		return (
			<div className="form-body">
				<main className="form-signin">
					{isError && (
						<div className="alert alert-danger">
							{this.state.errorMessage}
						</div>
					)}
					<form onSubmit={this.handleOnSubmit}>
						<h1 className="h3 mb-3 fw-normal">Please sign up</h1>
						{/* <label htmlFor="inputFirstName" className="visually-hidden">
              First Name
            </label>
            <input
              type="text"
              id="inputFirstName"
              className="form-control"
              placeholder="First Name"
              required
              autoFocus
              name="firstName"
              value={firstName}
              onChange={this.handleSignup}
            />
            <label htmlFor="inputLastName" className="visually-hidden">
              Last Name
            </label>
            <input
              type="text"
              id="inputLastName"
              className="form-control"
              placeholder="Last Name"
              required
              autoFocus
              name="lastName"
              value={lastName}
              onChange={this.handleSignup}
            />
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
              name="email"
              value={email}
              onChange={this.handleSignup}
            /> */}
						<label
							htmlFor="inputPassword"
							className="visually-hidden"
						>
							Password
						</label>
						<input
							//type="password"
							type="text"
							id="inputPassword"
							className="form-control"
							placeholder="Password"
							required
							name="password"
							value={password}
							onChange={this.handleOnPasswordChange}
						/>
						<label
							htmlFor="inputConfirmPassword"
							className="visually-hidden"
						>
							Confirm Password
						</label>
						<input
							//type="password"
							type="text"
							id="inputConfirmPassword"
							className="form-control"
							placeholder="Confirm Password"
							required
							name="confirmPassword"
							value={confirmPassword}
							onChange={this.handleOnPasswordChange}
						/>
						<button
							className="w-100 btn btn-lg btn-primary"
							type="submit"
						>
							Sign up
						</button>
					</form>
				</main>
				;
			</div>
		);
	}
}
export default SignUp;
