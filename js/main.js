// main.js

import {changeScreen} from './utils';
import greeting from './greeting';

const introButton = document.querySelector(`.intro__asterisk`);

introButton.addEventListener(`click`, () => changeScreen(greeting));
