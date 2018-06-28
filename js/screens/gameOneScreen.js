import GameOneView from '../view/view-old/game_one-view';
import {changeScreen} from '../logic/utils';
import {greetingScreen} from './greetingScreen';
import {gameTwoScreen} from './gameTwoScreen';
import gameData from "../game-data/correctAnswers";
import state from "../game-data/data";
const AVERAGE_TIME = 15;

export const gameOneScreen = () => {
  const gameOne = new GameOneView(state, gameData);
  changeScreen(gameOne.element);
  gameOne.onClickBackButton = () => {
    state.resetParams();
    greetingScreen();
  };

  gameOne.checkAnswers = (firstOptionValue, secondOptionValue, gameState) => {
    if (gameData.gameOne[gameState.screenIndex].optionOne.correctAnswer === firstOptionValue && gameData.gameOne[gameState.screenIndex].optionTwo.correctAnswer === secondOptionValue) {
      gameState.result.gameOne.push({
        correct: true,
        time: AVERAGE_TIME
      });
    } else {
      gameState.result.gameOne.push({
        correct: false,
        time: AVERAGE_TIME
      });
      if (gameState.lives > 0) {
        gameState.lives--;
      }
    }
    gameState.answers.push(gameState.result.gameOne[gameState.result.gameOne.length - 1]);
  };

  gameOne.onChangeForm = (checkedElements) => {
    if (checkedElements.length === 2) {
      gameOne.checkAnswers(checkedElements[0].value, checkedElements[1].value, gameOne.state);
      state.screenIndex++;
      if (state.screenIndex < gameData.gameOne.length) {
        gameOneScreen();
      } else {
        state.screenIndex = 0;
        gameTwoScreen();
      }
    }
  };
};
