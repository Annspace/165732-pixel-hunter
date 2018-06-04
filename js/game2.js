// game2.js

import {render, fragmentToString, changeScreen} from './utils';
import game3 from './game3';
import greeting from './greeting';

const game2 = render(fragmentToString(`game-2`));

const gameAnswers = game2.querySelectorAll(`.game__answer`);

for (let answer of gameAnswers) {
  answer.addEventListener(`change`, () => changeScreen(game3));
}

const backButton = game2.querySelector(`button.back`);
backButton.addEventListener(`click`, () => changeScreen(greeting));

export default game2;
