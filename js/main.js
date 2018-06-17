// main.js

import {changeScreen} from "./logic/utils";
import {greeting} from "./screens/greeting";

const introButton = document.querySelector(`.intro__asterisk`);

introButton.addEventListener(`click`, () => changeScreen(greeting()));
