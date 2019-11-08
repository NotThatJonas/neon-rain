import React, { Component } from "react";
import "./style.css";
import enemies from "../../enemy.json"
import DeckBrain from "../../components/deck-managment"


var newWinCounts;
var newEnemyObject

class BattlePage extends Component {

  state = {
    winCount: 0,
    userHealth: 100,
    userArmor: 0,
    enemies,
    currentEnemyHealth: 0,
    currentEnemyArmor: 0,
    currentEnemyAbilities: [],
    currentEnemyAttack: 0,
    currentEnemyArmorGain: 0,
    playedCards: [],
    userTurnOver: false
  };

  componentDidMount() {
    let currentEnemy = enemies[this.state.winCount]
    let currentEnemyHealth = currentEnemy.health
    let currentEnemyArmor = currentEnemy.armor
    let newEnemyAbilities = currentEnemy.actions
    let newEnemyAttack = currentEnemy.attack
    let newEnemyArmorGain = currentEnemy.armorGain
    this.setState({
      currentEnemyHealth: currentEnemyHealth,
      currentEnemyArmor: currentEnemyArmor,
      currentEnemyAbilities: newEnemyAbilities,
      currentEnemyAttack: newEnemyAttack,
      currentEnemyArmorGain: newEnemyArmorGain

    })


  // componentDidUpdate(prevprops, prevState) {
  //   const turnEnded = this.state.userTurnOver !== prevState.userTurnOver;
  //   let turn=!this.state.userTurnOver
  //   if (turnEnded) {
  //    this.firstEnemyAction()
  
  //     this.setState({
  //       userTurnOver: turn
  //     })
  //   }
  // }








  firstEnemyAction = () => {
    console.log(this.state.currentEnemyAbilities);
    let possibleEnemyActions = this.state.currentEnemyAbilities
    let newEnemyAttack = this.state.currentEnemyAttack
    let newEnemyArmor = this.state.currentEnemyArmor
    let newEnemyArmorGain = this.state.currentEnemyArmorGain
    let newUserHealth = this.state.userHealth
    let newUserArmor = this.state.userArmor
    console.log(possibleEnemyActions);


    let randomAction = Math.floor(Math.random() * possibleEnemyActions.length + 1);
    console.log(randomAction);

    switch (randomAction) {
      case 1:
        //enemy attacks!!
        if (newUserArmor >= newEnemyAttack) {
          let newArmor = newUserArmor - newEnemyAttack;
          this.setState({
            userArmor: newArmor
          });
        } else {
          let newAttack = newEnemyAttack - newUserArmor;
          let newHealth = newUserHealth - newAttack;
          this.setState({
            userHealth: newHealth,
            userArmor: 0
          });

    
//     componentWillMount(){
// let currentEnemy=enemies[this.state.winCount]
// let currentEnemyHealth=currentEnemy.health
// let currentEnemyArmor=currentEnemy.armor
// let currentEnemyAttack=currentEnemy.attack
//       this.setState({
//         currentEnemyHealth:currentEnemyHealth,
//         currentEnemyArmor:currentEnemyArmor,
//         currentEnemyAttack:currentEnemyAttack
//       })
//     }
    

      userAttack = (damage) => {
        let newArmor = 0;
        let gameWon = false;
        let newHealth
        if (this.state.currentEnemyArmor >= damage) {
          let tempArmor = this.state.currentEnemyArmor;
          newArmor = tempArmor - damage;
        } else {
          let newDamage = damage - this.state.currentEnemyArmor;
          let tempHealth = this.state.currentEnemyHealth;
          newHealth = tempHealth - newDamage;
          if(newHealth<=0) {
            gameWon = true;
          }
        }

        return {
          newArmor,
          newHealth,
          gameWon
        }

      };
    
       
    
    
    handlePlayedCards = (playedCards) => {

      let damage = 0;
      let armor = this.state.userArmor;

      playedCards.forEach((card) => {
          switch (card.id) {
            case 1:
            damage += card.damage;
           
            break
      
            case 2:
              armor += card.armor
            return;
          }
      });

      let {newArmor, newHealth, gameWon} = this.userAttack(damage)
      this.setState({
        currentEnemyArmor: newArmor,
        currentEnemyHealth: newHealth,
        userArmor: armor

      })
      this.firstEnemyAction()

    }

      firstEnemyAction = id => {
        let possibleEnemyActions=[]
        let newEnemyAttack;
        let newEnemyArmor;
        for (let k = 0; k < enemies.length; k++) {
           if(id===this.state.winCount){
             newEnemyAttack=enemies[k].attack 
             newEnemyArmor=enemies[k].armor 
            possibleEnemyActions=enemies[k].actions
           }
        }
        let randomAction;
        randomAction = Math.floor(Math.random() * possibleEnemyActions.length);
        switch (randomAction) {
          case 1:
          //enemy attacks!!
            if (this.state.userArmor >= newEnemyAttack) {
              let newArmor = this.state.userArmor - newEnemyAttack;
              this.setState({
                userArmor: newArmor
              });
            } else {
              let newAttack = newEnemyAttack - this.state.userAttack;
              let newHealth = this.state.userHealth - newAttack;
              this.setState({
                userHealth: newHealth,
                userArmor: 0
              });
            }
          case 2:

          //enemy gains armor
            let newArmor = this.state.enemyArmor + newEnemyArmor;
            this.setState({
              enemyArmor: newArmor
            });
        }
      case 2:

        //enemy gains armor
        let newArmor = newEnemyArmor + newEnemyArmorGain;
        this.setState({
          currentEnemyArmor: newArmor
        });
    }
  };







  render() {

    return (
      <div className="d-flex justify-content-center">
        {this.state.userTurnOver ? "true" : "false"}
        <br></br>
        {this.state.currentEnemyHealth}
        <br></br>
        {this.state.userHealth}
        <DeckBrain readPlayed={this.handlePlayedCards} />
      </div>
    )
  }

}

export default BattlePage;