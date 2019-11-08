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


  }

  // multiply




  // userAttack = damage => {
  //   let tempArmor = this.state.currentEnemyArmor
  //   let tempHealth = this.state.currentEnemyHealth
  //   if (tempArmor >= damage) {
  //     tempArmor = tempArmor - damage
  //     // newArmor = tempArmor - damage;
  //     this.setState({
  //       currentEnemyArmor: tempArmor
  //     });
  //   }
  //   else {
  //     let newDamage = damage - tempArmor;
  //     // let tempHealth = tempEnemy.health;
  //     tempHealth = tempHealth - newDamage;
  //     // tempHealth=newHealth
  //     tempArmor = 0
  //     this.setState({
  //       currentEnemyHealth: tempHealth,
  //       currentEnemyArmor: tempArmor
  //     });

  //     if (this.state.currentEnemyHealth <= 0) {
  //       newWinCounts = this.state.winCount + 1
  //       this.setState({
  //         winCount: newWinCounts
  //       })
  //       // let newEnemy={...this.state.enemies[newWinCounts]}
  //       let currentEnemy = enemies[this.state.winCount]
  //       let currentEnemyHealth = currentEnemy.health
  //       let currentEnemyArmor = currentEnemy.armor
  //       let currentEnemyAttack = currentEnemy.attack
  //       this.setState({
  //         currentEnemyHealth: currentEnemyHealth,
  //         currentEnemyArmor: currentEnemyArmor,
  //         currentEnemyAttack: currentEnemyAttack
  //       })
  //     }
  //     // if (this.state.userTurnOver === true) {
  //     //   this.firstEnemyAction()
  //     // }
  //   }
  // }
  // armor = armor => {
  //   let newArmor = this.state.userArmor + armor;
  //   this.setState({
  //     userArmor: newArmor
  //   });
  //   // if (this.state.userTurnOver === true) {
  //   //   this.firstEnemyAction()
  //   // }
  // };


//   handlePlayedCards = (playedCards) => {
//     let tempPlayed = playedCards

//     let damage = 0;
//     let armor = this.state.userArmor;

//     playedCards.forEach((card) => {
//       switch (card.id) {
//         case 1:
//           damage += card.damage;
//           this.userAttack(damage)
//           break

//         case 2:
//           armor += card.armor
//           return;
//       }
//     });
//     // let {newArmor, newHealth} = this.userAttack(damage)
// let turn=!this.state.userTurnOver
//     this.setState({

//       userArmor: armor,
// userTurnOver:turn
//     })
//     console.log(this.state.userTurnOver);
  
  

//   }

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
        }
      case 2:

        //enemy gains armor
        let newArmor = newEnemyArmor + newEnemyArmorGain;
        this.setState({
          currentEnemyArmor: newArmor
        });
    }
  };




  //   userAttack = (damage) => {
  //     let newArmor = 0
  //     let gameWon = false;

  //     if (this.state.enemyArmor >= damage) {
  //       let tempArmor = this.state.enemyArmor;
  //       newArmor = tempArmor - damage;
  //       return {
  //         newArmor,
  //         gameWon
  //       }
  //     } else {
  //       let newDamage = damage - this.state.enemyArmor;
  //       let tempHealth = this.state.enemyHealth;
  //       let newHealth = tempHealth - newDamage;
  //       if(newHealth<=0) {
  //         gameWon = true;
  //       }
  //       return {
  //         newArmor,
  //         newHealth,
  //         gameWon
  //       }
  //     }


  //   };



  // setEnemyValues = enemies => {
  //   this.setState({
  //     enemyHealth: enemies[this.state.winCount].health,
  //     enemyArmor: enemies[this.state.winCount].armor
  //   })
  // }


  // handlePlayedCards = (playedCards) => {
  //   let tempPlayed = playedCards

  //   let damage = 0;
  //   let armor = this.state.userArmor;

  //   playedCards.forEach((card) => {
  //       switch (card.id) {
  //         case 1:
  //         damage += card.damage;

  //         break

  //         case 2:
  //           armor += card.armor
  //           return;
  //       }
  //   });
  //   let {newArmor, newHealth, gameWon} = this.userAttack(damage)

  //   this.setState({
  //     currentEnemyArmor: newArmor,
  //     currentEnemyHealth: newHealth,
  //     userArmor: armor

  //   })


  // }
  // firstEnemyAction = () => {
  //   let possibleEnemyActions=[]
  //   let newEnemyAttack;
  //   let newEnemyArmor;
  //   // for (let k = 0; k < enemies.length; k++) {
  //   //    if(id===this.state.winCount){
  //   //      newEnemyAttack=enemies[k].attack 
  //   //      newEnemyArmor=enemies[k].armor 
  //   //     possibleEnemyActions=enemies[k].actions
  //   //    }
  //   // }
  //   possibleEnemyActions=this.state.currentEnemyAbilities
  //   let randomAction;
  //   randomAction = Math.floor(Math.random() * possibleEnemyActions.length);
  //   switch (randomAction) {
  //     case 1:
  //     //enemy attacks!!
  //       if (this.state.userArmor >= newEnemyAttack) {
  //         let newArmor = this.state.userArmor - newEnemyAttack;
  //         this.setState({
  //           userArmor: newArmor
  //         });
  //       } else {
  //         let newAttack = newEnemyAttack - this.state.userAttack;
  //         let newHealth = this.state.userHealth - newAttack;
  //         this.setState({
  //           userHealth: newHealth,
  //           userArmor: 0
  //         });
  //       }
  //     case 2:

  //     //enemy gains armor
  //       let newArmor = this.state.enemyArmor + newEnemyArmor;
  //       this.setState({
  //         enemyArmor: newArmor
  //       });
  //   }
  // };






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