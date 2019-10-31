import React from "react";

// import cards from "../.././cards.json";
let randomCards=cards

  class Cards extends Component {
    state ={
      randomCardsArray:randomCards,
    }
    componentDidMount() {
      this.handleRandom();
    }
  ShuffleCards = ()=>{ 
      let randomCardsArray=[]
      let randomCards = cards.slice(0)
      for (let i = 0; i < cards.length; i++) {  
      let randomNumber = Math.floor(Math.random() * (i + 1))
      let temp= randomCards[i]
      randomCards[i] = randomCards[randomNumber]
      randomCards[randomNumber] = temp
      }
    console.log("randomized ",randomCards);
    randomCardsArray.push(randomCards)
    this.setState({
      randomCardsArray:randomCards,
    });
      console.log(randomCardsArray)
  }
  render() {
    return (
     <div>
     </div>
    )
  };
  }
  export default ShuffleCards;