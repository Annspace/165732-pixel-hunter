// greeting.js

import {render, fragmentToString, changeScreen} from './utils';
import rule from "./rules";

const greeting = render(fragmentToString(`greeting`));

const greetingContinue = greeting.querySelector(`.greeting__continue`);
greetingContinue.addEventListener(`click`, () => {
  changeScreen(rule);
});

export default greeting;
