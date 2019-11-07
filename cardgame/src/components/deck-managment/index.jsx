import React, { Component } from "react";
import deckJson from "../../cards.json";
import Cards from "../cards";
import PlayArea from "../../components/playArea";
import style from "./style.css";
class DeckBrain extends Component {
  state = {
    deck: [],
    hand: [],
    discard: [],
    playArea: []
  };
  componentWillMount = () => {
    const shuffledDeck = this.shuffleCards(deckJson);
    console.log(shuffledDeck);

    this.setState(
      {
        deck: shuffledDeck
      },
      this.drawCards
    );
  };

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
    let tempDiscard = [...this.state.playArea,...this.state.discard]
    this.setState({
      discard: tempDiscard,
      playArea: []
    });
  };

  drawCards = () => {
    console.log(this.state.deck);
    let tempDeck = [...this.state.deck];
    const tempHand = [...this.state.hand];
    let tempDiscard = [...this.state.discard];
    while (tempHand.length < 5) {
      if (tempDeck.length <= 1) {
        // When the deck is empty or near empty, shuffle the discard, and then add it to the deck
        debugger;
        const shuffled = this.shuffleCards(tempDiscard);
        tempDeck = [...tempDeck, ...shuffled.splice(0)];
        let tempDiscard = shuffled;
      }
      let tempCard = tempDeck.shift();
      tempHand.push(tempCard);
    }
    console.log(tempHand);

    this.setState({
      hand: tempHand,
      deck: tempDeck,
      discard: tempDiscard
    });
  };




  toHand = (index) => {
    let tempHand = this.state.hand
    let card = this.state.playArea[index]
    let tempPlay =this.state.playArea
    tempHand.push(card)
    tempPlay.splice(index, 1)
  
    this.setState({
      hand: tempHand,
      playArea: tempPlay
    });
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
  // console.log(this.state.deck)
  render() {
    return (
      <div>
          {/* this is where the selected cards go */}
          <div className="playArea ">
            {this.state.playArea.length > 0 ? (
              <div className="playCard1">
                {
                  <Cards
                    name={this.state.playArea[0].name}
                    image={this.state.playArea[0].image}
                    text={this.state.playArea[0].text}
                    handleClick={this.toHand}
                    currentIndex={0}
                  />
                }
              </div>
            ) : null}

            {this.state.playArea.length > 1 ? (
              <div className=" playCard2">
                {
                  <Cards
                    name={this.state.playArea[1].name}
                    image={this.state.playArea[1].image}
                    text={this.state.playArea[1].text}
                    handleClick={this.toHand}
                    currentIndex={1}
                    
                  />
                }
              </div>
            ) : null}
          </div>
        {/* End of selected cards */}
          <div>
            {this.state.hand.length >= 3 ? (
              <div className="row d-flex justify-content-center">
                {this.state.hand.map((card, index) => (
                  <Cards
                    name={card.name}
                    image={card.image}
                    text={card.text}
                    handleClick={this.toPlay}
                    currentIndex={index}
                    colSize={2}
                  />
                ))}
              </div>
            ) : null}
          </div>
          <button onClick= {()=>this.props.readPlayed(this.state.playArea)}>
  End Turn
</button>
      </div>
    );
  }
}

export default DeckBrain;
