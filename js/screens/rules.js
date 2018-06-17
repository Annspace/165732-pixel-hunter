// rules.js

import {render, changeScreen} from '../logic/utils';
// import game1 from './game1';
import {greeting} from './greeting';
import footer from '../parts/footer';
import {gameOne} from "./game1";
import gameData from "../game-data/correctAnswers";

export const rules = () => {
  const content = `<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
  </header>
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
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
      rulesButton.addEventListener(`click`, () => changeScreen(gameOne(gameData)));
    } else {
      rulesButton.setAttribute(`disabled`, `disabled`);
    }
  });

  const backButton = rule.querySelector(`button.back`);
  backButton.addEventListener(`click`, () => changeScreen(greeting()));

  return rule;
};
