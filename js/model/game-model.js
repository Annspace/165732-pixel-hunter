import {
  INITIAL_GAME
} from '../game-data/dataGame';

let gameCopy = Object.assign({}, INITIAL_GAME);
let answers = [];
let answersCopy = answers.slice();

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
    this.answers.push({
      correct: true,
      time: this.getTime
    });
  }

  // для статистики каждой из игр
  pushWrongAnswer() {
    this.answers.push({
      correct: false,
      time: this.getTime
    });
    this.die();
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
    this.answers = answersCopy;
  }

  // нажатие на кнопку назад
  resetGame() {
    gameCopy = Object.assign({}, INITIAL_GAME);
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
