// game1.js

import {render, fragmentToString, changeScreen} from './utils';
import game2 from './game2';
import greeting from './greeting';

const game1 = render(fragmentToString(`game-1`));

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
