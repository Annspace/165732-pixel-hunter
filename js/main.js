// main.js
import {greetingScreen} from './screens/greetingScreen';

const introButton = document.querySelector(`.intro__asterisk`);
introButton.addEventListener(`click`, () => greetingScreen());
