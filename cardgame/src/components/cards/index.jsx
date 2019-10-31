import React from "react"


function Cards(props) {
    return(
        <div id="player-card" {...props} className="card col-md-2">
        <img src={props.card.img} className="card-img-top" alt="sword"/>
        <div className="card-body">
          <h5 className="card-title">{props.hand.name}</h5>
          <p className="card-text">{props.hand.text}</p>
        </div>
      </div>
    )
}

export default Cards;