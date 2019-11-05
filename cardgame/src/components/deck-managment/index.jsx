import React, { Component } from "react";
import deckJson from "../../cards.json";
import Cards from "../cards";
import PlayArea from "../../components/playArea";
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
      this.drawcards
    );
  };
  componentDidMount = () => {};

  drawcards = () => {
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
        <div className="row">
          <div className="col-md-12">
            <PlayArea />
          </div>
        </div>

        <div className="row">
         
            {this.state.hand.length > 0 ? (
              <div className= "d-flex justify-content-center">
                <Cards
                  name={this.state.hand[0].name}
                  image={this.state.hand[0].image}
                  text={this.state.hand[0].text}
                />
                <Cards
                  name={this.state.hand[1].name}
                  image={this.state.hand[1].image}
                  text={this.state.hand[1].text}
                />
                <Cards
                  name={this.state.hand[2].name}
                  image={this.state.hand[2].image}
                  text={this.state.hand[2].text}
                />
                <Cards
                  name={this.state.hand[3].name}
                  image={this.state.hand[3].image}
                  text={this.state.hand[3].text}
                />
                <Cards
                  name={this.state.hand[4].name}
                  image={this.state.hand[4].image}
                  text={this.state.hand[4].text}
                />
              </div>
            ) : (
              <h3>Loading.....</h3>
            )}
        
        </div>
      </div>
    );
  }
}
export default DeckBrain;
