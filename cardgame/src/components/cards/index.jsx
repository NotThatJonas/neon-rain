import React from "react"
import card from "../../cards.json"


function Cards(props) {
    return(
        <div id="player-card" className="card col-md-2">
        <img src={props.image} className="card-img-top" alt="sword"/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    )
}

export default Cards;