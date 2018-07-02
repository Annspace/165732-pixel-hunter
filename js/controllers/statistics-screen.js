import Application from '../application';
import FooterView from '../view/footer-view';
import StatisticsView from "../view/statistics-view";

export default class StatisticsScreen {
  constructor(result, lives) {
    this.content = new StatisticsView(result, lives);
    this.footer = new FooterView();
    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);
    this.root.appendChild(this.footer.element);

    this.content.onClickBackButton = () => {
      Application.showGreeting();
    };

  }

  get element() {
    return this.root;
  }

}
