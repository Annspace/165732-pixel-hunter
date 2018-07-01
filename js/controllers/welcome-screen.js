import WelcomeView from '../view/welcome-view';
import Application from '../application';

export default class WelcomeScreen {
  constructor() {
    this.content = new WelcomeView();
    this.content.onClickIntro = () => {
      Application.showRules();
    };
  }
  start() {
    this.content.bind();
  }
}
