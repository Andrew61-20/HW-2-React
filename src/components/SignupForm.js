import React, { Component } from "react";

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  password: ''
};

export default class SignupForm extends Component {
  state = { ...INITIAL_STATE   };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, email, phone, password } = this.state;

    return (
    <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          placeholder="Password"
        />
        <br />
        <button>Sign in</button>
        <br />
        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Name"
        />
        <br />
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        <br />
        <input
          type="number"
          name="phone"
          value={phone}
          onChange={this.handleChange}
          placeholder="Phone"
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          placeholder="Password"
        />
        <br />
         <button>Signup as {name}</button>
      </form>
    )}
  }