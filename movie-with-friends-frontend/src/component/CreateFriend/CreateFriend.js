import React, { Component } from "react";

export class CreateFriend extends Component {
  state = {
    firstName: "",
    lastName: "",
    friendMobileNumber: "",
    nickName: "",
    isError: false,
    errorObj: {},
  };

  handleCreateFriend = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
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
    const {
      firstName,
      lastName,
      friendMobileNumber,
      nickName,
      isError,
    } = this.state;

    return (
      <div className="form-body">
        <main className="form-signin">
          {isError && this.showErrorMessageObj()}

          <form onSubmit={this.handleOnSubmit}>
            <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
            <label htmlFor="inputFirstName" className="visually-hidden">
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
              onChange={this.handleCreateFriend}
              pattern="[A-Za-z]*"
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
              onChange={this.handleCreateFriend}
              pattern="[A-Za-z]*"
            />

            <label htmlFor="inputNickname" className="visually-hidden">
              Nickname
            </label>
            <input
              type="text"
              id="inputNickname"
              className="form-control"
              placeholder="Nickname"
              required
              autoFocus
              name="nickName"
              value={nickName}
              onChange={this.handleCreateFriend}
              pattern="[A-Za-z]*"
            />

            <label
              htmlFor="inputFriendMobileNumber"
              className="visually-hidden"
            >
              Mobile Number
            </label>
            <input
              type="text"
              id="inputFriendMobileNumber"
              className="form-control"
              placeholder="Friend Mobile Number"
              required
              autoFocus
              name="friendMobileNumber"
              value={friendMobileNumber}
              onChange={this.handleCreateFriend}
              pattern="[A-Za-z]*"
            />

            <button
              className="w-100 btn btn-lg btn-primary"
              type="submit"
              disabled={isError ? true : false}
            >
              Create Friend
            </button>
          </form>
        </main>
        ;
      </div>
    );
  }
}

export default CreateFriend;
