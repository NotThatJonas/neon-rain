render()
{

    const hand = (this.state.hand.map((card, index) => {
        return (
            <Cards
                name={card.name}
                image={card.image}
                text={card.text}
                handleClick={this.toPlay}
                currentIndex={index}
          />
        )
    }))

    const playArea = (this.state.playArea.map(card, index) => {
        return (
            <Cards
                name={card.name}
                image={card.image}
                text={card.text}
                handleClick={this.toPlay}
                currentIndex={index}
            />
        )

    })


    return (
        
        <div id="gameArea">
            <div className="row d-flex justify-content-center">
                <button onclick={this.endTurn}>
                 End Turn
                </button>
            </div>
            <div className="row d-flex justify-content-center">
                {playArea.length ? playArea : null}
            </div>
            <div className="row d-flex justify-content-center">
                {hand.length ? hand : null}
            </div>


        </div>

    ) 
            }