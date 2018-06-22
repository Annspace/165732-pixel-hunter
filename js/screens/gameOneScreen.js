import GameOneView from '../view/game_one-view';
import {changeScreen} from '../logic/utils';
import {greetingScreen} from './greetingScreen';
import {gameTwoScreen} from './gameTwoScreen';

export const gameOneScreen = () => {
  const gameOne = new GameOneView();
  changeScreen(gameOne.element);
  gameOne.onClickBackButton = () => greetingScreen();
  gameOne.onChangeForm = (checkedElements) => {
    if (checkedElements.length === 2) {
      gameTwoScreen();
    }
  };
};
