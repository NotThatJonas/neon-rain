import React, { Component } from "react";
import "./style.css";
import PlayArea from "../../components/playArea"
import Cards from "../../components/cards"
import card from "../../cards.json"
import DeckBrain from "../../components/deck-managment"
class BattlePage extends Component {

    render() {
     
        return (
            <div className= "d-flex justify-content-center">
            <DeckBrain/>
            </div>
        )}

}

export default BattlePage;