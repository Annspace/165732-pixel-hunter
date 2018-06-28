import {changeScreen} from '../logic/utils';
import StatisticsView from "../view/view-old/statistics-view";
import {greetingScreen} from "./greetingScreen";
import state from "../game-data/data";
import gameData from "../game-data/correctAnswers";

export const statisticsScreen = () => {
  const statistics = new StatisticsView(state, gameData);
  changeScreen(statistics.element);
  statistics.onClickBackButton = () => {
    state.resetParams();
    greetingScreen();
  };
};
