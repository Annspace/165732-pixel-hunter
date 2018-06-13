// game3.js

import {render, changeScreen} from './utils';
import stat from './stats';
import greeting from './greeting';
import {header} from './header';
import footer from './footer';
import game from "./data";

const content = `<div class="game">
    <p class="game__task">${game.levels[`level-2`].task}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
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
  </div>${footer}`;

const article = `${header(game.initialState)}
     ${content}
       ${footer}`;

const game3 = render(article);

const gameOptions = game3.querySelectorAll(`.game__option`);

for (let option of gameOptions) {
  option.addEventListener(`click`, () => changeScreen(stat));
}

const backButton = game3.querySelector(`button.back`);
backButton.addEventListener(`click`, () => changeScreen(greeting));

export default game3;
