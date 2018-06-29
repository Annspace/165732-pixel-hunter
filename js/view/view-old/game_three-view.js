import AbstractView from "../abstract-view";
import {header} from "../../parts/header";
import {stats} from "../../parts/stats";

export default class GameThreeView extends AbstractView {
  constructor(state, questions) {
    super();
    this.state = state;
    this.questions = questions;
  }
  get template() {
    return `${header(this.state)}<div class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="${this.questions.gameThree[this.state.screenIndex].question.src1}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${this.questions.gameThree[this.state.screenIndex].question.src2}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${this.questions.gameThree[this.state.screenIndex].question.src3}" alt="Option 1" width="304" height="455">
      </div>
    </form>
    <div class="stats">
       ${stats(this.state.answers)}
    </div>
  </div>`;
  }

  bind() {
    const backButton = this.element.querySelector(`button.back`);
    backButton.addEventListener(`click`, () => this.onClickBackButton());
    const gameOptions = this.element.querySelectorAll(`.game__option`);
    for (let option of gameOptions) {
      option.addEventListener(`click`, (e) => this.onClickOption(e.target));
    }
  }

  onClickBackButton() {}
  onClickOption() {}
  checkAnswers() {}
}
