import React from "react"
import card from "../../cards.json"
import"./style.css"

function Cards(props) {
    return(
        <div onClick={()=>{props.handleClick(props.currentIndex)}} id="player-card" className={`card grow raise col-md-${props.colSize}`}>
        <img src={props.image} className="card-img-top" alt="sword"/>
        <div className="card-body w-100  nes-pointer">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    )
}

export default Cards;

