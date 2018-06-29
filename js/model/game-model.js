import {
  INITIAL_GAME
} from '../game-data/dataGame';

import data from "../game-data/data";

// управляет состоянием
class GameModel {
  constructor(playerName) {
    this.data = data;
    this.playerName = playerName;
    this.start();
  }

  get state() {
    return this._state;
  }

  pushCorrectAnswer() {
    this.state.result[this.getCurrentGame].push({
      correct: true,
      time: 15
    });
  }

  pushWrongAnswer() {
    this.state.result[this.getCurrentGame].push({
      correct: false,
      time: 15
    });
    this.die();
  }

  pushAllAnswers() {
    // перебрать элементы массива this.state.result[this.getCurrentGame] и добавить в итоговый
    this.state.result[this.getCurrentGame].forEach((it) => {
      this.state.answers.push(it);
    });
  }

  get getResults() {
    return this._state.result;
  }


  resetScreenIndex() {
    this._state.screenIndex = 0;
  }

  endOfCurrentGame() {
    return this.getCurrentScreenIndex > this.data[this.getCurrentGame].length - 1;
  }

  endOfGames() {
    return this.getCurrentGame === (this.data.length - 1) && this.endOfCurrentGame();
  }

  die() {
    if (this._state.lives > 0) {
      this._state.lives--;
    }
  }

  start() {
    this._state = INITIAL_GAME;
  }

  isDead() {
    return this._state.lives <= 0;
  }

  // Timer
  tick() {
    this._state.time++;
  }


  changeGameType() {
    this._state.gameType++;
  }

  changeScreenIndex() {
    this._state.screenIndex++;
  }

  get getCurrentScreenIndex() {
    return this._state.screenIndex;
  }
  get getCurrentGame() {
    return this._state.gameType;
  }
  get getAnswers() {
    return this._state.answers;
  }
  get getLives() {
    return this._state.lives;
  }
}

export default GameModel;
