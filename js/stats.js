// stats.js

import {render, fragmentToString, changeScreen} from './utils';
import greeting from './greeting';

const stat = render(fragmentToString(`stats`));

const backButton = stat.querySelector(`button.back`);
backButton.addEventListener(`click`, () => changeScreen(greeting));

export default stat;
