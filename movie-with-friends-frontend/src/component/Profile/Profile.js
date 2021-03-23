import React, { Component } from "react";
import { debounce } from "lodash";

export class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isError: false,
			password: "",
			confirmPassword: "",
			errorObj: {},
		};
		this.onChangeDebounce = debounce(this.onChangeDebounce, 1000);
	}
	handleOnSubmit = (e) => {
		e.preventDefault();
	};
	onChangeDebounce = () => {
		let errorObj = {};
		if (this.state.password !== this.state.confirmPassword) {
			errorObj.checkConfirmPassword =
				"Sorry, Your password does not match!";
		}
		// if (!isStrongPassword(this.state.password)) {
		//   errorObj.checkPasswordStrength =
		//     "Password must be 8 characters long + 1 uppercase + 1 lowercase + special characters !@#$%^&*()";
		// }
		if (Object.keys(errorObj).length > 0) {
			this.setState({
				isError: true,
				errorObj: errorObj,
			});
		} else {
			this.setState({
				isError: false,
				errorObj: {},
			});
		}
	};
	handleOnPasswordChange = (event) => {
		this.setState(
			{
				[event.target.name]: event.target.value,
			},
			() => {
				this.onChangeDebounce();
			}
		);
	};
	showErrorMessageObj = () => {
		let errorMessageArray = Object.values(this.state.errorObj);
		return errorMessageArray.map((errorMessage, index) => {
			return (
				<div key={index} className="alert alert-danger">
					{errorMessage}
				</div>
			);
		});
	};
	render() {
		const { password, confirmPassword, isError } = this.state;
		return (
			<div className="form-body">
				<main className="form-signin">
					{isError && this.showErrorMessageObj()}
					<form onSubmit={this.handleOnSubmit}>
						<h1 className="h3 mb-3 fw-normal">
							Change Your Password
						</h1>
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
							disabled={isError ? true : false}
						>
							Change Password
						</button>
					</form>
				</main>
				;
			</div>
		);
	}
}
export default Profile;
