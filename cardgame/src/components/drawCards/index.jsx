import React, { Component } from "react";
import deckJson from "../../cards.json";
import Cards from "../cards";
import newCardsFromJson from "../../newCards.json";
import PlayArea from "../playArea";
import style from "./style.css";
class DrawBrain extends Component {
  state = {
    newCards: [],
    tempHand: [],
    newDrawnCards: [],
    drawArea: [],
    turnEnded: false,
    finalNewCards:[],
    deckBuilt: false
  };

  componentDidMount() {
    const newCardsShuffled = this.shuffleCards(newCardsFromJson);
    console.log(newCardsShuffled);

    this.setState(
      {
        newCards: newCardsShuffled
      },
      this.drawNewCards
    )
  }

  drawNewCards = () => {

    let tempDeck = [...this.state.newCards];
    const tempDraw = [];
    const shuffledDeck = [...this.shuffleCards(tempDeck)]
    console.log(tempDeck)
    while (tempDraw.length < 3) {
      console.log("draws",tempDraw);
      let tempCard = shuffledDeck.shift();
      tempDraw.push(tempCard);
    }
    this.setState({
      newDrawnCards: tempDraw
    });
  
  };
 
  toDraw = index => {
    // console.log(this.state.hand);

    let card = this.state.newDrawnCards[index];

    let tempNewDeck = this.state.finalNewCards;
    tempNewDeck.push(card);

    this.setState({
     finalNewCards: tempNewDeck
    }, this.drawNewCards);
    if(this.state.finalNewCards.length === 3){
     this.props.drawn(true)
     
    }
    
  };

  shuffleCards = cards => {
    let randomCardsArray = [];
    let originalCards = cards.slice(0);

    while (originalCards.length) {
      let randomNumber = Math.floor(Math.random() * originalCards.length);
      let card = originalCards.splice(randomNumber, 1)[0];
      randomCardsArray.push(card);
    }
    return randomCardsArray;
  };

  render() {
    let newDrawnCards = this.state.newDrawnCards.map((card, index) => {
      return (
        <div className="handCard row d-flex justify-content-center">
          <Cards
            name={card.name}
            image={card.image}
            text={card.text}
            handleClick={this.toDraw}
            currentIndex={index}
          />
        </div>
      );
    });

    return (
      // <div className="nes-container decks is-rounded">
      <div id="gameArea">
        <div className="row d-flex justify-content-center"></div>

        <div className="handArea">
          {newDrawnCards.length ? newDrawnCards : null}
        </div>
      </div>
      // </div>
    );
  }
}
export default DrawBrain;
