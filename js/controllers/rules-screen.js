import RulesView from '../view/rules-view';
import Application from '../application.js';
import FooterView from '../view/footer-view';

export default class RulesScreen {
  constructor() {
    this.content = new RulesView();
    this.footer = new FooterView();
    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);
    this.root.appendChild(this.footer.element);

    this.content.onClickBackButton = () => Application.showGreeting();
    this.content.onInput = (element1, element2) => {
      if (element1.value.length > 0) {
        element2.removeAttribute(`disabled`);
      } else {
        element2.setAttribute(`disabled`, `disabled`);
      }
      this.content.onClickGoButton = (name) => Application.showGame(name);
    };
  }

  get element() {
    return this.root;
  }

}

