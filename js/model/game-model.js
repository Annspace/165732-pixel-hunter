import {
  INITIAL_GAME
} from '../game-data/dataGame';

let gameCopy = Object.assign({}, INITIAL_GAME);
let answers = [];
let answersCopy = answers.slice();
let result = Object.freeze({0: [], 1: [], 2: []});
let resultCopy = Object.assign({}, result);

// управляет состоянием
class GameModel {
  constructor(data, playerName) {
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

  // для статистики каждой из игр
  pushCorrectAnswer() {
    this.result[this.getCurrentGame].push({
      correct: true,
      time: this.getTime
    });
  }

  // для статистики каждой из игр
  pushWrongAnswer() {
    this.result[this.getCurrentGame].push({
      correct: false,
      time: this.getTime
    });
    this.die();
  }

  // для статистики под фото
  pushAllAnswers() {
    this.answers.push(this.result[this.getCurrentGame][this.getCurrentScreenIndex]);
  }

  get getResults() {
    return this.result;
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
    this.result = resultCopy;
    this.answers = answersCopy;
  }

  // нажатие на кнопку назад
  resetGame() {
    gameCopy = Object.assign({}, INITIAL_GAME);
    resultCopy = Object.assign({}, result);
    answersCopy = answers.slice();
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
    return this.answers;
  }
  get getLives() {
    return this._state.lives;
  }

  get getTask() {
    return this.data[this.getCurrentGame][this.getCurrentScreenIndex].question;
  }

  image(index) {
    return this.data[this.getCurrentGame][this.getCurrentScreenIndex].answers[index].image;
  }
}

export default GameModel;
