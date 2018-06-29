import AbstractView from "../abstract-view";
import {renderResult} from '../../parts/stats';

export default class GameThreeView extends AbstractView {

  constructor(state, questions) {
    super();
    this.state = state;
    this.questions = questions;
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
    <table class="result__table">
        ${renderResult(this.state.result.gameOne, this.state.lives, 1)}
    </table>
    <table class="result__table">
        ${renderResult(this.state.result.gameTwo, this.state.lives, 2)}
    </table>
    <table class="result__table">
        ${renderResult(this.state.result.gameThree, this.state.lives, 3)}
    </table>
  </div>`;
  }

  bind() {
    const backButton = this.element.querySelector(`button.back`);
    backButton.addEventListener(`click`, () => this.onClickBackButton());
  }
  onClickBackButton() {}
}
