import React from "react";

import cards from "../.././cards.json";

console.log(cards);



handleRandom = ()=>{ 

  state ={
      randomCards:randomCardsArray,
     
    }



    
    let randomCardsArray=[]
    const randomCards = cards.slice(0)
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
  
  return(
    console.log(cards)
  
  )
}

export default handleRandom;


