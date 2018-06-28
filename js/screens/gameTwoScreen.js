import {greetingScreen} from "./greetingScreen";
import {changeScreen} from '../logic/utils';
import {gameThreeScreen} from './gameThreeScreen';
import GameTwoView from "../view/view-old/game_two-view";
import gameData from "../game-data/correctAnswers";
import state from "../game-data/data";
const AVERAGE_TIME = 15;

export const gameTwoScreen = () => {
  const gameTwo = new GameTwoView(state, gameData);
  changeScreen(gameTwo.element);
  gameTwo.onClickBackButton = () => {
    state.resetParams();
    greetingScreen();
  };

  gameTwo.checkAnswers = (value, gameState) => {
    if (gameData.gameTwo[gameState.screenIndex].question.correctAnswer === value) {
      gameState.result.gameTwo.push({
        correct: true,
        time: AVERAGE_TIME
      });
    } else {
      gameState.result.gameTwo.push({
        correct: false,
        time: AVERAGE_TIME
      });

      if (gameState.lives > 0) {
        gameState.lives--;
      }
    }
    gameState.answers.push(gameState.result.gameTwo[gameState.result.gameTwo.length - 1]);
  };

  gameTwo.onChange = (element) => {
    gameTwo.checkAnswers(element.value, state);
    state.screenIndex++;
    if (state.screenIndex < gameData.gameTwo.length) {
      gameTwoScreen();
    } else {
      state.screenIndex = 0;
      gameThreeScreen();
    }
  };
};
