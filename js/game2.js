// game2.js

import {render, changeScreen} from './utils';
import game3 from './game3';
import greeting from './greeting';
import {header} from './header';
import game from './data';
import footer from './footer';

const content = `<div class="game">
    <p class="game__task">${game.levels[`level-1`].task}</p>
     <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
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
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>`;

const article = `${header(game.initialState)}
     ${content}
       ${footer}`;
const game2 = render(article);

const gameAnswers = game2.querySelectorAll(`.game__answer`);

for (let answer of gameAnswers) {
  answer.addEventListener(`change`, () => changeScreen(game3));
}

const backButton = game2.querySelector(`button.back`);
backButton.addEventListener(`click`, () => changeScreen(greeting));

export default game2;
