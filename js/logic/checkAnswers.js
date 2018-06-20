import gameData from "../game-data/correctAnswers";
const AVERAGE_TIME = 15;

export const checkAnswersGameOne = (firstOptionValue, secondOptionValue, state) => {
  if (gameData.gameOne[state.screenIndex].optionOne.correctAnswer === firstOptionValue && gameData.gameOne[state.screenIndex].optionTwo.correctAnswer === secondOptionValue) {
    state.result.gameOne.push({
      correct: true,
      time: AVERAGE_TIME
    });
  } else {
    state.result.gameOne.push({
      correct: false,
      time: AVERAGE_TIME
    });
    if (state.lives > 0) {
      state.lives--;
    }
  }
  state.answers.push(state.result.gameOne[state.result.gameOne.length - 1]);
};

export const checkAnswersGameTwo = (value, state) => {
  if (gameData.gameTwo[state.screenIndex].question.correctAnswer === value) {
    state.result.gameTwo.push({
      correct: true,
      time: AVERAGE_TIME
    });
  } else {
    state.result.gameTwo.push({
      correct: false,
      time: AVERAGE_TIME
    });

    if (state.lives > 0) {
      state.lives--;
    }
  }
  state.answers.push(state.result.gameTwo[state.result.gameTwo.length - 1]);
};

export const checkAnswersGameThree = (src, state) => {
  if (gameData.gameThree[state.screenIndex].question.correctAnswer === src) {
    state.result.gameThree.push({
      correct: true,
      time: AVERAGE_TIME
    });
  } else {
    state.result.gameThree.push({
      correct: false,
      time: AVERAGE_TIME
    });

    if (state.lives > 0) {
      state.lives--;
    }
  }
  state.answers.push(state.result.gameThree[state.result.gameThree.length - 1]);
};
