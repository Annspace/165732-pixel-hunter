// greeting.js

import {render, changeScreen} from './utils';
import game from './data';
import rule from "./rules";
import footer from "./footer";

const content = `<div class="greeting central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${game.levels[`greeting`].header}</h3>
      <p>${game.levels[`greeting`].description}</p>
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>`;

const article = `${content}${footer}`;

const greeting = render(article);

const greetingContinue = greeting.querySelector(`.greeting__continue`);
greetingContinue.addEventListener(`click`, () => changeScreen(rule));

export default greeting;
