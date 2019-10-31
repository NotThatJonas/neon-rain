import React from "react"

function Cards(props) {
    return(
        <div id="player-card" {...props} className="card col-md-2">
        <img src="https://cdnb.artstation.com/p/assets/images/images/010/293/329/large/joao-oliveira-carnavau-sword-2-by-valraz-dbyi7sl.jpg?1523638556" className="card-img-top" alt="sword"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    )
}

export default Cards;