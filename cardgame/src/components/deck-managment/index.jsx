import React, { Component } from "react";
import deckJson from "../../cards.json";
import Cards from "../cards";
import newCards from "../../newCards.json"
import PlayArea from "../../components/playArea";
import style from "./style.css";
class DeckBrain extends Component {
  state = {
    deck: [],
    hand: [],
    discard: [],
    playArea: [],
    newCards:[],
    turnEnded: false
  };

  componentWillMount() {
    const shuffledDeck = this.shuffleCards(deckJson);
    console.log(shuffledDeck);
const newCardsShuffled=this.shuffleCards(newCards);
console.log(newCardsShuffled);

    this.setState(
      {
        deck: shuffledDeck,
        newCards: newCardsShuffled
      },
      this.drawCards
    );
  }




  

  componentDidUpdate(prevprops, prevState) {
    const turnEnded = this.state.turnEnded !== prevState.turnEnded;

    if (turnEnded) {
      this.props.readPlayed(this.state.playArea);
      this.discardPlayed();
    }
  }

  toPlay = index => {
    if (this.state.playArea.length < 2) {
      // console.log(this.state.hand);

      let card = this.state.hand[index];
      let tempHand = this.state.hand;
      let tempPlay = this.state.playArea;
      tempPlay.push(card);
      tempHand.splice(index, 1);

      this.setState({
        hand: tempHand,
        playArea: tempPlay
      });
    } else {
      alert("exceeded play limit");
    }
  };

  discardPlayed = () => {
    let tempDiscard = [...this.state.playArea, ...this.state.discard];
    console.log("playArea", this.state.playArea);
    this.setState({
      discard: tempDiscard,
      playArea: []
    }, this.drawCards);
  };

  drawCards = () => {
    let tempDeck = [...this.state.deck];
    const tempHand = [...this.state.hand];
    let tempDiscard = [...this.state.discard];
    while (tempHand.length < 5) {
      if (tempDeck.length <= 1) {
        // When the deck is empty or near empty, shuffle the discard, and then add it to the deck
        let shuffled = this.shuffleCards(tempDiscard);
        tempDeck = [...tempDeck, ...shuffled.splice(0)];
        tempDiscard = shuffled;
        this.setState({
          discard: tempDiscard
        });
      }
      let tempCard = tempDeck.shift();
      tempHand.push(tempCard);
    }
    console.log(tempHand);

    this.setState({
      hand: tempHand,
      deck: tempDeck
    });
  };

  endTurn = () => {
    let turn = !this.state.turnEnded
    console.log("ending turn");
    this.setState({
      turnEnded: turn
    });
  };

  toHand = (index) => {
    let tempHand = this.state.hand;
    let card = this.state.playArea[index];
    let tempPlay = this.state.playArea;
    tempHand.push(card);
    tempPlay.splice(index, 1);

    this.setState({
      hand: tempHand,
      playArea: tempPlay
    });
  };

  shuffleCards = (cards) => {
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
    let hand = this.state.hand.map((card, index) => {
      return (
        <div className="handCard row1 d-flex justify-content-center">
          <Cards
            name={card.name}
            image={card.image}
            text={card.text}
            handleClick={this.toPlay}
            currentIndex={index}
          />
        </div>
      );
    });

    let playArea = this.state.playArea.map((card, index) => {
      return (
        <div className="playCard row2 d-flex justify-content-center">
          <Cards
            name={card.name}
            image={card.image}
            text={card.text}
            handleClick={this.toHand}
            currentIndex={index}
          />
        </div>
      );
    });

    return (
      // <div className="nes-container decks is-rounded">
        <div id="gameArea stuffs">
          <div className="row d-flex justify-content-center">
            <button
              className="nes-pointer endTurn neon4 mb-3 nes-btn"
              onClick={this.endTurn}
            >
              End Turn
            </button>
          </div>
          <div className="playArea">{playArea.length ? playArea : null}</div>
          <div className="handArea no-gutters">{hand.length ? hand : null}</div>
        </div>
      // </div>
    );
  }
}
export default DeckBrain;
