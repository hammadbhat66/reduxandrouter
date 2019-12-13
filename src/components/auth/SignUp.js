import React, { Component } from "react";

class SingUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstname: "",
      lastname: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <p>email:{this.state.email}</p>
          <h5>Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}></input>
            <br />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
            ></input>
            <br />
            <label htmlFor="firstname">FirstName</label>
            <input
              type="text"
              id="firstname"
              onChange={this.handleChange}
            ></input>
            <br />
            <label htmlFor="lastname">LastName</label>
            <input
              type="text"
              id="lastname"
              onChange={this.handleChange}
            ></input>
            <br />
            <button>Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SingUp;
