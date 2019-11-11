import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./style.css";
import DrawBrain from "../../components/drawCards";
import { booleanLiteral } from "@babel/types";
import { Redirect } from 'react-router-dom'

class Save extends Component {

  constructor() {
    super();
    this.state = {
      username: "",
      userDeck: [],
      winCount: 0,
      deckDrawn: false
    };

  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

drawn = (p) => {
  if(p){
    this.setState({
      deckDrawn:true
    })
  }
}

renderRedirect = () => {
  if (this.state.redirect) {
    return <Redirect to='/battlepage' />
  }
}

// onSubmit = e => {
//     e.preventDefault();

// const userDeck = {
//       username: this.state.username,
//       userDeck: this.state.userDeck,
//       winCount: this.state.winCount
//     };
//     Axios.post("/gamestate", userDeck).then(data => {
//       console.log(data);
//       this.props.history.push("/battlepage")
//     }).catch (err=> {
//       console.log(err);    
//     })
// console.log(userDeck);
//   };








render() {
    if(this.state.deckDrawn){
    return (
      
      <div>
        
      <div className="d-flex carddeck justify-content-center" >
          
          {this.state.userTurnOver ? "true" : "false"}
          <br></br>

          <br></br>
        
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
    )
    }
    else {
      return (
        <DrawBrain readPlayed={this.handlePlayedCards} 
          drawn = {this.drawn}
          />
  
    )
  }
}
}

export default Save;


