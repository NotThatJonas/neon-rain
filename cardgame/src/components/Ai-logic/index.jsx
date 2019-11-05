import React, { Component } from "react";
import enemies from "../../enemy.json";
import cards from "../../cards.json";

class AiBrain extends Component {
  state = {
    userHealth: 100,
    userArmor: 0,
    enemyHealth: enemies[0].health,
    enemyArmor: enemies[0].armor,
    winCount=0
  };

  cardChoice = id => {
    switch (id) {
      case "1":
        userAttack(this.cards[id - 1].damage);
        return;

      case "2":
        armor(this.cards[id - 1].armor);
        return;
    }
  };

winRound = () => {
let newWinCount=(this.state.winCount+1)
this.setState=({
  winCount:newWinCount
})



}




  userAttack = damage => {
    let newArmor;
    let newHealth;
    let newDamage;
    if (this.state.enemyArmor >= damage) {
      let tempArmor = this.state.enemyArmor;
      newArmor = tempArmor - damage;
      this.setState({
        enemyArmor: newArmor
      });
    } else {
      newDamage = damage - this.state.enemyArmor;
      let tempHealth = this.state.enemyHealth;
      newHealth = tempHealth - newDamage;
      if(newHealth<=0){
        winRound()
      }

      this.setState({
        enemyHealth: newHealth
      });
    }
  };

  armor = armor => {
    let newArmor = this.state.userArmor + armor;
    this.setState({
      userArmor: newArmor
    });
  };



 

setEnemyValues = enemies => {
  this.setState({
    enemyHealth: enemies[this.state.winCount].health,
    enemyArmor: enemies[this.state.winCount].armor
  })
}





  firstEnemyAction = enemy => {
    let possibleEnemyActions=[]
    let newEnemyAttack=0
    let newEnemyArmor=0
    for (let k = 0; k < enemies.length; k++) {
       if(id===newWinCount){
         newEnemyAttack=enemies[k].attack 
         newEnemyArmor=enemies[k].armor 
        possibleEnemyActions=enemies[k].actions
       }
      
    }

    let randomAction;
    let randomAction = Math.floor(Math.random() * possibleEnemyActions.length);

    switch (randomAction) {
      case 1:
      

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
        let newArmor = this.state.enemyArmor + newEnemyArmor;
        this.setState({
          enemyArmor: newArmor
        });
    }
  };
  //render user health
}

export default AiBrain;
