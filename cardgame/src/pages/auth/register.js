import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./style.css";

class Register extends Component {
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
const newUser = {
      username: this.state.username,
      password: this.state.password,
    };
console.log(newUser);
Axios.post("/api/users/register", newUser).then(data => {
  console.log(data);
  this.props.history.push("/battlepage")
}).catch (err=> {
  console.log(err);
  alert("Username already exists or password could not be validated")
  
})

  };
render() {
    const { errors } = this.state;
return (
      <div className="container inputS">
        <div className="landing3">
          <div className="home-wrap3">
            <div className="home-inner3"></div>
          </div>
        </div>
        <div className="nes-container is-rounded is-dark">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link className="register" to="/login">Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="nes-field is-inline col s12">
                <label htmlFor="username">Username</label>
                <input
                  onChange={this.onChange}
                  value={this.state.username}
                  error={errors.username}
                  id="username"
                  type="text"
                  className="nes-input nes-pointer neon1"
                />
              </div>
              <div className="nes-field is-inline col s12">
                <label htmlFor="password">Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className="nes-input nes-pointer neon1"
                />
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  type="submit"
                  className="loginBtn nes-pointer neon1 mb-3 nes-btn"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
export default Register;


