import {changeScreen} from "./logic/utils";
import GameModel from "./model/game-model";
import GameScreen from "./controllers/game-screen";
import GreetingScreen from "./controllers/greeting-screen";
import RulesScreen from "./controllers/rules-screen";
import StatisticsScreen from "./controllers/statistics-screen";
import SplashScreen from "./controllers/splash-screen";
import ErrorScreen from "./controllers/error-screen";
import WelcomeView from "./view/welcome-view";
import Loader from "./controllers/loader";

let dataGame;

export default class Application {

  static start() {
    const splash = new SplashScreen();
    changeScreen(splash.element);
    splash.start();
    Loader.loadData().then((data) => {
      dataGame = data;
    }).
    then(() => Application.showWelcome()).
    catch(Application.showError).
    then(() => splash.stop());
  }

  static showWelcome() {
    const welcome = new WelcomeView();
    changeScreen(welcome.element);
  }

  static showGreeting() {
    const greeting = new GreetingScreen();
    changeScreen(greeting.element);
  }

  static showRules() {
    const rules = new RulesScreen();
    changeScreen(rules.element);
  }

  static showGame(userName) {
    const model = new GameModel(dataGame, userName);
    const gameScreen = new GameScreen(model);
    changeScreen(gameScreen.element);
  }

  static showStatistics(model) {
    const statistics = new StatisticsScreen();
    let resultGame = {result: model.getAnswers, lives: model.getLives};
    Loader.saveResults(resultGame, model.playerName).
    then(() => Loader.loadResults(model.playerName)).
    then((data) => {
      data.forEach((it, index) => {
        statistics.addHistory(it.result, it.lives, index + 1);
      });
      changeScreen(statistics.element);
    }).
    catch(Application.showError);
  }

  static showError(error) {
    const errorScreen = new ErrorScreen(error);
    changeScreen(errorScreen.element);
  }
}

