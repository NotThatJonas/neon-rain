import React, { Component } from "react";
import "./style.css";
import enemies from "../../enemy.json";
import DeckBrain from "../../components/deck-managment";
import HealthBar from "../../components/plyr-healthbar";
import EHBar from "../../components/ehealthbar";

var newWinCounts;
var newEnemyObject;

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
    userTurnOver: false,
    frozen: false
  };

  componentDidMount() {
    let currentEnemy = enemies[this.state.winCount];
    let currentEnemyHealth = currentEnemy.health;
    let currentEnemyArmor = currentEnemy.armor;
    let newEnemyAbilities = currentEnemy.actions;
    let newEnemyAttack = currentEnemy.attack;
    let newEnemyArmorGain = currentEnemy.armorGain;
    this.setState({
      currentEnemyHealth: currentEnemyHealth,
      currentEnemyArmor: currentEnemyArmor,
      currentEnemyAbilities: newEnemyAbilities,
      currentEnemyAttack: newEnemyAttack,
      currentEnemyArmorGain: newEnemyArmorGain
    });
  }

  componentDidUpdate(prevprops, prevState) {
    const turnEnded = this.state.userTurnOver !== prevState.userTurnOver;
    const frozen = this.state.frozen
    if (turnEnded && !frozen) {
      this.firstEnemyAction()
    }
    else if (turnEnded && frozen) {
      this.setState({
        frozen: false
      })
    }

  }




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
      if (newHealth <= 0) {
        gameWon = true;
      }
    }

    return {
      newArmor,
      newHealth,
      gameWon
    }
  }




  firstEnemyAction = () => {
    let possibleEnemyActions = this.state.currentEnemyAbilities;
    let newEnemyAttack = this.state.currentEnemyAttack;
    let newEnemyArmor = this.state.currentEnemyArmor;
    let newEnemyArmorGain = this.state.currentEnemyArmorGain;
    let newUserHealth = this.state.userHealth;
    let newUserArmor = this.state.userArmor;

    let randomAction = Math.floor(
      Math.random() * possibleEnemyActions.length + 1
    );
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
        break;
      case 2:
        //enemy gains armor
        let newArmor = newEnemyArmor + newEnemyArmorGain;
        this.setState({
          currentEnemyArmor: newArmor
        });
        return;
    }
  };



  hasWon = () => {
    let hasWon = this.state.winCount
  }






  handlePlayedCards = (playedCards) => {

    let damage = 0;
    let armor = this.state.userArmor;
    let selfDamage = 0;
    let health = this.state.userHealth
    let newEnemyArmor;
    let userHealValue = 0
    let newHealth = 0
    playedCards.forEach((card) => {
      switch (card.id) {
        case 1:
          damage += card.damage;

          break

        case 2:
          armor += card.armor

          break
        case 3:
          damage += card.damage;
          selfDamage += card.selfDamage
          break;
        case 4:

          damage = damage * card.multiplier
          break;
        case 5:
          newEnemyArmor = 0
          this.setState({
            currentEnemyArmor: newEnemyArmor
          })
          break;
        case 6:
          userHealValue = card.healValue
          newHealth = this.state.userHealth + userHealValue
          this.setState({
            userHealth: newHealth
          })
          break;
        case 7:
          this.setState({
            frozen: true
          })
          return;
      }
    });
    if (damage) {
      let { newArmor, newHealth, gameWon } = this.userAttack(damage)
      let turnOver = !this.state.userTurnOver
      let tempHealth = health - selfDamage
      if (gameWon) {
        let tempWin = this.state.winCount + 1
        this.setState({
          winCount: tempWin
        });
      }
      this.setState({
        currentEnemyArmor: newArmor,
        currentEnemyHealth: newHealth,
        userTurnOver: turnOver,
        userArmor: armor,
        userHealth: tempHealth
      })
    }

    else {
      let turnOver = !this.state.userTurnOver
      this.setState({
        userTurnOver: turnOver,
        userArmor: armor
      });
    }
  };

  render() {
    return (
      <div>
        <div className="landing2"></div>
        <div className="row bars">
          <div className="health col-md-6">
            <div>
              <progress
                class="nes-progress health is-error"
                value={this.state.userHealth}
                max="100"
              ></progress>
            </div>
            <p className="hb">Player:{this.state.userHealth}</p>

          </div>
          <div className="emhealth col-md-6">
            <div>
              <progress
                class="nes-progress emhealth is-error"
                value={this.state.currentEnemyHealth}
                max="100"
              ></progress>
            </div>
            <p className="em">Enemy:{this.state.currentEnemyHealth}</p>
          </div>
        </div>
        <div className="d-flex carddeck justify-content-center">
          {this.state.userTurnOver ? "true" : "false"}
          <br></br>

          <br></br>
          <DeckBrain readPlayed={this.handlePlayedCards}
            hasWon={this.state.winCount} />
        </div>
      </div>
    );
  }
}
export default BattlePage;
