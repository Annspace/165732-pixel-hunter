// statistics.js

import {render, changeScreen} from '../logic/utils';
import {greeting} from './greeting';
import state from "../game-data/data";
import {result} from '../parts/stats';
import footer from "../parts/footer";

export const statistics = () => {
  const content = `<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
  </header>
  <div class="result">
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        ${result(state.result.gameOne.answers, state.result.gameOne.lives)}
      </tr>
    </table>
        <table class="result__table">
      <tr>
        <td class="result__number">2.</td>
        ${result(state.result.gameTwo.answers, state.result.gameTwo.lives)}
      </tr>
    </table>
        <table class="result__table">
      <tr>
        <td class="result__number">3.</td>
        ${result(state.result.gameThree.answers, state.result.gameThree.lives)}
      </tr>
    </table>
  </div>`;

  const article = `${content}${footer}`;
  state.resetParams();
  const statScreen = render(article);
  const backButton = statScreen.querySelector(`button.back`);
  backButton.addEventListener(`click`, () => changeScreen(greeting()));

  return statScreen;
};
