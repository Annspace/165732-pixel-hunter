import GreetingView from '../view/greeting-view';
import Application from '../application';
import FooterView from '../view/footer-view';

export default class GreetingScreen {
  constructor() {
    this.content = new GreetingView();
    this.footer = new FooterView();
    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);
    this.root.appendChild(this.footer.element);
    this.content.onClickContinue = () => {
      Application.showRules();
    };

  }

  get element() {
    return this.root;
  }

}
