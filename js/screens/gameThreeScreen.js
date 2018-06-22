import {greetingScreen} from "./greetingScreen";
import {changeScreen} from '../logic/utils';
import GameThreeView from "../view/game_three-view";

export const gameThreeScreen = () => {
  const gameThree = new GameThreeView();
  changeScreen(gameThree.element);
  gameThree.onClickBackButton = () => greetingScreen();
};
