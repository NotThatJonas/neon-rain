import React, {Component} from "react";
import deckJson from "../../cards.json";
import Cards from "../cards"
class DeckBrain extends Component {
  state = {
    deck: [],
    hand: [],
    discard: [],
    playArea: []
  };
  componentWillMount = () => {
     const shuffledDeck = this.shuffleCards(deckJson)
     console.log(shuffledDeck)
     this.setState({
         deck: shuffledDeck
     })
  }
  componentDidMount = () => {
    this.drawcards()
    
  }




  drawcards = () => {
    console.log(this.state.deck)
    let tempDeck = [...this.state.deck];
    const tempHand = [...this.state.hand];
    let tempDiscard = [...this.state.discard];
    while (tempHand.length < 5) {
      if (tempDeck.length   <= 1) {
        // When the deck is empty or near empty, shuffle the discard, and then add it to the deck
        debugger
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





}

toPlayArea = (index) => {
  if(playArea<2){
  let card = this.state.hand[index]
  let tempArray = tempArray.push(card)
  let tempHand = this.state.hand
  tempHand.splice(index, 1)
  this.setState({
    playArea: tempArray,
    hand: tempHand
  })
  }else {
    alert("you may only play 2 cards per turn!")
  }
}
render() {
  return(
    <div>
      {/* {this.state.hand?this.state.hand.map(cardObj=><Card/>):<Loading/>} */}
      {/* <Cards image ={this.state.hand[0].image} 
             name = {this.state.hand[0].name} 
             text = {this.state.hand[0].text} /> */}
             <Card onCLick= {this.toPlayArea(0)}/>
    </div>
  )
}
};
export default DeckBrain;
