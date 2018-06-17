import gameData from "../game-data/correctAnswers";
const AVERAGE_TIME = 15;

export const checkAnswersgameOne = (firstOptionValue, secondOptionValue, state) => {
  if (gameData[state.screenIndex].optionOne.correctAnswer === firstOptionValue && gameData[state.screenIndex].optionTwo.correctAnswer === secondOptionValue) {
    state.addAnswer({
      correct: true,
      time: AVERAGE_TIME
    });
  } else {
    state.addAnswer({
      correct: false,
      time: AVERAGE_TIME
    });

    state.looseLife();
  }
};

export const checkAnswersgameTwo = (value, state) => {
  if (gameData[state.screenIndex].question.correctAnswer === value) {
    state.addAnswer({
      correct: true,
      time: AVERAGE_TIME
    });
  } else {
    state.addAnswer({
      correct: false,
      time: AVERAGE_TIME
    });

    state.looseLife();
  }
};

export const checkAnswersgameThree = (src, state) => {
  if (gameData[state.screenIndex].question.correctAnswer === src) {
    state.addAnswer({
      correct: true,
      time: AVERAGE_TIME
    });
  } else {
    state.addAnswer({
      correct: false,
      time: AVERAGE_TIME
    });

    state.looseLife();
  }
};
