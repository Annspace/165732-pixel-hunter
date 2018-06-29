import {changeScreen} from "./logic/utils";
import GameModel from "./model/game-model";
import GameScreen from "./controllers/game-screen";
import GreetingScreen from "./controllers/greeting-screen";
import RulesScreen from "./controllers/rules-screen";
import StatisticsScreen from "./controllers/statistics-screen";

export default class Application {

  static showGreeting() {
    const greeting = new GreetingScreen();
    changeScreen(greeting.element);
  }

  static showRules() {
    const rules = new RulesScreen();
    changeScreen(rules.element);
  }

  static showGame(userName) {
    const model = new GameModel(userName);
    const gameScreen = new GameScreen(model);
    changeScreen(gameScreen.element);
    gameScreen.startGame();
  }

  static showStatistics(result, lives) {
    const statistics = new StatisticsScreen(result, lives);
    changeScreen(statistics.element);
  }
}

