import AbstractView from "./abstract-view";
import {header} from "../parts/header";
import {stats} from "../parts/stats";

export default class GameOneView extends AbstractView {

  constructor(state, questions) {
    super();
    this.state = state;
    this.questions = questions;
  }

  get template() {
    return `${header(this.state)} 
  <div class="game">
     <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
     <form class="game__content">
  <div class="game__option">
        <img src= "${this.questions.gameOne[this.state.screenIndex].optionOne.src}" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="${this.questions.gameOne[this.state.screenIndex].optionTwo.src}" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
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
    const gameForm = this.element.querySelector(`.game__content`);
    const backButton = this.element.querySelector(`button.back`);
    backButton.addEventListener(`click`, () => this.onClickBackButton());
    gameForm.addEventListener(`change`, () => this.onChangeForm(gameForm.querySelectorAll(`input:checked`)));
  }

  onChangeForm() {}
  onClickBackButton() {}
  checkAnswers() {}
}
