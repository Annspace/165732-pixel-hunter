const state = {
  playerName: ``,
  lives: 3,
  answers: [],
  screenIndex: 0,
  time: 30,
  result: {
    gameOne: {answers: [], lives: 3},
    gameTwo: {answers: [], lives: 3},
    gameThree: {answers: [], lives: 3}
  },

  looseLife() {
    this.lives = this.lives - 1;
  },
  addAnswer(answer) {
    this.answers.push(answer);
  },
  set newPlayerName(newName) {
    this.playerName = newName;
  },
  resetParams() {
    this.lives = 3;
    this.answers = [];
    this.screenIndex = 3;
    this.result.gameOne.answers = [];
    this.result.gameOne.lives = 3;
    this.result.gameTwo.answers = [];
    this.result.gameTwo.lives = 3;
    this.result.gameThree.answers = [];
    this.result.gameThree.lives = 3;
  }
};

export default state;

