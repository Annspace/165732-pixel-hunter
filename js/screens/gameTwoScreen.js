import {greetingScreen} from "./greetingScreen";
import {changeScreen} from '../logic/utils';
import {gameThreeScreen} from './gameThreeScreen';
import GameTwoView from "../view/game_two-view";

export const gameTwoScreen = () => {
  const gameTwo = new GameTwoView();
  changeScreen(gameTwo.element);
  gameTwo.onClickBackButton = () => greetingScreen();
  gameTwo.onChange = () => gameThreeScreen();
};
