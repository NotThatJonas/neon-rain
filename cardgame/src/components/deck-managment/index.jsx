import React from 'react'
import deck from "../../cards.json"

class DeckBrain extends Component {
    state = {
        deck: [],
        hand: [],
        discard: [],
        randomCardsArray: RandomCards

    }

    drawcards = cards =>{

       while(this.hand.length < 5){
        if(this.deck.length === 0 || this.deck.length === 1){
            refillDeck()
        }
        let temp = o
        this.setState({
            hand:hand
        })
       }
    }
}