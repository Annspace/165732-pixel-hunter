import {greetingScreen} from "./greetingScreen";
import {changeScreen} from '../logic/utils';
import GameThreeView from "../view/view-old/game_three-view";
import {statisticsScreen} from "./statisticsScreen";
import state from "../game-data/data";
import gameData from "../game-data/correctAnswers";
const AVERAGE_TIME = 15;

export const gameThreeScreen = () => {
  const gameThree = new GameThreeView(state, gameData);
  changeScreen(gameThree.element);
  gameThree.onClickBackButton = () => {
    state.resetParams();
    greetingScreen();
  };

  gameThree.checkAnswers = (src, gameState) => {
    if (gameData.gameThree[gameState.screenIndex].question.correctAnswer === src) {
      gameState.result.gameThree.push({
        correct: true,
        time: AVERAGE_TIME
      });
    } else {
      gameState.result.gameThree.push({
        correct: false,
        time: AVERAGE_TIME
      });

      if (gameState.lives > 0) {
        gameState.lives--;
      }
    }
    gameState.answers.push(gameState.result.gameThree[gameState.result.gameThree.length - 1]);
  };

  gameThree.onClickOption = (element) => {
    let answerSrc = element.src;

    state.screenIndex++;
    if (state.screenIndex < gameData.gameThree.length) {
      gameThree.checkAnswers(answerSrc, state);
      gameThreeScreen();
    } else {
      state.screenIndex = 0;
      statisticsScreen();
    }
  };
};
