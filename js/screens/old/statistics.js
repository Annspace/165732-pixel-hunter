// statistics.js

import {render, changeScreen} from '../../logic/utils';
import {greeting} from './greeting';
import state from "../../game-data/data";
import {renderResult} from '../../parts/stats';
import footer from "../../parts/footer";

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
        ${renderResult(state.result.gameOne, state.lives, 1)}
    </table>
    <table class="result__table">
        ${renderResult(state.result.gameTwo, state.lives, 2)}
    </table>
    <table class="result__table">
        ${renderResult(state.result.gameThree, state.lives, 3)}
    </table>
  </div>`;

  const article = `${content}${footer}`;
  state.resetParams();
  const statScreen = render(article);
  const backButton = statScreen.querySelector(`button.back`);
  backButton.addEventListener(`click`, () => {
    state.resetParams();
    changeScreen(greeting());
  });

  return statScreen;
};
