import AbstractView from "./abstract-view";
import {renderResult} from '../results/stats';

export default class StatisticsView extends AbstractView {

  constructor(answers, lives, index) {
    super();
    this.answers = answers;
    this.lives = lives;
    this.index = index;
  }

  get template() {
    return `
  <div class="result">
  ${this.insertVictory(this.lives)}
   <table class="result__table">
      ${renderResult(this.answers, this.lives, this.index)}
      </table>
      </div>`;
  }


  insertVictory(lives) {
    if (lives >= 0) {
      return `<h1>Победа!</h1>`;
    } else {
      return ``;
    }
  }

  onClickBackButton() {}
}
