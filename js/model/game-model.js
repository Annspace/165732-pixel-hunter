import {
  INITIAL_GAME
} from '../game-data/dataGame';

import data from "../game-data/data";

let gameCopy = Object.assign({}, INITIAL_GAME);

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

  get getTime() {
    return this._state.time;
  }

  pushCorrectAnswer() {
    this.state.result[this.getCurrentGame].push({
      correct: true,
      time: this.getTime
    });
  }

  pushWrongAnswer() {
    this.state.result[this.getCurrentGame].push({
      correct: false,
      time: this.getTime
    });
    this.die();
  }

  pushAllAnswers() {
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
    this._state.lives--;
  }

  start() {
    this._state = gameCopy;
  }

  // нажатие на кнопку назад
  resetGame() {
    gameCopy = Object.assign({}, INITIAL_GAME);
    gameCopy.result = {
      0: [],
      1: [],
      2: []
    };
    gameCopy.answers = [];
  }

  isDead() {
    return this._state.lives < 0;
  }

  // Timer
  tick() {
    this._state.time++;
  }

  resetTime() {
    this._state.time = 0;
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
