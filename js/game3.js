// game3.js

import {render, fragmentToString, changeScreen} from './utils';
import stat from './stats';
import greeting from './greeting';

const game3 = render(fragmentToString(`game-3`));

const gameOptions = game3.querySelectorAll(`.game__option`);

for (let option of gameOptions) {
  option.addEventListener(`click`, () => changeScreen(stat));
}

const backButton = game3.querySelector(`button.back`);
backButton.addEventListener(`click`, () => changeScreen(greeting));

export default game3;
