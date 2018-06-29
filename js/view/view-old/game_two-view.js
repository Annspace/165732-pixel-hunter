import AbstractView from "../abstract-view";
import {stats} from "../../parts/stats";
import {header} from "../../parts/header";

export default class GameOneView extends AbstractView {

  constructor(state, questions) {
    super();
    this.state = state;
    this.questions = questions;
  }

  get template() {
    return `${header(this.state)} <div class="game">
    <p class="game__task"></p>
     <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src= ${this.questions.gameTwo[this.state.screenIndex].question.src} alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
       ${stats(this.state.answers)}
    </div>
  </div>`;
  }

  bind() {
    const gameAnswers = this.element.querySelectorAll(`.game__answer`);
    const backButton = this.element.querySelector(`button.back`);

    backButton.addEventListener(`click`, () => this.onClickBackButton());

    for (let answer of gameAnswers) {
      answer.addEventListener(`change`, (e) => this.onChange(e.target));
    }
  }

  onChange() {}
  onClickBackButton() {}
  checkAnswers() {}
}
