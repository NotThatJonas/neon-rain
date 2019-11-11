import React, { Component } from "react";
import "./style.css";

class Leaderboards extends Component {
  render() {
    return (
      <div>
        <div className="landing1">
          <div className="home-wrap1">
            <div className="home-inner1"></div>
          </div>
        </div>
          <div className="container">
            <div>
              <h1 className="neon3 head">Rules</h1>
            </div>
            <br></br>
            <div className=" neon2 nes">
              
              <h1 style="text0ali"> Neon Rain</h1>
              <br></br>
            <p>Choose the 2 cards you want to play but be careful of play order, each card will move into the play area, the left most card will trigger first</p>
            <br></br>
              <p>Once you have chosen both cards, click the end turn button, but beware after your done with your turn the enemey will go</p>
            </div>
          </div>
      </div>
    );
  }
}

export default Leaderboards;
