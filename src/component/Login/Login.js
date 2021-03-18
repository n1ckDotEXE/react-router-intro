import React, { Component } from "react";
import axios from "axios";
export class Login extends Component {
	state = {
		email: "",
		password: "",
	};
	handleLogin = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};
	handleLoginSubmit = async (event) => {
		event.preventDefault();
		try {
			let result = axios.post("http://localhost:3001/users/login", {
				email: this.state.email,
				password: this.state.password,
			});
			console.log(result);
		} catch (e) {
			console.log(e.response.data);
		}
	};
	render() {
		const { email, password } = this.state;
		return (
			<div className="form-body">
				<main className="form-signin">
					<form onSubmit={this.handleLoginSubmit}>
						<h1 className="h3 mb-3 fw-normal">Please login</h1>
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
							onChange={this.handleLogin}
						/>
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
							onChange={this.handleLogin}
						/>
						<button
							className="w-100 btn btn-lg btn-primary"
							type="submit"
						>
							Login
						</button>
					</form>
				</main>
			</div>
		);
	}
}
export default Login;
