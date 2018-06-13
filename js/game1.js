// game1.js

import {render, changeScreen} from './utils';
import game2 from './game2';
import greeting from './greeting';
import {header} from "./header";
import footer from "./footer";
import game from './data';

const content = `<form class="game__content">
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
        ${[...game.levels[`level-0`].answers].map((answer) => `<label class="game__answer game__answer--${answer}">
          <input name="question1" type="radio" value="${answer}">
          <span>${answer}</span>
        </label>`).join(``)}
      </div>
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
        ${[...game.levels[`level-0`].answers].map((answer) => `<label class="game__answer game__answer--${answer}">
          <input name="question2" type="radio" value="${answer}">
          <span>${answer}</span>
         </label>`).join(``)};
      </div>
      </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>`;

const article = `${header(game.initialState)} 
  <div class="game">
     <p class="game__task">${game.levels[`level-0`].task}</p>
     ${content}
   </div>
       ${footer}`;

const game1 = render(article);

const gameForm = game1.querySelector(`.game__content`);
const gameOption1 = game1.querySelectorAll(`.game__option`)[0];
const gameOption2 = game1.querySelectorAll(`.game__option`)[1];
let question1 = false;
let question2 = false;

gameOption1.addEventListener(`change`, () => {
  question1 = true;
});
gameOption2.addEventListener(`change`, () => {
  question2 = true;
});

gameForm.addEventListener(`change`, () => {
  if (question1 && question2) {
    changeScreen(game2);
  }
});

const backButton = game1.querySelector(`button.back`);
backButton.addEventListener(`click`, () => changeScreen(greeting));

export default game1;
