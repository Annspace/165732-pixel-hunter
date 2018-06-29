import AbstractView from "./abstract-view";
import {renderResult} from '../parts/stats';

export default class StatisticsView extends AbstractView {

  constructor(result, lives) {
    super();
    this.result = result;
    this.lives = lives;
  }

  get template() {
    return `<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
  </header>
  <div class="result">
  
  ${new Array(3).fill(``).map((it, i) => {
    return `<table class="result__table">
        ${renderResult(this.result[i], this.lives, i + 1)}
    </table>`;
  }).join(``)}
  
  </div>`;
  }

  bind() {
    const backButton = this.element.querySelector(`button.back`);
    backButton.addEventListener(`click`, () => this.onClickBackButton());
  }
  onClickBackButton() {}
}
