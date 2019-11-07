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
    currentEnemyHealth:0,
    currentEnemyArmor:0,
    currentEnemyAttack:0,
    playedCards: [],
  };
  





    
      cardChoice = id => {
        switch (id) {
          case 1:
            this.userAttack(5);
            return;
    
          case 2:
            this.armor(3);
            return;

            // case 3:
            //   this.multiply(3)
        }

      };
    
    
    componentDidMount(){
let currentEnemy=enemies[this.state.winCount]
let currentEnemyHealth=currentEnemy.health
let currentEnemyArmor=currentEnemy.armor
let currentEnemyAttack=currentEnemy.attack
      this.setState({
        currentEnemyHealth:currentEnemyHealth,
        currentEnemyArmor:currentEnemyArmor,
        currentEnemyAttack:currentEnemyAttack
      })
    }
    
    // multiply



    
      userAttack = damage => {
        let tempArmor=this.state.currentEnemyArmor
        let tempHealth=this.state.currentEnemyHealth
        if (this.state.tempArmor >= damage) {
        tempArmor=tempArmor-damage
          // newArmor = tempArmor - damage;
          this.setState({
            currentEnemyArmor: tempArmor
          });
        } 
        else {
          let newDamage = damage - tempArmor;
          // let tempHealth = tempEnemy.health;
          tempHealth = tempHealth- newDamage;
          // tempHealth=newHealth
          tempArmor=0
          this.setState({
            currentEnemyHealth: tempHealth,
            currentEnemyArmor:tempArmor
          });
        if(this.state.currentEnemyHealth<=0){
          newWinCounts=this.state.winCount+1
          this.setState({
            winCount:newWinCounts
          })
          // let newEnemy={...this.state.enemies[newWinCounts]}
          let currentEnemy=enemies[this.state.winCount]
          let currentEnemyHealth=currentEnemy.health
          let currentEnemyArmor=currentEnemy.armor
          let currentEnemyAttack=currentEnemy.attack
          this.setState({
            currentEnemyHealth:currentEnemyHealth,
            currentEnemyArmor:currentEnemyArmor,
            currentEnemyAttack:currentEnemyAttack
          })
        }
        }
      }
      armor = armor => {
        let newArmor = this.state.userArmor + armor;
        this.setState({
          userArmor: newArmor
        });
      };    
    handlePlayedCards = (array)=>{
        let tempPlayed=array
        let self = this
        setTimeout(()=>{
            self.cardChoice(tempPlayed[0].id)
      }, 2)
        setTimeout(function(){
            self.cardChoice(tempPlayed[1].id)
      },1)
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
      };





    render() {
     
        return (
            <div className= "d-flex justify-content-center">
          
            <DeckBrain readPlayed={this.handlePlayedCards}/>
            </div>
        )}

}

export default BattlePage;