import React, {Component} from "react";
import deckJson from "../../cards.json";

class DeckBrain extends Component {
  state = {
    deck: [],
    hand: [],
    discard: [],
  };
  componentWillMount = () => {
     const shuffledDeck = this.shuffleCards(deckJson)
     this.setState({
         deck: shuffledDeck
     })
     console.log(this.state.deck)
  }
  componentDidMount = () => {
    this.drawcards()
  }

  drawcards = () => {
    let tempDeck = [...this.state.deck];
    const tempHand = [...this.state.hand];
    let tempDiscard = [...this.state.discard];
    while (tempHand.length < 5) {
      if (tempDeck.length === 0 || tempDeck.length === 1) {
        // When the deck is empty or near empty, shuffle the discard, and then add it to the deck
        const shuffled = this.shuffleCards(tempDiscard);
        tempDeck = [...tempDeck, ...shuffled.splice(0)];
        let tempDiscard = shuffled;
      }
      let tempCard = tempDeck.shift();
      tempHand.push(tempCard);
    }
    this.setState({
      hand: tempHand,
      deck: tempDeck,
      discard: tempDiscard
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


}


export default DeckBrain;
