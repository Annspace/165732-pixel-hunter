const state = {
  playerName: ``,
  lives: 3,
  answers: [],
  screenIndex: 0,
  time: 30,
  result: {
    gameOne: [],
    gameTwo: [],
    gameThree: []
  },

  set newPlayerName(newName) {
    this.playerName = newName;
  },
  resetParams() {
    this.lives = 3;
    this.answers = [];
    this.screenIndex = 0;
    this.result.gameOne = [];
    this.result.gameTwo = [];
    this.result.gameThree = [];
  }
};

export default state;

