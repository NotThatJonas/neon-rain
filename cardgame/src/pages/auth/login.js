import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      username: this.state.username,
      password: this.state.password
    };

    Axios.post("/api/users/login", userData)
      .then(data => {
        console.log(data);
        this.props.history.push("/battlepage");
      })
      .catch(err => {
        console.log(err);
      });

    console.log(userData);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="nes-field is-inline col s12">
                <label htmlFor="username">Username</label>
                <input
                  error={errors.username}
                  value={this.state.username}
                  onChange={this.onChange}
                  type="username"
                  id="username"
                  className="nes-input"
                />
              </div>
              <div className="nes-field is-inline col s12">
                <label htmlFor="password">Password</label>
                <input
                  className="nes-input"
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  type="submit"
                  className="btn nes-pointer neon1 mb-3 nes-btn"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
