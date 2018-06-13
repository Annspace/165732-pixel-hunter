// rules.js

import {render, changeScreen} from './utils';
import game1 from './game1';
import greeting from './greeting';
import footer from './footer';
import game from './data';

const content = `<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
  </header>
  <div class="rules">
    <h1 class="rules__title">${game.levels[`rules`].header}</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      ${game.levels[`rules`].description}
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>`;
const article = `${content}${footer}`;

const rule = render(article);

const rulesButton = rule.querySelector(`.rules__button`);
const rulesInput = rule.querySelector(`.rules__input`);

rulesInput.addEventListener(`input`, () => {
  if (rulesInput.value.length > 0) {
    rulesButton.removeAttribute(`disabled`);
    rulesButton.addEventListener(`click`, () => changeScreen(game1));
  } else {
    rulesButton.setAttribute(`disabled`, `disabled`);
  }
});

const backButton = rule.querySelector(`button.back`);
backButton.addEventListener(`click`, () => changeScreen(greeting));

export default rule;
