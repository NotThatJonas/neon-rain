import React, { Component } from "react";
import enemies from "../../enemy.json";

class AiBrain extends Component {
  state = {
    enemy: [],
    actions: [],
  };

  componentDidMount = () => {
    const newEnemy = this.whichEnemy(enemies);
    const newAction = this.enemyTurn(this.state.enemy);
    this.setState({
      enemy: newEnemy,
      actions: newAction,
    });
  };

  whichEnemy = enemies => {
    newEnemyArray = [];
    for (let i = 0; i < enemies.length; i++) {
      if ((this.state.enemy.id =enemies[i].id)) {
        newEnemyArray.push(enemies[i]);
      }
    }
    return newEnemyArray;
  };

  enemyTurn = enemy => {
    let randomAction = [];
    let possibleActions = [];
    for (let j = 0; j < enemy.length; j++) {
      let enemyAttack = enemy[j].attack;
      let enemyArmor = enemy[j].armor;
      possibleActions.push(enemyAttack);
      possibleActions.push(enemyArmor);
    }
    while (possibleActions.length) {
      let randomAction = Math.floor(Math.random() * possibleActions.length);
      let action = possibleActions.splice(randomAction, 1)[0];
      randomAction.push(action);
    }
    return randomAction;
  };
}

export default AiBrain;

