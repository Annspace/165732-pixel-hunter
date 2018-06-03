// rules.js

import {render, fragmentToString, changeScreen} from './utils';
import game1 from './game1';
import greeting from './greeting';

const rule = render(fragmentToString(`rules`));

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
