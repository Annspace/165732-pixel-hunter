import AbstractView from './abstract-view';
import {stats} from "../parts/stats";

export default class GameView extends AbstractView {

  constructor(model) {
    super();
    this.model = model;
  }

  get template() {
    switch (this.model.getCurrentGame) {
      case 0:
        return `
  <div class="game">
     <p class="game__task">${this.model.data[this.model.getCurrentGame][this.model.getCurrentScreenIndex].question}</p>
     <form class="game__content">
  <div class="game__option">
        <img src= "${this.model.data[this.model.getCurrentGame][this.model.getCurrentScreenIndex].answers[0].image.url}" alt="Option 1" width="468" height="458">
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
        <img src="${this.model.data[this.model.getCurrentGame][this.model.getCurrentScreenIndex].answers[1].image.url}" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="painting">
          <span>Рисунок</span>
        </label>
      </div>
      </form>
    <div class="stats">
      <ul class="stats">
     ${stats(this.model.getAnswers)}
     </ul>
    </div>
   </div>`;

      case 1:
        return `
       <div class="game">
      <p class="game__task">${this.model.data[this.model.getCurrentGame][this.model.getCurrentScreenIndex].question}</p>
     <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src= ${this.model.data[this.model.getCurrentGame][this.model.getCurrentScreenIndex].answers[0].image.url} alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="painting">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
    <ul class="stats">
     ${stats(this.model.getAnswers)}
     </ul>
    </div>
  </div>`;

      case 2:
        return `
    <div class="game">
    <p class="game__task">${this.model.data[this.model.getCurrentGame][this.model.getCurrentScreenIndex].question}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="${this.model.data[this.model.getCurrentGame][this.model.getCurrentScreenIndex].answers[0].image.url}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${this.model.data[this.model.getCurrentGame][this.model.getCurrentScreenIndex].answers[1].image.url}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${this.model.data[this.model.getCurrentGame][this.model.getCurrentScreenIndex].answers[2].image.url}" alt="Option 1" width="304" height="455">
      </div>
    </form>
    <div class="stats">
    <ul class="stats">
    ${stats(this.model.getAnswers)}
    </ul>
    </div>
  </div>`;
      default:
        throw new RangeError(`No such type of game`);
    }
  }

  bind() {
    if (this.model.getCurrentGame === 0) {
      const gameForm = this.element.querySelector(`.game__content`);
      gameForm.addEventListener(`change`, () => this.onChangeForm(gameForm.querySelectorAll(`input:checked`)));
    }
    if (this.model.getCurrentGame === 1) {
      const gameAnswers = this.element.querySelectorAll(`.game__answer`);

      for (let answer of gameAnswers) {
        answer.addEventListener(`change`, (e) => this.onChange(e.target));
      }
    }
    if (this.model.getCurrentGame === 2) {
      const gameOptions = this.element.querySelectorAll(`.game__option`);
      for (let option of gameOptions) {
        option.addEventListener(`click`, (e) => this.onClickOption(e.target));
      }
    }
  }

  onClickOption() {}
  onChangeForm() {}
  onChange() {}

}
