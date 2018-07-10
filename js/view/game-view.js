import AbstractView from './abstract-view';
import {stats} from "../results/stats";

const FRAME_ONE = {width: 468, height: 458};
const FRAME_TWO = {width: 705, height: 455};
const FRAME_THREE = {width: 304, height: 455};

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
     <p class="game__task">${this.model.getTask}</p>
     <form class="game__content">
  <div class="game__option">
        <img src= "${this.model.image(0).url}" alt="Option 1">
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
        <img src="${this.model.image(1).url}" alt="Option 2">
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
      <p class="game__task">${this.model.getTask}</p>
     <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src= ${this.model.image(0).url} alt="Option 1">
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
    <p class="game__task">${this.model.getTask}</p>
    <form class="game__content  game__content--triple">
    ${new Array(3).fill(``).map((it, i) =>
    `<div class="game__option">
        <img src="${this.model.image(i).url}" alt="Option 1">
      </div>`
  ).join(``)}
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
      const images = this.element.querySelectorAll(`img`);
      gameForm.addEventListener(`change`, () => this.onChangeForm(gameForm.querySelectorAll(`input:checked`)));
      for (let img of images) {
        img.style.display = `none`;
        img.addEventListener(`load`, (e) => {
          this.changeImgSize(e.target, FRAME_ONE);
          img.style.display = `block`;
        });
      }
    }
    if (this.model.getCurrentGame === 1) {
      const gameAnswers = this.element.querySelectorAll(`.game__answer`);
      const images = this.element.querySelectorAll(`img`);
      for (let answer of gameAnswers) {
        answer.addEventListener(`change`, (e) => this.onChange(e.target));
      }
      for (let img of images) {
        img.addEventListener(`load`, (e) => {
          this.changeImgSize(e.target, FRAME_TWO);
        });
      }

    }
    if (this.model.getCurrentGame === 2) {
      const gameOptions = this.element.querySelectorAll(`.game__option`);
      const images = this.element.querySelectorAll(`img`);
      for (let option of gameOptions) {
        option.addEventListener(`click`, (e) => this.onClickOption(e.target));
      }
      for (let img of images) {
        img.addEventListener(`load`, (e) => {
          this.changeImgSize(e.target, FRAME_THREE);
        });
      }
    }
  }

  onClickOption() {}
  onChangeForm() {}
  onChange() {}
  changeImgSize() {}
}
