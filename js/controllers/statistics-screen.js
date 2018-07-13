import Application from '../application';
import FooterView from '../view/footer-view';
import StatisticsView from "../view/statistics-view";
import HeaderStaticView from "../view/headerStatic-view";

export default class StatisticsScreen {
  constructor() {
    this.footer = new FooterView();
    this.header = new HeaderStaticView();
    this.root = document.createElement(`div`);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.footer.element);

    this.header.onClickBackButton = () => {
      Application.showGreeting();
    };
  }

  get element() {
    return this.root;
  }

  addHistory(answers, lives, index) {
    let historyView = new StatisticsView(answers, lives, index);
    this.root.insertBefore(historyView.element, this.footer.element);
  }

}
