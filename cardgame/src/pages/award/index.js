import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

class Award extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      userDeck: []
    };

  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

onSubmit = e => {
    e.preventDefault();

const userDeck = {
      username: this.state.username,
      userDeck: this.state.userDeck
    };

    Axios.post("/api/users/gamestate", userDeck).then(data => {
      console.log(data);
      this.props.history.push("/battlepage")
    }).catch (err=> {
      console.log(err);
      
    })

console.log(userDeck);
  };


render() {

    return (
      
      <div>
        <div className="landing">
          <div className="home-wrap">
            <div className="home-inner"></div>
          </div>
        </div>

        <div className="caption text-center nes-pointer">
          <Link to="/">
          <button type="button" className="btn nes-pointer neon1 mb-3 nes-btn">
            Save &amp; Quit
          </button>
          </Link>
          <Link to="/battlepage">
          <button type="button" className="btn mb-3 neon1 nes-pointer nes-btn">
            Save &amp; Continue
          </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Award;