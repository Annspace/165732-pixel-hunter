// game3.js
import {render, changeScreen} from '../../logic/utils';
import {greeting} from './greeting';
import {header} from '../../parts/header';
import footer from '../../parts/footer';
import state from "../../game-data/data";
import {stats} from '../../parts/stats';
import {checkAnswersGameThree} from "../../logic/checkAnswers";
import {statistics} from "./statistics";

export const gameThree = (gameData) => {
  const content = `<div class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="${gameData.gameThree[state.screenIndex].question.src1}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${gameData.gameThree[state.screenIndex].question.src2}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${gameData.gameThree[state.screenIndex].question.src3}" alt="Option 1" width="304" height="455">
      </div>
    </form>
    <div class="stats">
       ${stats(state.answers)}
    </div>
  </div>${footer}`;

  const article = `${header(state)}
     ${content}
       ${footer}`;

  const game3 = render(article);

  const gameOptions = game3.querySelectorAll(`.game__option`);

  for (let option of gameOptions) {
    option.addEventListener(`click`, (e) => {
      let answerSrc = e.target.src;
      checkAnswersGameThree(answerSrc, state);
      state.screenIndex++;
      if (state.screenIndex < gameData.gameThree.length) {
        changeScreen(gameThree(gameData));
      } else {
        state.screenIndex = 0;
        changeScreen(statistics());
      }
    });
  }
  const backButton = game3.querySelector(`button.back`);
  backButton.addEventListener(`click`, () => {
    state.resetParams();
    changeScreen(greeting());
  });

  return game3;
};
