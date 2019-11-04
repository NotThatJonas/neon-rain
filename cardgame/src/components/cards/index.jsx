import React from "react"
import card from "../../cards.json"


function Cards(props) {
    return(
        <div id="player-card" className="card col-md-2">
        <img src={card[0].image} className="card-img-top" alt="sword"/>
        <div className="card-body">
          <h5 className="card-title">{card[0].name}</h5>
          <p className="card-text">{card[0].text}</p>
        </div>
      </div>
    )
}

export default Cards;