import React, { Component } from "react";
import "./style.css";
import PlayArea from "../../components/playArea"
import Cards from "../../components/cards"
import card from "../../cards.json"
import DeckBrain from "../../components/deck-managment"
class BattlePage extends Component {

    render() {
     
        return (
     <div>
        <div className="landing2">
          <div className="home-wrap2">
            <div className="home-inner2"></div>
          </div>
        </div>
            <div className= "d-flex carddeck justify-content-center">
            <DeckBrain/>
            </div>
      </div>
        )}

}

export default BattlePage;